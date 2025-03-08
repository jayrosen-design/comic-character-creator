
import { useState, useEffect } from "react";
import { InfoIcon, Image as ImageIcon } from "lucide-react";

interface ArtistExampleImageProps {
  artistName: string;
  className?: string;
}

const ArtistExampleImage = ({ artistName, className }: ArtistExampleImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!artistName) return;
    
    setIsLoading(true);
    setError(null);
    
    // Create a search query for the artist's illustration work
    const searchQuery = encodeURIComponent(`${artistName} art illustration style example`);
    
    // Use a small proxy function to get an image from Google search
    // This is a very simple approach - in a production app, you would use a proper API
    fetch(`https://serpapi.com/search.json?q=${searchQuery}&tbm=isch&ijn=0&api_key=demo`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        return response.json();
      })
      .then(data => {
        // SerpAPI demo mode returns limited results, but we'll use it for demo purposes
        if (data.images_results && data.images_results.length > 0) {
          // Get a random image from the results to show variety
          const randomIndex = Math.floor(Math.random() * Math.min(5, data.images_results.length));
          setImageUrl(data.images_results[randomIndex].thumbnail);
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
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-video relative">
        <img
          src={imageUrl}
          alt={`Example of ${artistName}'s art style`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-muted/20 px-3 py-2 text-xs text-center text-muted-foreground">
        Example of {artistName}'s style (search result)
      </div>
    </div>
  );
};

export default ArtistExampleImage;
