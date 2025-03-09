
import React from "react";
import { InfoIcon } from "lucide-react";
import { AdvancedArtStyle } from "@/types";
import { normalizeCategory } from "@/utils/categoryNormalizer";
import artistsData from "@/data/artistsData";

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
  
  // Get artist info from artistsData
  const getArtistInfo = (): ArtistInfo => {
    try {
      // Find the artist in the data
      const categoryData = artistsData[normalizedCategory] || [];
      const artist = categoryData.find(artist => artist.name === artistName);
      
      if (artist) {
        return {
          artistName: artist.name,
          knownFor: artist.knownFor || `Notable works in ${normalizedCategory}`,
          artStyle: artist.artStyle || "",
          description: artist.description || `A prominent artist known for their distinctive style and contributions to ${normalizedCategory}.`
        };
      }
    } catch (error) {
      console.error("Error retrieving artist info:", error);
    }
    
    // Fallback if artist not found
    return {
      artistName: artistName,
      knownFor: `Notable works in ${normalizedCategory}`,
      artStyle: "",
      description: `A prominent artist known for their distinctive style and contributions to ${normalizedCategory}.`
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
