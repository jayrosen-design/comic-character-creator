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
  | 'Children\'s Book Illustrations'
  | 'Comic Book Artists'
  | 'Cartoonists'
  | 'Cartoon TV Shows'
  | 'Anime'
  | 'Manga'
  | 'Chibi'
  | 'Digital Art'
  | 'Cel-Shaded Artist'
  | 'Sci-Fi Illustrations'
  | 'Videogame Artists'
  | 'Pre-1950 Cartoonists'
  | 'Art Nouveau'
  | 'Ukiyo-e'
  | 'Graphic Novel'
  | 'Vintage Comic'
  | 'Modern Comic';

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

export type ApiKeyType = 'openai' | 'serpapi' | 'imgbb';
