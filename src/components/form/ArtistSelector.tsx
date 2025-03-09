
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getArtistsByCategory } from "@/data/artistsByCategory";

interface ArtistSelectorProps {
  artistName: string;
  advancedArtStyle: string;
  onChange: (value: string) => void;
}

const ArtistSelector = ({
  artistName,
  advancedArtStyle,
  onChange
}: ArtistSelectorProps) => {
  const artists = getArtistsByCategory(advancedArtStyle);

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
            <SelectItem value="" disabled>
              {advancedArtStyle ? "No artists available" : "Select an art style first"}
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ArtistSelector;
