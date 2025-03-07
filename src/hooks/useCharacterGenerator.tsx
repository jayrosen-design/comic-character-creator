
import { useState } from "react";
import { CharacterFormData } from "@/types";
import { generateCharacterImage } from "@/lib/api";
import { toast } from "sonner";

const useCharacterGenerator = () => {
  const [formData, setFormData] = useState<CharacterFormData>({
    artStyle: "",
    characterType: "",
    themeBackground: "",
    action: "",
  });
  
  const [apiKey, setApiKey] = useState<string>(() => {
    return sessionStorage.getItem("openai_api_key") || "";
  });
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const updateFormField = <K extends keyof CharacterFormData>(
    field: K,
    value: CharacterFormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateApiKey = (key: string) => {
    setApiKey(key);
    // Store API key in session storage
    sessionStorage.setItem("openai_api_key", key);
  };

  const validateForm = (): boolean => {
    if (!apiKey) {
      toast.error("Please enter your OpenAI API key");
      return false;
    }

    // Check if all form fields are filled
    const isComplete = Object.values(formData).every((value) => value !== "");
    
    if (!isComplete) {
      toast.error("Please complete all character options");
      return false;
    }

    return true;
  };

  const generateCharacter = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      const imageUrl = await generateCharacterImage(formData, apiKey);
      setImageUrl(imageUrl);
      toast.success("Character created successfully!");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetImage = () => {
    setImageUrl(null);
  };

  return {
    formData,
    apiKey,
    imageUrl,
    isLoading,
    error,
    updateFormField,
    updateApiKey,
    generateCharacter,
    resetImage,
  };
};

export default useCharacterGenerator;
