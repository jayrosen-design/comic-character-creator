
import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4 animate-bounce-small">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 animate-fade-up">
          Comic Character Creator
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '100ms' }}>
          Create your own unique comic book character with just a few clicks!
        </p>
      </div>
    </header>
  );
};

export default Header;
