
import React from "react";
import { BookOpenIcon } from "lucide-react";
import { AdvancedArtStyle } from "@/types";
import { getArtStyleDescription } from "@/data/artStyleDescriptions";

interface ArtStyleDescriptionProps {
  style: AdvancedArtStyle;
  className?: string;
}

const ArtStyleDescription = ({ style, className }: ArtStyleDescriptionProps) => {
  const description = getArtStyleDescription(style);
  
  if (!description) {
    return null;
  }
  
  return (
    <div className={`p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm animate-fade-up ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
          <BookOpenIcon className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h4 className="font-medium text-blue-800 mb-1">Art Style: {style}</h4>
          <p className="text-blue-700 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtStyleDescription;
