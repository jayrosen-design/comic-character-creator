
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface FormHeaderProps {
  advancedMode: boolean;
  onToggleAdvancedMode: (checked: boolean) => void;
}

const FormHeader = ({ advancedMode, onToggleAdvancedMode }: FormHeaderProps) => {
  return (
    <div className="flex items-center justify-end mb-4 animate-fade-up" style={{ animationDelay: '50ms' }}>
      <Label htmlFor="advanced-mode" className="mr-2 text-sm font-medium text-foreground/80">
        Advanced Mode
      </Label>
      <Switch 
        id="advanced-mode" 
        checked={advancedMode || false} 
        onCheckedChange={onToggleAdvancedMode}
      />
    </div>
  );
};

export default FormHeader;
