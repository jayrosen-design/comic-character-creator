
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";

interface ActionsSectionProps {
  isLoading: boolean;
  onSubmit: () => void;
}

const ActionsSection = ({ isLoading, onSubmit }: ActionsSectionProps) => {
  return (
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
  );
};

export default ActionsSection;
