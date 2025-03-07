
import React from "react";
import { LightbulbIcon } from "lucide-react";
import { ArtStyle } from "@/types";
import { getRandomFunFact } from "@/data/artStyleFunFacts";

interface ArtStyleFunFactProps {
  artStyle: ArtStyle;
  className?: string;
}

const ArtStyleFunFact = ({ artStyle, className }: ArtStyleFunFactProps) => {
  const funFact = getRandomFunFact(artStyle);
  
  return (
    <div className={`p-4 rounded-xl bg-amber-50 border border-amber-200 shadow-sm animate-fade-up ${className}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
          <LightbulbIcon className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h4 className="font-medium text-amber-800 mb-1">Fun Fact: {artStyle}</h4>
          <p className="text-amber-700 text-sm">{funFact}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtStyleFunFact;
