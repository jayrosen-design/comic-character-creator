
import { CharacterFormData } from "@/types";
import { toast } from "sonner";

const OPENAI_API_URL = "https://api.openai.com/v1/images/generations";

// Safety pre-prompt for child-friendly content
const SAFETY_PRE_PROMPT = `
Generate a child-friendly comic/cartoon illustration suitable for children in grades 3-5. 
The image should depict a friendly and playful character in a colorful, imaginative setting. 
The illustration must be clear, non-violent, and free from any explicit, aggressive, or disturbing content.

Acceptable examples include:
- A cheerful boy or girl exploring an enchanted forest with vibrant colors.
- A friendly cat or dog playing or interacting in a light-hearted scene.
- Fantasy characters such as fairies, robots, or aliens in a magical, whimsical environment with rainbows, sparkles, or gentle adventure themes.

Unacceptable examples include:
- Any depiction of violence, weapons, or aggressive behavior.
- Realistic portrayals of injuries, frightening scenarios, or any imagery that could be interpreted as scary or gory.
- Any adult themes or explicit content.
`;

// Art style-specific pre-prompts to guide DALL-E 3
const ART_STYLE_PROMPTS = {
  "Classic Comic": "Generate an illustration in a classic comic style: use bold ink outlines, vibrant colors, and halftone dot effects to create a dynamic, panel-like look reminiscent of mid-20th century comic books. The artwork should have clear, defined lines and a slightly retro feel.",
  
  "Manga": "Generate an illustration in a traditional manga style: draw it primarily in black and white with minimal use of color. Use clean line art, expressive facial features, and detailed cross-hatching for shading, evoking the classic look of Japanese manga.",
  
  "Modern Cartoon": "Generate an illustration in a modern cartoon style: use smooth, clean lines and a playful digital look with bright, varied colors. The image should be simple yet energetic, capturing a contemporary animated feel.",
  
  "Superhero": "Generate an illustration in a superhero comic style: depict dynamic poses and dramatic lighting with bold, striking colors and strong outlines. The image should exude action and heroism, reminiscent of classic superhero adventures.",
  
  "Animated": "Generate an illustration in an animated style: create a lively, energetic scene with vibrant colors, smooth curves, and simple shading that mimic the look of popular TV cartoons. The artwork should feel like it's ready for a fun animated series.",
  
  "Vintage": "Generate an illustration in a vintage comic style: use muted or sepia-toned colors, soft lines, and a slightly aged texture to evoke a nostalgic, old-school feel. The artwork should look like it came from a classic storybook or early comic strip.",
  
  "Chibi": "Generate an illustration in a chibi style: create characters with cute, exaggerated proportions such as oversized heads and large eyes. Use soft pastel colors and minimal, playful detail to make the characters look adorable and endearing.",
  
  "Digital Art": "Generate an illustration in a digital art style: produce a crisp, high-resolution image with clean lines and a vibrant color palette that highlights modern digital techniques. The artwork should be sharp and detailed, showcasing the versatility of digital creation.",
  
  "Watercolor": "Generate an illustration in a watercolor style: use soft, blended colors and delicate brush strokes to create a dreamy, hand-painted look. The image should have gentle gradients and a fluid, artistic quality that feels like a watercolor painting.",
  
  "Minimalist": "Generate an illustration in a minimalist style: use simple shapes, a limited color palette, and clean lines to clearly depict the subject. The artwork should convey its idea with minimal detail while remaining visually appealing and easy to understand."
};

export const generateCharacterImage = async (
  formData: CharacterFormData,
  apiKey: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error("OpenAI API key is required");
  }

  const { artStyle, characterType, themeBackground, action } = formData;

  // Get the art style-specific prompt
  const artStylePrompt = artStyle ? ART_STYLE_PROMPTS[artStyle] : "";

  // Compose the prompt using user selections and style-specific prompt
  const prompt = `
    ${artStylePrompt}
    
    A ${characterType} in a ${themeBackground} setting, ${action}. 
    
    ${SAFETY_PRE_PROMPT}
  `;

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      throw new Error(
        errorData.error?.message || "Failed to generate character image"
      );
    }

    const data = await response.json();
    return data.data[0].url;
  } catch (error) {
    console.error("Error generating character:", error);
    let errorMessage = "Failed to generate character image";
    
    if (error instanceof Error) {
      errorMessage = error.message;
      
      // Handle specific API errors
      if (errorMessage.includes("Unauthorized")) {
        errorMessage = "Invalid API key. Please check your OpenAI API key.";
      } else if (errorMessage.includes("insufficient_quota")) {
        errorMessage = "Your OpenAI account has insufficient quota.";
      } else if (errorMessage.includes("rate_limit_exceeded")) {
        errorMessage = "Rate limit exceeded. Please try again later.";
      }
    }
    
    toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};
