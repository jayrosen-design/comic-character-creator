
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Key, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApiKeyInputProps {
  apiKey: string;
  onChange: (value: string) => void;
  className?: string;
}

const ApiKeyInput = ({ apiKey, onChange, className }: ApiKeyInputProps) => {
  const [showKey, setShowKey] = useState(false);

  const toggleShowKey = () => {
    setShowKey(!showKey);
  };

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Key size={16} />
          </div>
          <Input
            type={showKey ? "text" : "password"}
            placeholder="Enter your OpenAI API key"
            value={apiKey}
            onChange={(e) => onChange(e.target.value)}
            className="pl-9 pr-10 py-6 rounded-xl transition-all duration-300 border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={toggleShowKey}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showKey ? "Hide API key" : "Show API key"}
          >
            {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2 text-center">
        Your API key is stored only in this browser session and is never saved
      </p>
    </div>
  );
};

export default ApiKeyInput;
