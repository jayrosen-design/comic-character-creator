
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

export const generateCharacterImage = async (
  formData: CharacterFormData,
  apiKey: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error("OpenAI API key is required");
  }

  const { artStyle, characterType, themeBackground, action } = formData;

  // Compose the prompt using user selections
  const prompt = `
    ${artStyle}, ${characterType} in a ${themeBackground} setting, ${action}. 
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
