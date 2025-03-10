import React from "react";
import { AdvancedArtStyle } from "@/types";

const artStylesList: AdvancedArtStyle[] = [
  "Children's Book Illustrations",
  "Comic Book",
  "Cartoon",
  "Cartoon TV Shows",
  "Anime",
  "Manga",
  "Chibi",
  "Digital Art",
  "Digital Art Illustration",
  "Cel-Shaded",
  "Sci-Fi Illustrations",
  "Videogame Art",
  "Pre-1950 Cartoons",
  "Art Nouveau",
  "Vintage Comic",
  "Modern Comic",
  "Ukiyo‐e",
  "Graphic Novel"
];

const AdvancedModeInstructions = () => {
  // Split the art styles into three columns
  const column1 = artStylesList.slice(0, Math.ceil(artStylesList.length / 3));
  const column2 = artStylesList.slice(Math.ceil(artStylesList.length / 3), Math.ceil(2 * artStylesList.length / 3));
  const column3 = artStylesList.slice(Math.ceil(2 * artStylesList.length / 3));

  return (
    <div className="glass-card p-6 rounded-2xl">
      <h3 className="text-lg font-medium mb-4">Advanced Mode Instructions</h3>
      <p className="text-muted-foreground mb-6">
        Select an Art Style from the dropdown, and then select an artist to learn more about the genre and artist.
      </p>
      
      <h4 className="text-md font-medium mb-3">Available Art Styles:</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ul className="list-disc pl-5 space-y-2">
          {column1.map((style) => (
            <li key={style} className="text-sm">{style}</li>
          ))}
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          {column2.map((style) => (
            <li key={style} className="text-sm">{style}</li>
          ))}
        </ul>
        <ul className="list-disc pl-5 space-y-2">
          {column3.map((style) => (
            <li key={style} className="text-sm">{style}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvancedModeInstructions;
