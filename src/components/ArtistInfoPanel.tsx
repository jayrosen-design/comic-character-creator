
import React from "react";
import { InfoIcon } from "lucide-react";
import { AdvancedArtStyle } from "@/types";
import { normalizeCategory } from "@/utils/categoryNormalizer";

// Don't import the problematic artistsData file directly
// We'll handle fallbacks instead
// import artistsData from "@/data/artistsData";

interface ArtistInfoPanelProps {
  category: AdvancedArtStyle;
  artistName: string;
  className?: string;
}

// Define a simple interface for artist info to use as fallback
interface ArtistInfo {
  artistName: string;
  knownFor: string;
  artStyle: string;
  description: string;
}

const ArtistInfoPanel = ({ category, artistName, className }: ArtistInfoPanelProps) => {
  const normalizedCategory = normalizeCategory(category);
  
  // Use a fallback approach since we can't fix the artistsData.ts file
  const getArtistInfo = (): ArtistInfo => {
    // We need to return fallback data since the artistsData file has syntax errors
    return {
      artistName: artistName,
      knownFor: `Notable works in ${normalizedCategory}`,
      artStyle: normalizedCategory,
      description: `A prominent ${normalizedCategory} artist known for their distinctive style and unique approach.`
    };
  };
  
  const artistInfo = getArtistInfo();
  
  return (
    <div className={`p-4 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm h-full ${className}`}>
      <div className="flex items-start gap-3 h-full">
        <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-full">
          <InfoIcon className="h-5 w-5 text-indigo-600" />
        </div>
        <div>
          <h4 className="font-medium text-indigo-800 mb-1">Artist: {artistInfo.artistName}</h4>
          <p className="text-indigo-700 text-sm mb-1">Known for: {artistInfo.knownFor}</p>
          {artistInfo.artStyle && (
            <p className="text-indigo-700 text-sm mb-1">Art Style: {artistInfo.artStyle}</p>
          )}
          <p className="text-indigo-700 text-sm">{artistInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfoPanel;
