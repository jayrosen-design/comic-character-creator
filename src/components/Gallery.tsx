
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Trash2, ChevronDown, Download, Box } from "lucide-react";
import { StoredImage } from "@/lib/imageStorage";
import { CharacterFormData } from "@/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GalleryProps {
  images: StoredImage[];
  onRemix: (settings: CharacterFormData) => void;
  onDelete: (imageId: string) => void;
  className?: string;
}

const Gallery = ({ images, onRemix, onDelete, className }: GalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(9);
  
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

  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${fileName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      toast.error("Failed to download image");
    }
  };

  const handleView3D = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Image URL copied to clipboard");
      window.open('https://huggingface.co/spaces/JeffreyXiang/TRELLIS', '_blank');
    } catch (error) {
      toast.error("Failed to copy image URL");
    }
  };

  const formatSettingsCaption = (settings: CharacterFormData) => {
    // Check if the image was created in advanced mode
    if (settings.advancedMode && settings.advancedArtStyle && settings.artistName) {
      return `${settings.advancedArtStyle} in the style of artist ${settings.artistName}, ${settings.characterType} in ${settings.theme}, ${settings.background}, ${settings.action}`;
    }
    
    // Regular mode caption
    return `${settings.artStyle} ${settings.characterType} in ${settings.theme}, ${settings.background}, ${settings.action}`;
  };

  return (
    <TooltipProvider>
      <div className={cn("w-full space-y-6", className)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image) => (
            <div 
              key={image.id} 
              className="bg-white/50 dark:bg-black/20 rounded-xl overflow-hidden shadow-md border border-white/60 dark:border-white/10 transition-all hover:shadow-lg animate-fade-in"
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
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        onClick={() => onRemix(image.settings)} 
                        variant="outline"
                        size="icon"
                        className="rounded-lg border-primary/20 bg-white dark:bg-black/40 shadow-sm hover:bg-primary/5 dark:text-white dark:hover:bg-white/10"
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Remix this character</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => handleDownload(image.url, `character-${image.id}`)}
                        variant="outline"
                        size="icon"
                        className="rounded-lg border-primary/20 bg-white dark:bg-black/40 shadow-sm hover:bg-primary/5 dark:text-white dark:hover:bg-white/10"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download image</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => handleView3D(image.url)}
                        variant="outline"
                        size="icon"
                        className="rounded-lg border-primary/20 bg-white dark:bg-black/40 shadow-sm hover:bg-primary/5 dark:text-white dark:hover:bg-white/10"
                      >
                        <Box className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View in 3D (TRELLIS)</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => onDelete(image.id)}
                        variant="outline"
                        size="icon"
                        className="rounded-lg border-destructive/20 bg-white dark:bg-black/40 shadow-sm hover:bg-destructive/10 dark:text-white dark:hover:bg-white/10"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete image</p>
                    </TooltipContent>
                  </Tooltip>
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
              className="rounded-xl px-6 py-5 bg-white dark:bg-black/40 shadow-sm border-primary/20 hover:bg-primary/5 dark:text-white dark:hover:bg-white/10 button-bounce"
            >
              <ChevronDown className="mr-2 h-4 w-4" />
              Load More Images
            </Button>
          </div>
        )}
      </div>
    </TooltipProvider>
  );
};

export default Gallery;
