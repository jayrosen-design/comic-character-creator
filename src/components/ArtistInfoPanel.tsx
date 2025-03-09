
import React from "react";
import { InfoIcon } from "lucide-react";
import { AdvancedArtStyle } from "@/types";
import { getArtistInfo } from "@/data/artistsData";

interface ArtistInfoPanelProps {
  category: AdvancedArtStyle;
  artistName: string;
  className?: string;
}

const ArtistInfoPanel = ({ category, artistName, className }: ArtistInfoPanelProps) => {
  // Function to normalize category names to match data structure
  const normalizeCategory = (category: string): string => {
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
  };
  
  const normalizedCategory = normalizeCategory(category);
  const artistInfo = getArtistInfo(normalizedCategory as AdvancedArtStyle, artistName);
  
  if (!artistInfo) {
    return null;
  }
  
  return (
    <div className={`p-4 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm h-full ${className}`}>
      <div className="flex items-start gap-3 h-full">
        <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full">
          <InfoIcon className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <h4 className="font-medium text-indigo-800 mb-1">Artist: {artistInfo.artistName}</h4>
          <p className="text-indigo-700 text-sm mb-1">Known for: {artistInfo.knownFor}</p>
          <p className="text-indigo-700 text-sm">{artistInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfoPanel;
