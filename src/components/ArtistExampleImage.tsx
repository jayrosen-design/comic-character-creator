
import { useState, useEffect } from "react";
import { InfoIcon, ImageIcon, ZoomIn } from "lucide-react";
import PhotoModal from "./PhotoModal";

interface ArtistExampleImageProps {
  artistName: string;
  className?: string;
}

const ArtistExampleImage = ({ artistName, className }: ArtistExampleImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!artistName) return;
    
    setIsLoading(true);
    setError(null);
    
    // Get SerpAPI key from sessionStorage
    const serpApiKey = sessionStorage.getItem("serpapi_key");
    
    if (!serpApiKey) {
      setError("SerpAPI key is required to fetch artist examples");
      setIsLoading(false);
      return;
    }
    
    // Create a search query for the artist's illustration work
    const searchQuery = encodeURIComponent(`${artistName} art illustration style example`);
    
    // Use SerpAPI to get images
    fetch(`https://serpapi.com/search.json?engine=google_images&q=${searchQuery}&google_domain=google.com&gl=us&hl=en&api_key=${serpApiKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        return response.json();
      })
      .then(data => {
        if (data.images_results && data.images_results.length > 0) {
          // Get a random image from the first 5 results to show variety
          const randomIndex = Math.floor(Math.random() * Math.min(5, data.images_results.length));
          setImageUrl(data.images_results[randomIndex].original);
        } else {
          setError('No images found');
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching artist image:', err);
        setError('Failed to load example image');
        setIsLoading(false);
      });
  }, [artistName]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className={`rounded-lg bg-muted/30 p-4 flex items-center justify-center ${className}`} style={{ height: '180px' }}>
        <div className="animate-pulse flex items-center">
          <ImageIcon className="mr-2 h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Loading artist example...</span>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`rounded-lg bg-muted/30 p-4 flex items-center justify-center ${className}`} style={{ height: '180px' }}>
        <div className="flex items-center">
          <InfoIcon className="mr-2 h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {error || "No example available"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`rounded-lg overflow-hidden ${className}`}>
        <div 
          className="aspect-video relative group cursor-pointer" 
          onClick={openModal}
        >
          <img
            src={imageUrl}
            alt={`Example of ${artistName}'s art style`}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ZoomIn className="text-white h-8 w-8" />
          </div>
        </div>
        <div className="bg-muted/20 px-3 py-2 text-xs text-center text-muted-foreground flex items-center justify-center">
          <span>Example of {artistName}'s style (via SerpAPI)</span>
          <ZoomIn className="h-3 w-3 ml-1" />
        </div>
      </div>
      
      <PhotoModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={imageUrl}
        imageAlt={`Example of ${artistName}'s art style`}
      />
    </>
  );
};

export default ArtistExampleImage;
