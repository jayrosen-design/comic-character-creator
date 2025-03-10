
import React, { useState } from "react";
import { AdvancedArtStyle } from "@/types";
import { ZoomIn } from "lucide-react";
import ArtStyleExamplesModal from "./ArtStyleExamplesModal";

const artStylesList: AdvancedArtStyle[] = [
  // Traditional art styles
  "Art Nouveau",
  "Ukiyo‐e",
  
  // Comic and illustration styles
  "Comic Book",
  "Vintage Comic",
  "Modern Comic",
  "Graphic Novel",
  "Manga",
  
  // Animation and cartoon styles
  "Cartoon",
  "Cartoon TV Shows",
  "Anime", 
  "Chibi",
  "Cel-Shaded",
  
  // Book and illustration styles
  "Children's Book Illustrations",
  "Sci-Fi Illustrations",
  
  // Modern and digital styles
  "Digital Art",
  "Digital Art Illustration",
  "Videogame Art",
  
  // Historical
  "Pre-1950 Cartoons"
];

interface AdvancedModeInstructionsProps {
  onArtStyleSelect: (style: AdvancedArtStyle) => void;
}

const AdvancedModeInstructions = ({ onArtStyleSelect }: AdvancedModeInstructionsProps) => {
  const [selectedArtStyle, setSelectedArtStyle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Split the art styles into three columns
  const column1 = artStylesList.slice(0, Math.ceil(artStylesList.length / 3));
  const column2 = artStylesList.slice(Math.ceil(artStylesList.length / 3), Math.ceil(2 * artStylesList.length / 3));
  const column3 = artStylesList.slice(Math.ceil(2 * artStylesList.length / 3));

  const handleArtStyleClick = (style: string) => {
    setSelectedArtStyle(style);
    setIsModalOpen(true);
    onArtStyleSelect(style as AdvancedArtStyle);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderArtStyleItem = (style: string) => (
    <li 
      key={style} 
      className="text-sm group flex items-center gap-1 cursor-pointer hover:text-primary transition-colors"
      onClick={() => handleArtStyleClick(style)}
    >
      <span>{style}</span>
      <ZoomIn className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </li>
  );

  return (
    <div className="glass-card p-6 rounded-2xl">
      <h3 className="text-lg font-medium mb-4">Advanced Mode Instructions</h3>
      <p className="text-muted-foreground mb-6">
        Select an Art Style from the dropdown, and then select an artist to learn more about the genre and artist.
        <span className="block mt-2 text-sm">Click on any art style below to see example images and select it.</span>
      </p>
      
      <h4 className="text-md font-medium mb-3">Available Art Styles:</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ul className="list-disc pl-5 space-y-2">
          {column1.map(renderArtStyleItem)}
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          {column2.map(renderArtStyleItem)}
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          {column3.map(renderArtStyleItem)}
        </ul>
      </div>
      
      <ArtStyleExamplesModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        artStyle={selectedArtStyle}
      />
    </div>
  );
};

export default AdvancedModeInstructions;
