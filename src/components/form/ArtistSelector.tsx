
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AdvancedArtStyle } from "@/types";

interface ArtistSelectorProps {
  artistName: string;
  advancedArtStyle: AdvancedArtStyle | "";
  onChange: (value: string) => void;
}

// Mock data for artists by category to avoid importing the problematic files
const mockArtistData: Record<string, string[]> = {
  "Children's Book Illustrations": ["Maurice Sendak", "Dr. Seuss", "Eric Carle", "Quentin Blake", "Beatrix Potter"],
  "Comic Book Artists": ["Jack Kirby", "Steve Ditko", "Neal Adams", "Jim Lee", "Todd McFarlane"],
  "Cartoonists": ["Charles Schulz", "Bill Watterson", "Gary Larson", "Matt Groening", "Al Capp"],
  "Cartoon TV Shows": ["Genndy Tartakovsky", "Craig McCracken", "Bruce Timm", "Pendleton Ward", "Rebecca Sugar"],
  "Anime": ["Hayao Miyazaki", "Makoto Shinkai", "Satoshi Kon", "Katsuhiro Otomo", "Leiji Matsumoto"],
  "Manga": ["Osamu Tezuka", "Akira Toriyama", "Rumiko Takahashi", "Naoko Takeuchi", "CLAMP"],
  "Chibi": ["Momoko Sakura", "CLAMP", "Akira Toriyama", "Naoko Takeuchi", "Eiichiro Oda"],
  "Digital Art": ["Beeple", "Artgerm", "Greg Rutkowski", "Ross Tran", "Loish"],
  "Digital Art Illustration": ["Artgerm", "Greg Rutkowski", "Ross Tran", "Loish", "Sakimichan"],
  "Vintage Comic": ["Jack Kirby", "Steve Ditko", "Will Eisner", "Joe Shuster", "Curt Swan"],
  "Modern Comic": ["Genndy Tartakovsky", "Craig McCracken", "Bruce Timm", "Pendleton Ward", "Rebecca Sugar"],
  "Ukiyo-e": ["Katsushika Hokusai", "Utagawa Hiroshige", "Kitagawa Utamaro", "Tōshūsai Sharaku", "Suzuki Harunobu"],
  "Graphic Novel": ["Art Spiegelman", "Marjane Satrapi", "Chris Ware", "Daniel Clowes", "Charles Burns"],
  "Cel-Shaded Artist": ["Shigenori Soejima", "Tetsuya Nomura", "Akihiko Yoshida", "Kazuma Kaneko", "Katsuya Terada"],
  "Sci-Fi Illustrations": ["Frank R. Paul", "Chesley Bonestell", "Virgil Finlay", "Chris Foss", "Moebius"],
  "Videogame Artists": ["Yoshitaka Amano", "Yoji Shinkawa", "Tetsuya Nomura", "Akihiko Yoshida", "Kazuma Kaneko"],
  "Pre-1950 Cartoonists": ["Winsor McCay", "George Herriman", "Rube Goldberg", "E.C. Segar", "Milton Caniff"],
  "Art Nouveau": ["Alphonse Mucha", "Aubrey Beardsley", "Eugène Grasset", "Gustav Klimt", "Théophile Steinlen"]
};

const ArtistSelector = ({
  artistName,
  advancedArtStyle,
  onChange
}: ArtistSelectorProps) => {
  // Get artists from our mock data instead of the problematic import
  const getArtistsByCategorySafely = (style: AdvancedArtStyle | ""): string[] => {
    if (!style) return [];
    
    // Use our mock data instead of trying to import the problematic file
    return mockArtistData[style] || [];
  };
  
  const artists = getArtistsByCategorySafely(advancedArtStyle);

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
