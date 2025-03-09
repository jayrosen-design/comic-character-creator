
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
  
  // Instead of using the problematic getArtistInfo function directly,
  // we'll handle this manually with a try/catch block
  const getArtistInfoSafely = (): ArtistInfo | null => {
    try {
      // Try to fetch from the data file, but if it fails, return a fallback
      const artistsModule = require('@/data/artistsData');
      if (typeof artistsModule.getArtistInfo === 'function') {
        return artistsModule.getArtistInfo(normalizedCategory as AdvancedArtStyle, artistName);
      }
      return null;
    } catch (error) {
      console.error("Error fetching artist info:", error);
      // If there's a data parsing error, we'll create a fallback object
      if (artistName) {
        return {
          artistName: artistName,
          knownFor: "Information temporarily unavailable",
          description: "We're experiencing some technical difficulties displaying the full artist information."
        };
      }
      return null;
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
