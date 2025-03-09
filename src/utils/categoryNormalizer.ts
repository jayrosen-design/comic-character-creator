
import { AdvancedArtStyle } from "@/types";

export function normalizeCategory(category: string): string {
  // Handle special cases where the UI name might differ from the data structure name
  const mappings: Record<string, string> = {
    "Children's Book Illustrators": "Children's Book Illustrations",
    "Cartoonists": "Cartoonists",
    "Comic Book Artists": "Comic Book Artists", 
    "Cartoon TV Show Artists": "Cartoon TV Shows",
    "Anime": "Anime",
    "Manga Artists": "Manga",
    "Chibi Artists": "Chibi",
    "Digital Artists": "Digital Art",
    "Digital Art Illustration": "Digital Art Illustration",
    "Vintage Comic": "Vintage Comic",
    "Modern Comic": "Modern Comic",
    "Ukiyo-e": "Ukiyo‐e",
    "Graphic Novel": "Graphic Novel",
    "Cel-Shaded Artist": "Cel-Shaded Artist",
    "Sci-Fi Illustrations": "Sci-Fi Illustrations",
    "Videogame Artists": "Videogame Artists",
    "Pre-1950 Cartoonists": "Pre-1950 Cartoonists",
    "Art Nouveau": "Art Nouveau"
  };
  
  return mappings[category] || category;
}
