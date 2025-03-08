
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ApiKeyInput from "@/components/ApiKeyInput";
import { KeyRound } from "lucide-react";
import { ApiKeyType } from "@/types";

interface ApiKeyModalProps {
  apiKey: string;
  serpApiKey: string;
  imgbbApiKey: string;
  onChange: (value: string, keyType: ApiKeyType) => void;
}

const ApiKeyModal = ({ apiKey, serpApiKey, imgbbApiKey, onChange }: ApiKeyModalProps) => {
  const hasKeys = apiKey || serpApiKey || imgbbApiKey;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2 bg-white/70 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
        >
          <KeyRound size={16} />
          {hasKeys ? "Update API Keys" : "Enter API Keys"}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-xl">Enter Your API Keys</SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <ApiKeyInput 
            apiKey={apiKey} 
            serpApiKey={serpApiKey}
            imgbbApiKey={imgbbApiKey}
            onChange={onChange} 
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ApiKeyModal;
