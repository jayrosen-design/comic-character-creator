
import { useState, useEffect } from "react";
import { CharacterFormData } from "@/types";
import { generateCharacterImage } from "@/lib/api";
import { toast } from "sonner";
import { saveImage, loadStoredImages, StoredImage } from "@/lib/imageStorage";

const useCharacterGenerator = () => {
  const [formData, setFormData] = useState<CharacterFormData>({
    artStyle: "",
    characterType: "",
    themeBackground: "",
    action: "",
  });
  
  // Initialize API key from session storage if available
  const [apiKey, setApiKey] = useState<string>(() => {
    return sessionStorage.getItem("openai_api_key") || "";
  });
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<StoredImage[]>([]);
  const [isSavingImage, setIsSavingImage] = useState<boolean>(false);

  // Load stored images on initial render
  useEffect(() => {
    const images = loadStoredImages();
    setGalleryImages(images);
  }, []);

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
      const generatedImageUrl = await generateCharacterImage(formData, apiKey);
      setImageUrl(generatedImageUrl);
      
      // Show toast for uploading
      toast.info("Saving image to gallery...");
      setIsSavingImage(true);
      
      // Save the image to storage (this now includes uploading to ImgBB)
      const newImage = await saveImage(generatedImageUrl, { ...formData });
      
      // Update gallery images
      setGalleryImages(prev => [newImage, ...prev]);
      
      toast.success("Character created and saved to gallery!");
      setIsSavingImage(false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
      setIsSavingImage(false);
    } finally {
      setIsLoading(false);
    }
  };

  const resetImage = () => {
    setImageUrl(null);
  };
  
  const remixCharacter = (settings: CharacterFormData) => {
    setFormData(settings);
    // Scroll to the top of the page to see the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Show toast to indicate settings loaded
    toast.info("Character settings loaded - ready to generate!");
  };

  return {
    formData,
    apiKey,
    imageUrl,
    isLoading,
    isSavingImage,
    error,
    galleryImages,
    updateFormField,
    updateApiKey,
    generateCharacter,
    resetImage,
    remixCharacter,
  };
};

export default useCharacterGenerator;
