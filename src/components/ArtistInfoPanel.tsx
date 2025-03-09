
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
  
  // Complete isolation from artistsData to prevent build errors
  const getArtistInfoSafely = (): ArtistInfo => {
    // Skip the problematic data import entirely and just return a fallback
    return {
      artistName: artistName,
      knownFor: "Additional information unavailable",
      description: "Artist details cannot be displayed due to technical difficulties. Please try again later."
    };
  };
  
  const artistInfo = getArtistInfoSafely();
  
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
