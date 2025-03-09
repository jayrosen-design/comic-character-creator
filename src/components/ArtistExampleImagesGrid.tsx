
import { useState, useEffect } from "react";
import { ImageIcon, InfoIcon, ZoomIn } from "lucide-react";
import PhotoModal from "./PhotoModal";

interface ArtistExampleImagesGridProps {
  artistName: string;
  className?: string;
}

const ArtistExampleImagesGrid = ({ artistName, className }: ArtistExampleImagesGridProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
        console.error('Error fetching artist images:', err);
        setError('Failed to load example images');
        setIsLoading(false);
      });
  }, [artistName]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <div className={`rounded-lg bg-muted/30 p-4 flex items-center justify-center ${className}`} style={{ minHeight: '180px' }}>
        <div className="animate-pulse flex items-center">
          <ImageIcon className="mr-2 h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Loading artist examples...</span>
        </div>
      </div>
    );
  }

  if (error || imageUrls.length === 0) {
    return (
      <div className={`rounded-lg bg-muted/30 p-4 flex items-center justify-center ${className}`} style={{ minHeight: '180px' }}>
        <div className="flex items-center">
          <InfoIcon className="mr-2 h-5 w-5 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {error || "No examples available"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 ${className}`}>
        {imageUrls.map((url, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <div 
              className="aspect-video relative group cursor-pointer" 
              onClick={() => openModal(url)}
            >
              <img
                src={url}
                alt={`Example of ${artistName}'s art style ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-muted/20 mt-2 px-3 py-2 text-xs text-center text-muted-foreground">
        <span>Examples of {artistName}'s style (via SerpAPI)</span>
      </div>
      
      {isModalOpen && selectedImage && (
        <PhotoModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          imageUrl={selectedImage}
          imageAlt={`Example of ${artistName}'s art style`}
        />
      )}
    </>
  );
};

export default ArtistExampleImagesGrid;
