
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

export type ThemeBackground = 
  | 'Sci-Fi'
  | 'Fantasy'
  | 'Enchanted Forest'
  | 'City'
  | 'Town'
  | 'Mystery City'
  | 'Outer Space'
  | 'Underwater'
  | 'Medieval Castle'
  | 'Desert Oasis';

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
  themeBackground: ThemeBackground | '';
  action: Action | '';
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
