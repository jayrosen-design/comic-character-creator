
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdvancedArtStyle } from "@/types";

interface ArtistSelectorProps {
  artistName: string;
  advancedArtStyle: AdvancedArtStyle | "";
  onChange: (value: string) => void;
}

const ArtistSelector = ({
  artistName,
  advancedArtStyle,
  onChange
}: ArtistSelectorProps) => {
  // Create a safer function to get artists by category that won't crash
  const getArtistsByCategorySafely = (style: AdvancedArtStyle | ""): string[] => {
    try {
      if (!style) return [];
      
      // Try to fetch from the data file, but if it fails, return an empty array
      const artistsModule = require('@/data/artistsByCategory');
      if (typeof artistsModule.getArtistsByCategory === 'function') {
        return artistsModule.getArtistsByCategory(style);
      }
      return [];
    } catch (error) {
      console.error("Error fetching artists by category:", error);
      return [];
    }
  };
  
  const artists = getArtistsByCategorySafely(advancedArtStyle);

  return (
    <div className="form-control space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
      <label className="text-sm font-medium">
        Artist
      </label>
      <Select
        value={artistName}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an artist" />
        </SelectTrigger>
        <SelectContent>
          {artists.length > 0 ? (
            artists.map((artist) => (
              <SelectItem key={artist} value={artist}>
                {artist}
              </SelectItem>
            ))
          ) : (
            <div className="px-2 py-2 text-sm text-muted-foreground">
              {advancedArtStyle ? "No artists available" : "Select an art style first"}
            </div>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ArtistSelector;
