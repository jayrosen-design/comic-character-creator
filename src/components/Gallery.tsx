
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Trash2, ChevronDown } from "lucide-react";
import { StoredImage } from "@/lib/imageStorage";
import { CharacterFormData } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryProps {
  images: StoredImage[];
  onRemix: (settings: CharacterFormData) => void;
  onDelete: (imageId: string) => void;
  className?: string;
}

const Gallery = ({ images, onRemix, onDelete, className }: GalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(9);
  
  // No images to display
  if (!images.length) {
    return (
      <div className={cn("w-full py-12 text-center", className)}>
        <p className="text-muted-foreground">No images in the gallery yet. Create your first character above!</p>
      </div>
    );
  }

  const visibleImages = images.slice(0, visibleCount);
  const hasMoreToLoad = visibleCount < images.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const formatSettingsCaption = (settings: CharacterFormData) => {
    return `${settings.artStyle} ${settings.characterType} in ${settings.theme}, ${settings.background}, ${settings.action}`;
  };

  return (
    <div className={cn("w-full space-y-6", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleImages.map((image) => (
          <div 
            key={image.id} 
            className="bg-white/50 rounded-xl overflow-hidden shadow-md border border-white/60 transition-all hover:shadow-lg animate-fade-in"
          >
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={image.url}
                alt={formatSettingsCaption(image.settings)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <p className="text-sm text-foreground/70 line-clamp-2">
                {formatSettingsCaption(image.settings)}
              </p>
              <div className="flex gap-2">
                <Button 
                  onClick={() => onRemix(image.settings)} 
                  variant="outline"
                  size="sm"
                  className="flex-1 rounded-lg border-primary/20 bg-white shadow-sm hover:bg-primary/5"
                >
                  <RefreshCw className="mr-2 h-3.5 w-3.5" />
                  Remix this character
                </Button>
                <Button
                  onClick={() => onDelete(image.id)}
                  variant="outline"
                  size="sm"
                  className="rounded-lg border-destructive/20 bg-white shadow-sm hover:bg-destructive/10"
                >
                  <Trash2 className="h-3.5 w-3.5 text-destructive" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreToLoad && (
        <div className="flex justify-center mt-8">
          <Button 
            onClick={handleLoadMore} 
            variant="outline"
            className="rounded-xl px-6 py-5 bg-white shadow-sm border-primary/20 hover:bg-primary/5 button-bounce"
          >
            <ChevronDown className="mr-2 h-4 w-4" />
            Load More Images
          </Button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
