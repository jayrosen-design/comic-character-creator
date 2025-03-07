
import { ArtStyle, CharacterType, Theme, Background, Action, CharacterFormData } from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

// Define dropdown options
const ART_STYLES: ArtStyle[] = [
  'Classic Comic', 'Manga', 'Modern Cartoon', 'Superhero', 'Animated',
  'Vintage', 'Chibi', 'Digital Art', 'Watercolor', 'Minimalist'
];

const CHARACTER_TYPES: CharacterType[] = [
  'Boy', 'Girl', 'Man', 'Woman', 'Cat',
  'Dog', 'Robot', 'Alien', 'Fairy', 'Dinosaur'
];

const THEMES: Theme[] = [
  'Sci-Fi', 'Fantasy', 'Mystery', 'Adventure', 'Magical',
  'Futuristic', 'Historical', 'Western', 'Steampunk', 'Cyberpunk'
];

const BACKGROUNDS: Background[] = [
  'Solid White', 'Solid Color', 'Enchanted Forest', 'Outer Space', 'Cityscape',
  'Underwater Scene', 'Medieval Castle', 'Desert Oasis', 'Mountain Landscape', 'Abstract Pattern'
];

const ACTIONS: Action[] = [
  'Explore', 'Jump', 'Run', 'Smile', 'Adventure',
  'Fly', 'Dance', 'Play', 'Investigate', 'Imagine'
];

// Predefined color options
const COLOR_OPTIONS = [
  { value: '#F2FCE2', label: 'Soft Green' },
  { value: '#FEF7CD', label: 'Soft Yellow' },
  { value: '#FEC6A1', label: 'Soft Orange' },
  { value: '#E5DEFF', label: 'Soft Purple' },
  { value: '#FFDEE2', label: 'Soft Pink' },
  { value: '#D3E4FD', label: 'Soft Blue' },
  { value: '#8B5CF6', label: 'Vivid Purple' },
  { value: '#D946EF', label: 'Magenta Pink' },
  { value: '#F97316', label: 'Bright Orange' },
  { value: '#0EA5E9', label: 'Ocean Blue' },
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

        {/* Theme Dropdown */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <label htmlFor="theme" className="block text-sm font-medium text-foreground/80">
            Theme
          </label>
          <Select
            value={formData.theme}
            onValueChange={(value) => onUpdateField("theme", value as Theme)}
          >
            <SelectTrigger id="theme" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Theme" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {THEMES.map((theme) => (
                <SelectItem key={theme} value={theme} className="cursor-pointer">
                  {theme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Background Dropdown */}
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '350ms' }}>
          <label htmlFor="background" className="block text-sm font-medium text-foreground/80">
            Background
          </label>
          <Select
            value={formData.background}
            onValueChange={(value) => {
              onUpdateField("background", value as Background);
              // Reset background color when switching away from Solid Color
              if (value !== 'Solid Color') {
                onUpdateField("backgroundColor", "");
              }
            }}
          >
            <SelectTrigger id="background" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Background" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {BACKGROUNDS.map((background) => (
                <SelectItem key={background} value={background} className="cursor-pointer">
                  {background}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Color Dropdown (only shown when Solid Color is selected) */}
        {formData.background === 'Solid Color' && (
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '375ms' }}>
            <label htmlFor="backgroundColor" className="block text-sm font-medium text-foreground/80">
              Background Color
            </label>
            <Select
              value={formData.backgroundColor}
              onValueChange={(value) => onUpdateField("backgroundColor", value)}
            >
              <SelectTrigger id="backgroundColor" className="w-full h-12 rounded-xl">
                <SelectValue placeholder="Select Color">
                  {formData.backgroundColor && (
                    <div className="flex items-center">
                      <div
                        className="h-4 w-4 rounded-full mr-2"
                        style={{ backgroundColor: formData.backgroundColor }}
                      />
                      {COLOR_OPTIONS.find(c => c.value === formData.backgroundColor)?.label || formData.backgroundColor}
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="dropdown-fancy">
                {COLOR_OPTIONS.map((color) => (
                  <SelectItem key={color.value} value={color.value} className="cursor-pointer">
                    <div className="flex items-center">
                      <div 
                        className="h-4 w-4 rounded-full mr-2" 
                        style={{ backgroundColor: color.value }}
                      />
                      {color.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

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
