import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArtStyle, AdvancedArtStyle } from "@/types";
import ArtStyleFunFact from "./ArtStyleFunFact";
import ArtistInfoPanel from "./ArtistInfoPanel";
import ArtistExampleImage from "./ArtistExampleImage";
import ArtStyleDescription from "@/components/ArtStyleDescription";

interface ImageDisplayProps {
  imageUrl: string | null;
  artStyle?: ArtStyle | "";
  advancedMode?: boolean;
  advancedArtStyle?: AdvancedArtStyle | "";
  artistName?: string | "";
  onRegenerate: () => void;
  isLoading: boolean;
  isSavingImage?: boolean;
  className?: string;
  showArtistInfo?: boolean;
}

const ImageDisplay = ({ 
  imageUrl, 
  artStyle, 
  advancedMode = false,
  advancedArtStyle = "",
  artistName = "",
  onRegenerate, 
  isLoading, 
  isSavingImage = false, 
  className,
  showArtistInfo = false
}: ImageDisplayProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    if (imageUrl) {
      setIsImageLoading(true);
    }
  }, [imageUrl]);

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "comic-character.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shouldShowArtistInfo = (advancedMode && advancedArtStyle && artistName) && 
    (showArtistInfo || (!isLoading && imageUrl));

  if (!imageUrl && !isLoading && !shouldShowArtistInfo) {
    return null;
  }

  return (
    <div className={cn("w-full max-w-3xl mx-auto mt-8", className)}>
      {advancedMode && advancedArtStyle && (
        <ArtStyleDescription 
          style={advancedArtStyle} 
          className="mb-4"
        />
      )}
      
      {advancedMode && advancedArtStyle && artistName && (
        <ArtistInfoPanel
          category={advancedArtStyle}
          artistName={artistName}
          className="mb-4"
        />
      )}

      {shouldShowArtistInfo && (
        <div className="mb-6 grid gap-6 md:grid-cols-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <ArtistInfoPanel 
            category={advancedArtStyle as AdvancedArtStyle} 
            artistName={artistName}
            className="h-full"
          />
          <ArtistExampleImage 
            artistName={artistName}
            className="h-full"
          />
        </div>
      )}

      {(isLoading || imageUrl) && (
        <div className="relative bg-white/50 rounded-2xl overflow-hidden shadow-lg border border-white/60 animate-scale-in">
          {isLoading ? (
            <div className="aspect-square flex items-center justify-center bg-muted/30">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                  <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={imageUrl || ""}
                alt="Generated comic character"
                className={cn(
                  "w-full aspect-square object-cover transition-opacity duration-500",
                  isImageLoading ? "opacity-0" : "opacity-100"
                )}
                onLoad={handleImageLoad}
              />
            </>
          )}
        </div>
      )}

      {!isLoading && imageUrl && !advancedMode && artStyle && (
        <div className="mt-4 mb-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <ArtStyleFunFact artStyle={artStyle as ArtStyle} />
        </div>
      )}

      {!isLoading && imageUrl && (
        <div className="flex justify-center mt-6 space-x-4 animate-fade-up">
          {isSavingImage ? (
            <div className="text-center py-2">
              <div className="inline-block w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin mr-2"></div>
              <span className="text-muted-foreground">Saving to gallery...</span>
            </div>
          ) : (
            <>
              <Button
                onClick={onRegenerate}
                variant="outline"
                className="rounded-xl px-6 py-5 bg-white shadow-sm border-primary/20 hover:bg-primary/5 button-bounce"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Create New Character
              </Button>
              <Button
                onClick={handleDownload}
                className="rounded-xl px-6 py-5 bg-primary hover:bg-primary/90 text-white shadow-md button-bounce"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Image
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
