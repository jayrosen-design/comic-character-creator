
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

  const { artStyle, characterType, theme, background, backgroundColor, action } = formData;
  
  // Build the prompt from individual conditional parts
  const promptParts: string[] = [];

  // 1. Art style-specific prompt (if available)
  if (artStyle && ART_STYLE_PROMPTS[artStyle]) {
    promptParts.push(ART_STYLE_PROMPTS[artStyle]);
  }

  // 2. Character description with setting and action
  promptParts.push(
    `A full-body, uncropped ${characterType} in a ${theme} setting performing ${action}.`
  );

  // 3. Background description (handle Solid White and Solid Color)
  let backgroundDescription = "";
  if (background === "Solid White") {
    backgroundDescription = "on a plain white background";
  } else if (background === "Solid Color") {
    backgroundDescription = `on a solid ${COLOR_NAME_MAP[backgroundColor] || backgroundColor} background`;
  } else {
    backgroundDescription = `with a background of ${background}`;
  }
  promptParts.push(backgroundDescription + ".");

  // 4. Ensure one complete character is depicted
  promptParts.push(
    "Ensure that only one character is depicted and the entire character is clearly visible without any cropping."
  );
  
  // 5. Specific instruction for solid white background
  if (background === "Solid White") {
    promptParts.push(
      "For a solid white background, generate a pure character illustration with no additional background elements."
    );
  }
  
  // 6. Exclude weapons or harmful objects
  promptParts.push("Do not include any weapons, guns, or harmful objects in the illustration.");
  
  // 7. Append the safety pre-prompt
  promptParts.push(SAFETY_PRE_PROMPT.trim());

  // Join all parts into the final prompt string
  const prompt = promptParts.join(" ");

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

// Map color codes to human-readable color names for the prompt
const COLOR_NAME_MAP: Record<string, string> = {
  "#F2FCE2": "soft green",
  "#FEF7CD": "soft yellow",
  "#FEC6A1": "soft orange",
  "#E5DEFF": "soft purple",
  "#FFDEE2": "soft pink",
  "#D3E4FD": "soft blue",
  "#8B5CF6": "vivid purple",
  "#D946EF": "magenta pink",
  "#F97316": "bright orange",
  "#0EA5E9": "ocean blue",
};
