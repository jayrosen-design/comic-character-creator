
import React from "react";
import { InfoIcon } from "lucide-react";
import { AdvancedArtStyle } from "@/types";
import { getArtistInfo } from "@/data/artistsData";
import { normalizeCategory } from "@/utils/categoryNormalizer";

interface ArtistInfoPanelProps {
  category: AdvancedArtStyle;
  artistName: string;
  className?: string;
}

const ArtistInfoPanel = ({ category, artistName, className }: ArtistInfoPanelProps) => {
  const normalizedCategory = normalizeCategory(category);
  
  // Safely attempt to get artist info, return null if there's an error
  let artistInfo;
  try {
    artistInfo = getArtistInfo(normalizedCategory as AdvancedArtStyle, artistName);
  } catch (error) {
    console.error("Error fetching artist info:", error);
    return null;
  }
  
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
