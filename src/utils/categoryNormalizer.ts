
import { AdvancedArtStyle } from "@/types";

export function normalizeCategory(category: string): string {
  // Handle special cases where the UI name might differ from the data structure name
  const mappings: Record<string, string> = {
    "Children's Book Illustrators": "Children's Book Illustrations",
    "Cartoonists": "Cartoonists",
    "Comic Book Artists": "Comic Book Artists", 
    "Cartoon TV Show Artists": "Cartoon TV Shows",
    "Anime Artists": "Anime",
    "Manga Artists": "Manga",
    "Chibi Artists": "Chibi",
    "Digital Artists": "Digital Art",
    "Digital Art Illustrators": "Digital Art Illustration",
    "Vintage Comic Artists": "Vintage Comic",
    "Modern Comic Artists": "Modern Comic",
    "Ukiyo-e Artists": "Ukiyo‐e",
    "Graphic Novel Artists": "Graphic Novel",
    "Cel-Shaded Artists": "Cel-Shaded Artist",
    "Sci-Fi Illustrators": "Sci-Fi Illustrations",
    "Videogame Artists": "Videogame Artists",
    "Pre-1950 Cartoonists": "Pre-1950 Cartoonists",
    "Art Nouveau Artists": "Art Nouveau"
  };
  
  // Check if we need normalization or if the category is already normalized
  const normalized = mappings[category] || category;
  
  console.log(`Normalizing category: "${category}" → "${normalized}"`);
  return normalized;
}
