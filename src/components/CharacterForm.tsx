
import { ArtStyle, CharacterType, ThemeBackground, Action, CharacterFormData } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Define dropdown options
const ART_STYLES: ArtStyle[] = [
  'Classic Comic', 'Manga', 'Modern Cartoon', 'Superhero', 'Animated',
  'Vintage', 'Chibi', 'Digital Art', 'Watercolor', 'Minimalist'
];

const CHARACTER_TYPES: CharacterType[] = [
  'Boy', 'Girl', 'Man', 'Woman', 'Cat',
  'Dog', 'Robot', 'Alien', 'Fairy', 'Dinosaur'
];

const THEME_BACKGROUNDS: ThemeBackground[] = [
  'Sci-Fi', 'Fantasy', 'Enchanted Forest', 'City', 'Town',
  'Mystery City', 'Outer Space', 'Underwater', 'Medieval Castle', 'Desert Oasis'
];

const ACTIONS: Action[] = [
  'Explore', 'Jump', 'Run', 'Smile', 'Adventure',
  'Fly', 'Dance', 'Play', 'Investigate', 'Imagine'
];

interface CharacterFormProps {
  formData: CharacterFormData;
  onUpdateField: <K extends keyof CharacterFormData>(
    field: K,
    value: CharacterFormData[K]
  ) => void;
  onSubmit: () => void;
  isLoading: boolean;
  className?: string;
}

const CharacterForm = ({
  formData,
  onUpdateField,
  onSubmit,
  isLoading,
  className
}: CharacterFormProps) => {
  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Art Style Dropdown */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="artStyle" className="block text-sm font-medium text-foreground/80">
            Art Style
          </label>
          <Select
            value={formData.artStyle}
            onValueChange={(value) => onUpdateField("artStyle", value as ArtStyle)}
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

        {/* Character Type Dropdown */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <label htmlFor="characterType" className="block text-sm font-medium text-foreground/80">
            Character Type
          </label>
          <Select
            value={formData.characterType}
            onValueChange={(value) => onUpdateField("characterType", value as CharacterType)}
          >
            <SelectTrigger id="characterType" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Character Type" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {CHARACTER_TYPES.map((type) => (
                <SelectItem key={type} value={type} className="cursor-pointer">
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Theme & Background Dropdown */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <label htmlFor="themeBackground" className="block text-sm font-medium text-foreground/80">
            Theme & Background
          </label>
          <Select
            value={formData.themeBackground}
            onValueChange={(value) => onUpdateField("themeBackground", value as ThemeBackground)}
          >
            <SelectTrigger id="themeBackground" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Theme & Background" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {THEME_BACKGROUNDS.map((theme) => (
                <SelectItem key={theme} value={theme} className="cursor-pointer">
                  {theme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Action Dropdown */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <label htmlFor="action" className="block text-sm font-medium text-foreground/80">
            Action
          </label>
          <Select
            value={formData.action}
            onValueChange={(value) => onUpdateField("action", value as Action)}
          >
            <SelectTrigger id="action" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Action" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {ACTIONS.map((action) => (
                <SelectItem key={action} value={action} className="cursor-pointer">
                  {action}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button 
          onClick={onSubmit}
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-xl shadow-md transition-all duration-300 button-bounce animate-fade-up"
          style={{ animationDelay: '500ms' }}
        >
          <Wand2 className="mr-2 h-5 w-5" />
          {isLoading ? "Creating..." : "Create Character"}
        </Button>
      </div>
    </div>
  );
};

export default CharacterForm;
