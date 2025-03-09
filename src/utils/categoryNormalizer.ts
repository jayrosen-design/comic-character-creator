
import { AdvancedArtStyle } from "@/types";

export function normalizeCategory(category: string): string {
  // Handle special cases where the UI name might differ from the data structure name
  const mappings: Record<string, string> = {
    // Map UI display names to the exact category names used in artistsData.ts
    "Children's Book Illustrators": "Children's Book Illustrations",
    "Cartoonists": "Cartoonists",
    "Comic Book Artists": "Comic Book Artists", 
    "Cartoon TV Show Artists": "Cartoon TV Shows",
    "Anime Artists": "Anime",
    "Anime": "Anime",
    "Manga Artists": "Manga",
    "Manga": "Manga",
    "Chibi Artists": "Chibi",
    "Chibi": "Chibi",
    "Digital Artists": "Digital Art",
    "Digital Art": "Digital Art",
    "Digital Art Illustrators": "Digital Art Illustration",
    "Digital Art Illustration": "Digital Art Illustration",
    "Vintage Comic Artists": "Vintage Comic",
    "Vintage Comic": "Vintage Comic",
    "Modern Comic Artists": "Modern Comic",
    "Modern Comic": "Modern Comic",
    "Ukiyo-e Artists": "Ukiyo‐e",
    "Ukiyo‐e": "Ukiyo‐e",
    "Graphic Novel Artists": "Graphic Novel",
    "Graphic Novel": "Graphic Novel",
    "Cel-Shaded Artists": "Cel-Shaded Artist",
    "Cel-Shaded Artist": "Cel-Shaded Artist",
    "Sci-Fi Illustrators": "Sci-Fi Illustrations",
    "Sci-Fi Illustrations": "Sci-Fi Illustrations",
    "Videogame Artists": "Videogame Artists",
    "Pre-1950 Cartoonists": "Pre-1950 Cartoonists",
    "Art Nouveau Artists": "Art Nouveau",
    "Art Nouveau": "Art Nouveau"
  };
  
  // Check if we need normalization or if the category is already normalized
  const normalized = mappings[category] || category;
  
  console.log(`Normalizing category: "${category}" → "${normalized}"`);
  return normalized;
}
