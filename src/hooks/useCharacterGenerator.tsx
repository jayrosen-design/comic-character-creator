
import { useState, useEffect } from "react";
import { CharacterFormData } from "@/types";
import { generateCharacterImage } from "@/lib/api";
import { toast } from "sonner";
import { saveImage, loadStoredImages, deleteImage, StoredImage } from "@/lib/imageStorage";

const useCharacterGenerator = () => {
  const [formData, setFormData] = useState<CharacterFormData>({
    artStyle: "",
    characterType: "",
    theme: "",
    background: "",
    backgroundColor: "",
    action: "",
    advancedMode: false,
    advancedArtStyle: "",
    artistName: "",
  });
  
  const [apiKey, setApiKey] = useState<string>(() => {
    return sessionStorage.getItem("openai_api_key") || "";
  });
  
  const [serpApiKey, setSerpApiKey] = useState<string>(() => {
    return sessionStorage.getItem("serpapi_key") || "";
  });
  
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<StoredImage[]>([]);
  const [isSavingImage, setIsSavingImage] = useState<boolean>(false);

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

  const updateApiKey = (key: string, keyType: 'openai' | 'serpapi') => {
    if (keyType === 'openai') {
      setApiKey(key);
      sessionStorage.setItem("openai_api_key", key);
    } else if (keyType === 'serpapi') {
      setSerpApiKey(key);
      sessionStorage.setItem("serpapi_key", key);
    }
  };

  const validateForm = (): boolean => {
    if (!apiKey) {
      toast.error("Please enter your OpenAI API key");
      return false;
    }

    const requiredFields: (keyof CharacterFormData)[] = ["characterType", "theme", "background", "action"];
    const isComplete = requiredFields.every(field => formData[field] !== "");
    
    // Validate art style based on mode
    if (formData.advancedMode) {
      if (!formData.advancedArtStyle) {
        toast.error("Please select an Advanced Art Style");
        return false;
      }
      if (!formData.artistName) {
        toast.error("Please select an Artist");
        return false;
      }
    } else {
      if (!formData.artStyle) {
        toast.error("Please select an Art Style");
        return false;
      }
    }
    
    if (formData.background === "Solid Color" && !formData.backgroundColor) {
      toast.error("Please select a background color");
      return false;
    }
    
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
      
      toast.info("Saving image to gallery...");
      setIsSavingImage(true);
      
      const newImage = await saveImage(generatedImageUrl, { ...formData });
      
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast.info("Character settings loaded - ready to generate!");
  };

  const deleteCharacter = (imageId: string) => {
    const success = deleteImage(imageId);
    
    if (success) {
      setGalleryImages(prev => prev.filter(img => img.id !== imageId));
      toast.success("Character deleted from gallery");
    } else {
      toast.error("Failed to delete character");
    }
  };

  return {
    formData,
    apiKey,
    serpApiKey,
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
    deleteCharacter,
  };
};

export default useCharacterGenerator;
