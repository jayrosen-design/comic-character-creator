
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  imageAlt: string;
}

const PhotoModal = ({ isOpen, onClose, imageUrl, imageAlt }: PhotoModalProps) => {
  const [zoom, setZoom] = useState(1);
  
  // Reset zoom level when modal opens or image changes
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
    }
  }, [isOpen, imageUrl]);
  
  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.25, 3));
  };
  
  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.25, 0.5));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-black/90">
        <div className="flex items-center justify-between p-3 bg-background/10 backdrop-blur-sm">
          <span className="text-white text-sm truncate max-w-[70%]">{imageAlt}</span>
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
        <div className="overflow-auto p-4 max-h-[calc(90vh-48px)] flex items-center justify-center">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="transition-transform duration-200 ease-in-out"
              style={{ transform: `scale(${zoom})` }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
