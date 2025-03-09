
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArtStyle, AdvancedArtStyle } from "@/types";
import { useEffect, useState } from "react";
import { getArtistsByCategory } from "@/data/artistsData";
import { getAllArtStyleCategories } from "@/data/artStyleDescriptions";

interface ArtStyleSelectorProps {
  advancedMode: boolean;
  artStyle: string;
  advancedArtStyle: string;
  artistName: string;
  medium: string;
  onUpdateArtStyle: (value: ArtStyle) => void;
  onUpdateAdvancedArtStyle: (value: AdvancedArtStyle) => void;
  onUpdateArtistName: (value: string) => void;
  onUpdateMedium: (value: string) => void;
}

const ART_STYLES: ArtStyle[] = [
  'Classic Comic', 'Manga', 'Modern Cartoon', 'Superhero', 'Animated',
  'Vintage', 'Chibi', 'Digital Art', 'Watercolor', 'Minimalist'
];

const MEDIUMS = [
  'Pencil Sketch', 'Ink Drawing', '2-Tone', '3-Tone', 'Watercolor Wash',
  'Digital Painting', 'Marker Rendering', 'Charcoal Drawing', 'Pastel', 'Mixed Media'
];

const ArtStyleSelector = ({
  advancedMode,
  artStyle,
  advancedArtStyle,
  artistName,
  medium,
  onUpdateArtStyle,
  onUpdateAdvancedArtStyle,
  onUpdateArtistName,
  onUpdateMedium
}: ArtStyleSelectorProps) => {
  const allArtStyleCategories = getAllArtStyleCategories();
  const [artistOptions, setArtistOptions] = useState<Array<{artistName: string, knownFor: string, artStyle: string, description: string}>>([]);
  
  useEffect(() => {
    if (advancedArtStyle) {
      // Get artists for the selected category
      const artists = getArtistsByCategory(advancedArtStyle as AdvancedArtStyle);
      setArtistOptions(artists);
      console.log("Selected advanced art style:", advancedArtStyle);
      console.log("Artists for selected category:", artists);
      console.log(`Found ${artists.length} artists for category ${advancedArtStyle}`);
    } else {
      setArtistOptions([]);
    }
  }, [advancedArtStyle]);

  return (
    <>
      {!advancedMode ? (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="artStyle" className="block text-sm font-medium text-foreground/80">
            Art Style
          </label>
          <Select
            value={artStyle}
            onValueChange={(value) => onUpdateArtStyle(value as ArtStyle)}
          >
            <SelectTrigger id="artStyle" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Art Style" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {ART_STYLES.map((style) => (
                <SelectItem key={style} value={style} className="cursor-pointer">
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="advancedArtStyle" className="block text-sm font-medium text-foreground/80">
            Advanced Art Style
          </label>
          <Select
            value={advancedArtStyle || ""}
            onValueChange={(value) => {
              onUpdateAdvancedArtStyle(value as AdvancedArtStyle);
              onUpdateArtistName("");
            }}
          >
            <SelectTrigger id="advancedArtStyle" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Advanced Art Style" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy max-h-[300px]">
              {allArtStyleCategories.map((style) => (
                <SelectItem key={style} value={style} className="cursor-pointer">
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {advancedMode && (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <label htmlFor="artistName" className="block text-sm font-medium text-foreground/80">
            Artist Name
          </label>
          <Select
            value={artistName || ""}
            onValueChange={(value) => onUpdateArtistName(value)}
            disabled={!advancedArtStyle || artistOptions.length === 0}
          >
            <SelectTrigger id="artistName" className="w-full h-12 rounded-xl">
              <SelectValue 
                placeholder={
                  !advancedArtStyle 
                    ? "Select Art Style first" 
                    : artistOptions.length === 0 
                    ? "Loading artists..." 
                    : "Select Artist"
                } 
              />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy max-h-[300px]">
              {artistOptions.map((artist) => (
                <SelectItem key={artist.artistName} value={artist.artistName} className="cursor-pointer">
                  {artist.artistName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <label htmlFor="medium" className="block text-sm font-medium text-foreground/80">
          Medium
        </label>
        <Select
          value={medium || ""}
          onValueChange={(value) => onUpdateMedium(value)}
        >
          <SelectTrigger id="medium" className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Select Medium" />
          </SelectTrigger>
          <SelectContent className="dropdown-fancy">
            {MEDIUMS.map((medium) => (
              <SelectItem key={medium} value={medium} className="cursor-pointer">
                {medium}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ArtStyleSelector;
