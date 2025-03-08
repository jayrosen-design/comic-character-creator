
import { CharacterFormData, ArtistInfo } from "@/types";
import { toast } from "sonner";
import { getArtistInfo } from "@/data/artistsData";

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

  const { artStyle, characterType, theme, background, backgroundColor, action, advancedMode, advancedArtStyle, artistName } = formData;
  
  // Build the prompt from individual conditional parts
  const promptParts: string[] = [];

  // 1. Art style guidance (standard or advanced)
  if (advancedMode && advancedArtStyle && artistName) {
    // Simplified prompt for Advanced Mode
    promptParts.push(
      `Child-friendly, ${advancedArtStyle} illustration of a full body character, in the artistic style of ${artistName}.`
    );
  } else if (artStyle && ART_STYLE_PROMPTS[artStyle]) {
    // Standard art style
    promptParts.push(ART_STYLE_PROMPTS[artStyle]);
  }

  // 2. Character description with setting and action
  promptParts.push(
    `A full-body, uncropped ${characterType} in a ${theme} setting performing ${action}.`
  );

  // 3. Background handling
  if (background === "Solid White") {
    promptParts.push("On a plain white background. For a solid white background, generate a pure character illustration with no additional elements.");
  } else if (background === "Solid Color") {
    promptParts.push(`On a solid ${COLOR_NAME_MAP[backgroundColor] || backgroundColor} background.`);
  } else {
    promptParts.push(`With a background of ${background}.`);
  }

  // 4. Ensure full character is depicted
  promptParts.push("Ensure that only one character is depicted and that the entire character is clearly visible.");

  // 5. Exclude weapons or harmful objects (only in standard mode)
  if (!advancedMode) {
    promptParts.push("Do not include any weapons, guns, or harmful objects in the illustration.");
  }
  
  // 6. Append the safety pre-prompt (only for standard mode)
  if (!advancedMode) {
    promptParts.push(SAFETY_PRE_PROMPT.trim());
  }
  
  // 7. No text instruction - add this for both modes
  promptParts.push("Do not include any text, lettering, or typographic elements in the illustration.");

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
