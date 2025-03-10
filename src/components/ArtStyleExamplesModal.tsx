
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ImageIcon, InfoIcon, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArtStyleExamplesModalProps {
  isOpen: boolean;
  onClose: () => void;
  artStyle: string | null;
}

const ArtStyleExamplesModal = ({ isOpen, onClose, artStyle }: ArtStyleExamplesModalProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [zoom, setZoom] = useState(1);

  // Reset zoom level when modal opens or image changes
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setSelectedImageIndex(0);
    }
  }, [isOpen, artStyle]);

  useEffect(() => {
    if (!artStyle || !isOpen) return;
    
    setIsLoading(true);
    setError(null);
    
    // Get SerpAPI key from sessionStorage
    const serpApiKey = sessionStorage.getItem("serpapi_key");
    
    if (!serpApiKey) {
      setError("SerpAPI key is required to fetch art style examples");
      setIsLoading(false);
      return;
    }
    
    // Create a search query for the art style examples
    const searchQuery = encodeURIComponent(`${artStyle} art style examples illustration`);
    
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
  }, [artStyle, isOpen]);

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3));
  };
  
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.25, 0.5));
  };

  const navigateImages = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setSelectedImageIndex((prev) => (prev < imageUrls.length - 1 ? prev + 1 : prev));
    } else {
      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
    setZoom(1); // Reset zoom when changing images
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-black/90">
        <div className="flex items-center justify-between p-3 bg-background/10 backdrop-blur-sm">
          <span className="text-white text-sm truncate max-w-[70%]">
            {artStyle} Art Style Examples
          </span>
          <div className="flex gap-2">
            <button 
              onClick={handleZoomOut} 
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Zoom out"
            >
              <ZoomOut size={18} />
            </button>
            <button 
              onClick={handleZoomIn} 
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Zoom in"
            >
              <ZoomIn size={18} />
            </button>
            <button 
              onClick={onClose} 
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        <div className="overflow-auto p-4 max-h-[calc(90vh-48px)] flex flex-col items-center justify-center">
          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-pulse flex items-center">
                <ImageIcon className="mr-2 h-5 w-5 text-white" />
                <span className="text-sm text-white">Loading examples...</span>
              </div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-64">
              <div className="flex items-center">
                <InfoIcon className="mr-2 h-5 w-5 text-white" />
                <span className="text-sm text-white">{error}</span>
              </div>
            </div>
          ) : (
            <>
              <div className="relative">
                {imageUrls.length > 0 && (
                  <img 
                    src={imageUrls[selectedImageIndex]} 
                    alt={`${artStyle} art style example ${selectedImageIndex + 1}`}
                    className="transition-transform duration-200 ease-in-out max-h-[70vh] object-contain"
                    style={{ transform: `scale(${zoom})` }}
                  />
                )}
              </div>
              
              {imageUrls.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigateImages('prev')} 
                    disabled={selectedImageIndex === 0}
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-white">
                    {selectedImageIndex + 1} of {imageUrls.length}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => navigateImages('next')} 
                    disabled={selectedImageIndex === imageUrls.length - 1}
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtStyleExamplesModal;
