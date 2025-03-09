
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getAllArtStyleCategories } from "@/data/artistsByCategory";
import { AdvancedArtStyle } from "@/types";

interface ArtStyleSelectorPartProps {
  advancedArtStyle: AdvancedArtStyle | "";
  onChange: (value: AdvancedArtStyle | "") => void;
}

const ArtStyleSelectorPart = ({
  advancedArtStyle,
  onChange
}: ArtStyleSelectorPartProps) => {
  const categories = getAllArtStyleCategories();

  return (
    <div className="form-control space-y-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
      <label className="text-sm font-medium">
        Art Style
      </label>
      <Select
        value={advancedArtStyle}
        onValueChange={(value) => onChange(value as AdvancedArtStyle | "")}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an art style" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ArtStyleSelectorPart;
