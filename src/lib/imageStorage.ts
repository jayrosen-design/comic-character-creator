
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
export const saveImage = async (url: string, settings: CharacterFormData): Promise<StoredImage> => {
  try {
    // Upload the image to ImgBB
    const permanentUrl = await uploadToImgBB(url);
    
    const images = loadStoredImages();
    const newImage: StoredImage = {
      id: crypto.randomUUID(), // Generate unique ID
      url: permanentUrl,
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

// Delete an image from localStorage
export const deleteImage = (imageId: string): boolean => {
  try {
    const images = loadStoredImages();
    const updatedImages = images.filter(image => image.id !== imageId);
    
    // If no images were removed, return false
    if (updatedImages.length === images.length) {
      return false;
    }
    
    // Store the updated array back in localStorage
    localStorage.setItem("comic-character-images", JSON.stringify(updatedImages));
    return true;
  } catch (error) {
    console.error("Error deleting image from storage:", error);
    return false;
  }
};

// Upload image to ImgBB
const uploadToImgBB = async (imageUrl: string): Promise<string> => {
  try {
    // First, fetch the image as a blob
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch image from OpenAI');
    }
    
    const blob = await response.blob();
    
    // Create form data for upload
    const formData = new FormData();
    formData.append('image', blob);
    
    // Free ImgBB API key (this is a public demo key that can be included in client-side code)
    const apiKey = '6d207e02198a847aa98d0a2a901485a5';
    
    // Upload to ImgBB
    const uploadResponse = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });
    
    if (!uploadResponse.ok) {
      throw new Error('Failed to upload image to ImgBB');
    }
    
    const data = await uploadResponse.json();
    
    // Return the permanent URL
    return data.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    // If upload fails, return the original URL as fallback
    return imageUrl;
  }
};
