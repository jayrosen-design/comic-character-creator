
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Key, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApiKeyInputProps {
  apiKey: string;
  serpApiKey: string;
  onChange: (value: string, keyType: 'openai' | 'serpapi') => void;
  className?: string;
}

const ApiKeyInput = ({ apiKey, serpApiKey, onChange, className }: ApiKeyInputProps) => {
  const [showOpenAIKey, setShowOpenAIKey] = useState(false);
  const [showSerpAPIKey, setShowSerpAPIKey] = useState(false);

  const toggleShowOpenAIKey = () => {
    setShowOpenAIKey(!showOpenAIKey);
  };

  const toggleShowSerpAPIKey = () => {
    setShowSerpAPIKey(!showSerpAPIKey);
  };

  return (
    <div className={cn("w-full max-w-md mx-auto space-y-6", className)}>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">OpenAI API Key</h3>
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Key size={16} />
          </div>
          <Input
            type={showOpenAIKey ? "text" : "password"}
            placeholder="Enter your OpenAI API key"
            value={apiKey}
            onChange={(e) => onChange(e.target.value, 'openai')}
            className="pl-9 pr-10 py-6 rounded-xl transition-all duration-300 border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={toggleShowOpenAIKey}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showOpenAIKey ? "Hide OpenAI API key" : "Show OpenAI API key"}
          >
            {showOpenAIKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          For generating character images
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">SerpAPI Key</h3>
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Key size={16} />
          </div>
          <Input
            type={showSerpAPIKey ? "text" : "password"}
            placeholder="Enter your SerpAPI key"
            value={serpApiKey}
            onChange={(e) => onChange(e.target.value, 'serpapi')}
            className="pl-9 pr-10 py-6 rounded-xl transition-all duration-300 border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="button"
            onClick={toggleShowSerpAPIKey}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showSerpAPIKey ? "Hide SerpAPI key" : "Show SerpAPI key"}
          >
            {showSerpAPIKey ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          For fetching artist example images
        </p>
      </div>

      <p className="text-xs text-muted-foreground mt-4 text-center">
        Your API keys are stored only in this browser session and are never saved
      </p>
    </div>
  );
};

export default ApiKeyInput;
