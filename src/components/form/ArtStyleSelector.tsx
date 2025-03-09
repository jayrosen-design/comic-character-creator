
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArtStyle, AdvancedArtStyle } from "@/types";
import { useEffect } from "react";
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
  
  useEffect(() => {
    if (advancedArtStyle) {
      const artists = getArtistsByCategory(advancedArtStyle as AdvancedArtStyle);
      console.log("Artists for selected category:", artists);
      console.log("Selected advanced art style:", advancedArtStyle);
    }
  }, [advancedArtStyle]);

  const getArtistOptions = () => {
    if (!advancedArtStyle) return [];
    
    const artists = getArtistsByCategory(advancedArtStyle as AdvancedArtStyle);
    console.log(`Found ${artists.length} artists for category ${advancedArtStyle}`);
    return artists;
  };

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
            disabled={!advancedArtStyle}
          >
            <SelectTrigger id="artistName" className="w-full h-12 rounded-xl">
              <SelectValue placeholder={!advancedArtStyle ? "Select Art Style first" : "Select Artist"} />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy max-h-[300px]">
              {getArtistOptions().map((artist) => (
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
