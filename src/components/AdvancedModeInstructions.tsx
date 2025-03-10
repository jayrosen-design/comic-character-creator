
import React, { useState, useEffect } from "react";
import { AdvancedArtStyle } from "@/types";
import { ZoomIn, ImageIcon, InfoIcon } from "lucide-react";

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
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Split the art styles into three columns
  const column1 = artStylesList.slice(0, Math.ceil(artStylesList.length / 3));
  const column2 = artStylesList.slice(Math.ceil(artStylesList.length / 3), Math.ceil(2 * artStylesList.length / 3));
  const column3 = artStylesList.slice(Math.ceil(2 * artStylesList.length / 3));

  const handleArtStyleClick = (style: string) => {
    setSelectedArtStyle(style);
    onArtStyleSelect(style as AdvancedArtStyle);
  };

  // Fetch images when an art style is selected
  useEffect(() => {
    if (!selectedArtStyle) return;
    
    setIsLoading(true);
    setError(null);
    setImageUrls([]);
    
    // Get SerpAPI key from sessionStorage
    const serpApiKey = sessionStorage.getItem("serpapi_key");
    
    if (!serpApiKey) {
      setError("SerpAPI key is required to fetch art style examples");
      setIsLoading(false);
      return;
    }
    
    // Create a search query for the art style examples
    const searchQuery = encodeURIComponent(`${selectedArtStyle} art style examples illustration`);
    
    // Use SerpAPI to get images
    fetch(`https://serpapi.com/search.json?engine=google_images&q=${searchQuery}&google_domain=google.com&gl=us&hl=en&api_key=${serpApiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        return response.json();
      })
      .then(data => {
        if (data.images_results && data.images_results.length > 0) {
          // Get the first 3 images from results
          const firstThreeImages = data.images_results.slice(0, 3).map((img: any) => img.original);
          setImageUrls(firstThreeImages);
        } else {
          setError('No images found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching art style images:', err);
        setError('Failed to load example images');
        setIsLoading(false);
      });
  }, [selectedArtStyle]);

  const renderArtStyleItem = (style: string) => (
    <li 
      key={style} 
      className={`text-sm group flex items-center gap-1 cursor-pointer hover:text-primary transition-colors ${selectedArtStyle === style ? 'text-primary font-medium' : ''}`}
      onClick={() => handleArtStyleClick(style)}
    >
      <span>{style}</span>
      <ZoomIn className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </li>
  );

  const renderImageGallery = () => {
    if (isLoading) {
      return (
        <div className="mt-6 p-4 rounded-lg bg-muted/30 flex items-center justify-center" style={{ minHeight: '180px' }}>
          <div className="animate-pulse flex items-center">
            <ImageIcon className="mr-2 h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Loading examples for {selectedArtStyle}...</span>
          </div>
        </div>
      );
    }

    if (error || imageUrls.length === 0) {
      return selectedArtStyle ? (
        <div className="mt-6 p-4 rounded-lg bg-muted/30 flex items-center justify-center" style={{ minHeight: '180px' }}>
          <div className="flex items-center">
            <InfoIcon className="mr-2 h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {error || `No example images available for ${selectedArtStyle}`}
            </span>
          </div>
        </div>
      ) : null;
    }

    return (
      <div className="mt-6">
        <h4 className="text-md font-medium mb-3">Examples of {selectedArtStyle} Art Style:</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {imageUrls.map((url, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="aspect-video">
                <img
                  src={url}
                  alt={`Example of ${selectedArtStyle} art style ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-muted/20 mt-2 px-3 py-2 text-xs text-center text-muted-foreground">
          <span>Images from SerpAPI</span>
        </div>
      </div>
    );
  };

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
      
      {renderImageGallery()}
    </div>
  );
};

export default AdvancedModeInstructions;
