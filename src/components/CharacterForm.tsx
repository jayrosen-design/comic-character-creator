
import { CharacterFormData, ArtStyle, CharacterType, Theme, Background, Action, Medium, AdvancedArtStyle } from "@/types";
import { cn } from "@/lib/utils";
import FormHeader from "./form/FormHeader";
import ArtStyleSelector from "./form/ArtStyleSelector";
import CharacterDetails from "./form/CharacterDetails";
import ActionsSection from "./form/ActionsSection";

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
  const handleAdvancedModeToggle = (checked: boolean) => {
    onUpdateField("advancedMode", checked);
    onUpdateField("artStyle", "");
    onUpdateField("advancedArtStyle", "");
    onUpdateField("artistName", "");
  };

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      <FormHeader 
        advancedMode={formData.advancedMode || false}
        onToggleAdvancedMode={handleAdvancedModeToggle}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ArtStyleSelector
          advancedMode={formData.advancedMode || false}
          artStyle={formData.artStyle}
          advancedArtStyle={formData.advancedArtStyle || ""}
          artistName={formData.artistName || ""}
          medium={formData.medium || ""}
          onUpdateArtStyle={(value) => onUpdateField("artStyle", value)}
          onUpdateAdvancedArtStyle={(value) => onUpdateField("advancedArtStyle", value)}
          onUpdateArtistName={(value) => onUpdateField("artistName", value)}
          onUpdateMedium={(value) => onUpdateField("medium", value as Medium)}
        />

        <CharacterDetails
          characterType={formData.characterType}
          theme={formData.theme}
          background={formData.background}
          backgroundColor={formData.backgroundColor || ""}
          action={formData.action}
          onUpdateCharacterType={(value) => onUpdateField("characterType", value)}
          onUpdateTheme={(value) => onUpdateField("theme", value)}
          onUpdateBackground={(value) => onUpdateField("background", value)}
          onUpdateBackgroundColor={(value) => onUpdateField("backgroundColor", value)}
          onUpdateAction={(value) => onUpdateField("action", value)}
        />
      </div>

      <ActionsSection 
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CharacterForm;
