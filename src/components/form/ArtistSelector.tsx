
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdvancedArtStyle } from "@/types";
import { getArtistsByCategory } from "@/data/artistsByCategory";

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
  // Get the complete list of artists from the artistsByCategory data
  const artists = getArtistsByCategory(advancedArtStyle || "");
  
  // Validate the current artistName is still valid given the current style
  const isArtistValid = artists.includes(artistName);
  
  // If the current artist isn't valid for this style, call onChange with empty string
  React.useEffect(() => {
    if (artistName && !isArtistValid && advancedArtStyle) {
      onChange("");
    }
  }, [artistName, isArtistValid, advancedArtStyle, onChange]);

  return (
    <div className="form-control space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
      <label className="text-sm font-medium">
        Artist
      </label>
      <Select
        value={isArtistValid ? artistName : ""}
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
