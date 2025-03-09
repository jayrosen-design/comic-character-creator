/**
 * This utility normalizes UI-friendly category names to match
 * the exact category names used in the ARTISTS_DATA array
 */

const CATEGORY_MAP: Record<string, string> = {
  // Mapping UI display names to exact category names in ARTISTS_DATA
  "Children's Book Illustrators": "Children's Book Illustrations",
  "Comic Book Artists": "Comic Book Artists",
  "Cartoonists": "Cartoonists",
  "Cartoon TV Show Artists": "Cartoon TV Shows",
  "Chibi Artists": "Chibi",
  "Digital Art Illustrators": "Digital Art Illustration", 
  "Digital Artists": "Digital Art",
  "Manga Artists": "Manga",
  "Anime Artists": "Anime",
  "Videogame Artists": "Videogame Artists",
  "Modern Comic Artists": "Modern Comic",
  "Vintage Comic Artists": "Vintage Comic",
  "Cel-Shaded Artists": "Cel-Shaded Artist",
  "Art Nouveau Artists": "Art Nouveau",
  "Graphic Novel Artists": "Graphic Novel",
  "Sci-Fi Illustrators": "Sci-Fi Illustrations",
  "Ukiyo-e Artists": "Ukiyo‐e",
  "Pre-1950 Cartoonists": "Pre-1950 Cartoonists"
};

export const normalizeCategory = (category: string): string => {
  console.log(`Normalizing category: "${category}" → "${CATEGORY_MAP[category] || category}"`);
  
  // If there's a direct mapping, use it
  if (CATEGORY_MAP[category]) {
    return CATEGORY_MAP[category];
  }
  
  // Otherwise, return the category as is
  return category;
};
