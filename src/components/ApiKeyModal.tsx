
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ApiKeyInput from "@/components/ApiKeyInput";
import { KeyRound } from "lucide-react";

interface ApiKeyModalProps {
  apiKey: string;
  onChange: (value: string) => void;
}

const ApiKeyModal = ({ apiKey, onChange }: ApiKeyModalProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          className="gap-2 bg-white/70 backdrop-blur-sm border-primary/20 hover:bg-primary/5"
        >
          <KeyRound size={16} />
          {apiKey ? "Update API Key" : "Enter API Key"}
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-xl">Enter Your OpenAI API Key</SheetTitle>
        </SheetHeader>
        <div className="py-6">
          <ApiKeyInput apiKey={apiKey} onChange={onChange} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ApiKeyModal;
