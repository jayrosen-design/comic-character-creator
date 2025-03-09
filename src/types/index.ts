
export type ArtStyle = 
  | 'Classic Comic'
  | 'Manga'
  | 'Modern Cartoon'
  | 'Superhero'
  | 'Animated'
  | 'Vintage'
  | 'Chibi'
  | 'Digital Art'
  | 'Watercolor'
  | 'Minimalist';

export type AdvancedArtStyle =
  | 'Children\'s Book Illustrators'
  | 'Children\'s Book Illustrations' // Added alternative name
  | 'Comic Book Artists'
  | 'Cartoonists'
  | 'Cartoon TV Show Artists'
  | 'Cartoon TV Shows' // Added alternative name
  | 'Anime'
  | 'Manga Artists'
  | 'Manga' // Added alternative name
  | 'Chibi Artists'
  | 'Chibi' // Added alternative name
  | 'Digital Artists'
  | 'Digital Art' // Added alternative name
  | 'Digital Art Illustration'
  | 'Vintage Comic'
  | 'Modern Comic'
  | 'Ukiyo-e'
  | 'Ukiyo‐e' // Added alternative with different hyphen
  | 'Graphic Novel'
  | 'Cel-Shaded Artist'
  | 'Sci-Fi Illustrations'
  | 'Videogame Artists'
  | 'Pre-1950 Cartoonists'
  | 'Art Nouveau';

export type Medium = 
  | 'Pencil Sketch'
  | 'Ink Drawing'
  | '2-Tone'
  | '3-Tone'
  | 'Watercolor Wash'
  | 'Digital Painting'
  | 'Marker Rendering'
  | 'Charcoal Drawing'
  | 'Pastel'
  | 'Mixed Media';

export type CharacterType = 
  | 'Boy'
  | 'Girl'
  | 'Man'
  | 'Woman'
  | 'Cat'
  | 'Dog'
  | 'Robot'
  | 'Alien'
  | 'Fairy'
  | 'Dinosaur';

export type Theme = 
  | 'Sci-Fi'
  | 'Fantasy'
  | 'Mystery'
  | 'Adventure'
  | 'Magical'
  | 'Futuristic'
  | 'Historical'
  | 'Western'
  | 'Steampunk'
  | 'Cyberpunk';

export type Background = 
  | 'Solid White'
  | 'Solid Color'
  | 'Enchanted Forest'
  | 'Outer Space'
  | 'Cityscape'
  | 'Underwater Scene'
  | 'Medieval Castle'
  | 'Desert Oasis'
  | 'Mountain Landscape'
  | 'Abstract Pattern';

export type Action = 
  | 'Explore'
  | 'Jump'
  | 'Run'
  | 'Smile'
  | 'Adventure'
  | 'Fly'
  | 'Dance'
  | 'Play'
  | 'Investigate'
  | 'Imagine';

export interface CharacterFormData {
  artStyle: ArtStyle | '';
  characterType: CharacterType | '';
  theme: Theme | '';
  background: Background | '';
  backgroundColor: string | '';
  action: Action | '';
  medium: Medium | '';
  advancedMode?: boolean;
  advancedArtStyle?: AdvancedArtStyle | '';
  artistName?: string | '';
}

export interface ApiResponse {
  created: number;
  data: Array<{
    url: string;
  }>;
}

export interface ApiError {
  message: string;
  type: string;
  code: string;
}

export interface StoredImage {
  id: string;
  url: string;
  createdAt: number;
  settings: CharacterFormData;
}

export interface ArtistInfo {
  category: string;
  artistName: string;
  knownFor: string;
  description: string;
}

export interface ArtStyleDescription {
  style: AdvancedArtStyle;
  description: string;
}

export type ApiKeyType = 'openai' | 'serpapi' | 'imgbb';
