
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageDisplayProps {
  imageUrl: string | null;
  onRegenerate: () => void;
  isLoading: boolean;
  className?: string;
}

const ImageDisplay = ({ imageUrl, onRegenerate, isLoading, className }: ImageDisplayProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Reset loading state when imageUrl changes
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

  if (!imageUrl && !isLoading) {
    return null;
  }

  return (
    <div className={cn("w-full max-w-3xl mx-auto mt-8", className)}>
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

      {!isLoading && imageUrl && (
        <div className="flex justify-center mt-6 space-x-4 animate-fade-up">
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
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
