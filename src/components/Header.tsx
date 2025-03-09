
import ApiKeyModal from "@/components/ApiKeyModal";
import { ApiKeyType } from "@/types";

interface HeaderProps {
  apiKey: string;
  serpApiKey: string;
  imgbbApiKey: string;
  onApiKeyChange: (value: string, keyType: ApiKeyType) => void;
}

const Header = ({ apiKey, serpApiKey, imgbbApiKey, onApiKeyChange }: HeaderProps) => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <ApiKeyModal 
            apiKey={apiKey} 
            serpApiKey={serpApiKey}
            imgbbApiKey={imgbbApiKey}
            onChange={onApiKeyChange} 
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 animate-fade-up">
          Comic Character Creator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '100ms' }}>
          Design and generate unique comic book characters with advanced art style controls!
        </p>
      </div>
    </header>
  );
};

export default Header;
