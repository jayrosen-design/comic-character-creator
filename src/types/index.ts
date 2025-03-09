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
  | 'Comic Book Artists'
  | 'Cartoonists'
  | 'Cartoon TV Show Artists'
  | 'Manga Artists'
  | 'Chibi Artists'
  | 'Digital Artists'
  | 'Digital Illustrators'
  | 'Vintage Comic Book Artists'
  | 'Modern Cartoon Artists'
  | 'Ukiyo-e Artists'
  | 'Graphic Novel Artists'
  | 'Cel-Shaded Artists'
  | 'Sci-Fi Illustrators'
  | 'Videogame Artist Illustrators'
  | 'Cartoonists Pre-1950'
  | 'Art Nouveau Illustrators';

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
  category: AdvancedArtStyle;
  artistName: string;
  knownFor: string;
  description: string;
}

export interface ArtStyleDescription {
  style: AdvancedArtStyle;
  description: string;
}

export type ApiKeyType = 'openai' | 'serpapi' | 'imgbb';
