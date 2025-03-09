
import { CharacterFormData, Medium } from "@/types";
import FormHeader from "@/components/form/FormHeader";
import ActionsSection from "@/components/form/ActionsSection";
import CharacterDetails from "@/components/form/CharacterDetails";
import ArtStyleSelector from "@/components/form/ArtStyleSelector";
import ArtistSelector from "@/components/form/ArtistSelector";
import ArtStyleSelectorPart from "@/components/form/ArtStyleSelectorPart";

interface CharacterFormProps {
  formData: CharacterFormData;
  onUpdateField: <K extends keyof CharacterFormData>(
    field: K,
    value: CharacterFormData[K]
  ) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const CharacterForm = ({
  formData,
  onUpdateField,
  onSubmit,
  isLoading,
}: CharacterFormProps) => {
  
  const toggleAdvancedMode = (checked: boolean) => {
    onUpdateField("advancedMode", checked);
    if (checked) {
      // Reset basic art style when switching to advanced mode
      onUpdateField("artStyle", "");
    } else {
      // Reset advanced fields when switching to basic mode
      onUpdateField("advancedArtStyle", "");
      onUpdateField("artistName", "");
    }
  };

  return (
    <div className="space-y-4">
      <FormHeader 
        advancedMode={formData.advancedMode}
        onToggleAdvancedMode={toggleAdvancedMode}
      />
      
      <div className="mb-6">
        {formData.advancedMode ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ArtStyleSelectorPart
              advancedArtStyle={formData.advancedArtStyle}
              onChange={(value) => {
                onUpdateField("advancedArtStyle", value);
                // Reset artist name when changing art style
                onUpdateField("artistName", "");
              }}
            />
            <ArtistSelector
              artistName={formData.artistName}
              advancedArtStyle={formData.advancedArtStyle}
              onChange={(value) => onUpdateField("artistName", value)}
            />
          </div>
        ) : (
          <ArtStyleSelector
            advancedMode={formData.advancedMode}
            artStyle={formData.artStyle}
            advancedArtStyle={formData.advancedArtStyle || ""}
            artistName={formData.artistName || ""}
            medium={formData.medium || ""}
            onUpdateArtStyle={(value) => onUpdateField("artStyle", value)}
            onUpdateAdvancedArtStyle={(value) => onUpdateField("advancedArtStyle", value)}
            onUpdateArtistName={(value) => onUpdateField("artistName", value)}
            onUpdateMedium={(value) => onUpdateField("medium", value as Medium | "")}
          />
        )}
      </div>
      
      <CharacterDetails
        formData={formData}
        onUpdateField={onUpdateField}
      />
      
      <ActionsSection
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default CharacterForm;
