
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 px-4 mt-12">
      <div className="text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          Made with <Heart className="h-4 w-4 text-comic-red" /> for young creative minds
        </p>
        <p className="mt-1">
          Images generated using DALL-E 3 by OpenAI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
