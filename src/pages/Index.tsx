
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ApiKeyInput from "@/components/ApiKeyInput";
import CharacterForm from "@/components/CharacterForm";
import ImageDisplay from "@/components/ImageDisplay";
import useCharacterGenerator from "@/hooks/useCharacterGenerator";

const Index = () => {
  const {
    formData,
    apiKey,
    imageUrl,
    isLoading,
    error,
    updateFormField,
    updateApiKey,
    generateCharacter,
    resetImage,
  } = useCharacterGenerator();

  // Add some parallax effect on mouse move for a subtle interactive feel
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute("data-speed") || "5");
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Decoration elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-comic-blue/10 rounded-full blur-3xl opacity-60 parallax" 
          data-speed="10"
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-comic-purple/10 rounded-full blur-3xl opacity-60 parallax" 
          data-speed="15"
        ></div>
        <div 
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-comic-pink/10 rounded-full blur-3xl opacity-40 parallax" 
          data-speed="8"
        ></div>
      </div>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-12">
          {/* API Key Input Section */}
          <section className="glass-card p-6 md:p-8 max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">Enter Your OpenAI API Key</h2>
            <ApiKeyInput apiKey={apiKey} onChange={updateApiKey} />
          </section>

          {/* Character Options Section */}
          <section className="glass-card p-6 md:p-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold mb-6 text-center">Design Your Character</h2>
            <CharacterForm
              formData={formData}
              onUpdateField={updateFormField}
              onSubmit={generateCharacter}
              isLoading={isLoading}
            />
          </section>

          {/* Image Display Section */}
          {(imageUrl || isLoading) && (
            <section className="max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
              <h2 className="text-xl font-semibold mb-6 text-center">Your Comic Character</h2>
              <ImageDisplay
                imageUrl={imageUrl}
                onRegenerate={resetImage}
                isLoading={isLoading}
              />
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
