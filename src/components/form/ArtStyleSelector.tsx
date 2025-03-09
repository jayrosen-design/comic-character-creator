
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArtStyle, AdvancedArtStyle, ArtistInfo } from "@/types";
import { useEffect, useState } from "react";
import { ARTISTS_DATA } from "@/data/artistsData";
import { getAllArtStyleCategories } from "@/data/artStyleDescriptions";
import { normalizeCategory } from "@/utils/categoryNormalizer";

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
  const [artistOptions, setArtistOptions] = useState<ArtistInfo[]>([]);
  const [isLoadingArtists, setIsLoadingArtists] = useState<boolean>(false);
  
  useEffect(() => {
    if (advancedArtStyle) {
      setIsLoadingArtists(true);
      
      try {
        // Get normalized category name
        const normalizedCategory = normalizeCategory(advancedArtStyle);
        
        console.log("Selected advanced art style:", advancedArtStyle);
        console.log("Normalized category:", normalizedCategory);
        
        // Get all available categories from ARTISTS_DATA for debugging
        const availableCategories = [...new Set(ARTISTS_DATA.map(a => a.category))];
        console.log("Available categories in ARTISTS_DATA:", availableCategories.join(", "));
        
        // Get artists directly from ARTISTS_DATA
        const filteredArtists = ARTISTS_DATA.filter(artist => 
          artist.category === normalizedCategory
        );
        
        console.log(`Found ${filteredArtists.length} artists for category ${normalizedCategory}`);
        
        // If no artists found, try to list some sample artists from the given JSON
        if (filteredArtists.length === 0) {
          console.log("No artists found in ARTISTS_DATA. This category may need to be added.");
        }
        
        setArtistOptions(filteredArtists);
      } catch (error) {
        console.error("Error loading artists:", error);
        setArtistOptions([]);
      } finally {
        setIsLoadingArtists(false);
      }
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
              setArtistOptions([]);
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
            disabled={!advancedArtStyle || isLoadingArtists || artistOptions.length === 0}
          >
            <SelectTrigger id="artistName" className="w-full h-12 rounded-xl">
              <SelectValue 
                placeholder={
                  !advancedArtStyle 
                    ? "Select Art Style first" 
                    : isLoadingArtists 
                    ? "Loading artists..." 
                    : artistOptions.length === 0 
                    ? "No artists available for this style" 
                    : "Select Artist"
                } 
              />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy max-h-[300px]">
              {artistOptions.length > 0 ? (
                artistOptions.map((artist) => (
                  <SelectItem key={artist.artistName} value={artist.artistName} className="cursor-pointer">
                    {artist.artistName}
                  </SelectItem>
                ))
              ) : (
                <div className="px-2 py-4 text-center text-muted-foreground">
                  {!advancedArtStyle 
                    ? "Select an art style first" 
                    : "No artists available for this style"}
                </div>
              )}
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
