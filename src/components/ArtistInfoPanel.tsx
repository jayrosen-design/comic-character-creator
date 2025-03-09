
import React from "react";
import { InfoIcon } from "lucide-react";
import { AdvancedArtStyle } from "@/types";
import { normalizeCategory } from "@/utils/categoryNormalizer";

interface ArtistInfoPanelProps {
  category: AdvancedArtStyle;
  artistName: string;
  className?: string;
}

// Define a simple interface for artist info to use as fallback
interface ArtistInfo {
  artistName: string;
  knownFor: string;
  description: string;
}

const ArtistInfoPanel = ({ category, artistName, className }: ArtistInfoPanelProps) => {
  const normalizedCategory = normalizeCategory(category);
  
  // Enhanced safe access to artist info data
  const getArtistInfoSafely = (): ArtistInfo | null => {
    if (!artistName || !category) return null;
    
    try {
      // First attempt: try to safely require the module
      try {
        const artistsModule = require('@/data/artistsData');
        if (typeof artistsModule.getArtistInfo === 'function') {
          try {
            const result = artistsModule.getArtistInfo(normalizedCategory as AdvancedArtStyle, artistName);
            if (result) return result;
          } catch (innerError) {
            console.error("Error getting artist info from function:", innerError);
          }
        }
      } catch (moduleError) {
        console.error("Error importing artists data module:", moduleError);
      }
      
      // If we got here, provide a fallback
      if (artistName) {
        return {
          artistName: artistName,
          knownFor: "Information temporarily unavailable",
          description: "We're experiencing some technical difficulties displaying the full artist information."
        };
      }
      
      return null;
    } catch (error) {
      console.error("Unexpected error in getArtistInfoSafely:", error);
      // Final fallback
      return artistName ? {
        artistName: artistName,
        knownFor: "Information unavailable",
        description: "Artist information cannot be displayed."
      } : null;
    }
  };
  
  const artistInfo = getArtistInfoSafely();
  
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
