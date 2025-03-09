
import { 
  CharacterFormData,
  CharacterType, 
  Theme, 
  Background, 
  Action
} from "@/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CharacterDetailsProps {
  formData: CharacterFormData;
  onUpdateField: <K extends keyof CharacterFormData>(
    field: K,
    value: CharacterFormData[K]
  ) => void;
}

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

const CharacterDetails = ({
  formData,
  onUpdateField
}: CharacterDetailsProps) => {
  const { characterType, theme, background, backgroundColor, action } = formData;

  return (
    <>
      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '250ms' }}>
        <label htmlFor="characterType" className="block text-sm font-medium text-foreground/80">
          Character Type
        </label>
        <Select
          value={characterType}
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

      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
        <label htmlFor="theme" className="block text-sm font-medium text-foreground/80">
          Theme
        </label>
        <Select
          value={theme}
          onValueChange={(value) => onUpdateField("theme", value as Theme)}
        >
          <SelectTrigger id="theme" className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Select Theme" />
          </SelectTrigger>
          <SelectContent className="dropdown-fancy">
            {THEMES.map((themeOpt) => (
              <SelectItem key={themeOpt} value={themeOpt} className="cursor-pointer">
                {themeOpt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '350ms' }}>
        <label htmlFor="background" className="block text-sm font-medium text-foreground/80">
          Background
        </label>
        <Select
          value={background}
          onValueChange={(value) => {
            onUpdateField("background", value as Background);
            if (value !== 'Solid Color') {
              onUpdateField("backgroundColor", "");
            }
          }}
        >
          <SelectTrigger id="background" className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Select Background" />
          </SelectTrigger>
          <SelectContent className="dropdown-fancy">
            {BACKGROUNDS.map((bgOpt) => (
              <SelectItem key={bgOpt} value={bgOpt} className="cursor-pointer">
                {bgOpt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {background === 'Solid Color' && (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '375ms' }}>
          <label htmlFor="backgroundColor" className="block text-sm font-medium text-foreground/80">
            Background Color
          </label>
          <Select
            value={backgroundColor}
            onValueChange={(value) => onUpdateField("backgroundColor", value)}
          >
            <SelectTrigger id="backgroundColor" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Color">
                {backgroundColor && (
                  <div className="flex items-center">
                    <div
                      className="h-4 w-4 rounded-full mr-2"
                      style={{ backgroundColor }}
                    />
                    {COLOR_OPTIONS.find(c => c.value === backgroundColor)?.label || backgroundColor}
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

      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '400ms' }}>
        <label htmlFor="action" className="block text-sm font-medium text-foreground/80">
          Action
        </label>
        <Select
          value={action}
          onValueChange={(value) => onUpdateField("action", value as Action)}
        >
          <SelectTrigger id="action" className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Select Action" />
          </SelectTrigger>
          <SelectContent className="dropdown-fancy">
            {ACTIONS.map((actionOpt) => (
              <SelectItem key={actionOpt} value={actionOpt} className="cursor-pointer">
                {actionOpt}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default CharacterDetails;
