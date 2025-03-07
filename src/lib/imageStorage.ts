
import { CharacterFormData } from "@/types";

export interface StoredImage {
  id: string;
  url: string;
  createdAt: number;
  settings: CharacterFormData;
}

// Load images from localStorage
export const loadStoredImages = (): StoredImage[] => {
  try {
    const storedData = localStorage.getItem("comic-character-images");
    if (storedData) {
      return JSON.parse(storedData);
    }
  } catch (error) {
    console.error("Error loading images from storage:", error);
  }
  return [];
};

// Save a new image to localStorage
export const saveImage = (url: string, settings: CharacterFormData): StoredImage => {
  try {
    const images = loadStoredImages();
    const newImage: StoredImage = {
      id: crypto.randomUUID(), // Generate unique ID
      url,
      createdAt: Date.now(),
      settings,
    };
    
    // Add new image to the beginning of the array
    const updatedImages = [newImage, ...images];
    
    // Store in localStorage
    localStorage.setItem("comic-character-images", JSON.stringify(updatedImages));
    
    return newImage;
  } catch (error) {
    console.error("Error saving image to storage:", error);
    throw error;
  }
};
