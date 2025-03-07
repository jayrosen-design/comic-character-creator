import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CharacterForm from "@/components/CharacterForm";
import ImageDisplay from "@/components/ImageDisplay";
import Gallery from "@/components/Gallery";
import useCharacterGenerator from "@/hooks/useCharacterGenerator";

const Index = () => {
  const {
    formData,
    apiKey,
    imageUrl,
    isLoading,
    isSavingImage,
    error,
    galleryImages,
    updateFormField,
    updateApiKey,
    generateCharacter,
    resetImage,
    remixCharacter,
  } = useCharacterGenerator();

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

      <Header apiKey={apiKey} onApiKeyChange={updateApiKey} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="space-y-12">
          <section className="glass-card p-6 md:p-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-xl font-semibold mb-6 text-center">Design Your Character</h2>
            <CharacterForm
              formData={formData}
              onUpdateField={updateFormField}
              onSubmit={generateCharacter}
              isLoading={isLoading}
            />
          </section>

          {(imageUrl || isLoading) && (
            <section className="max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '300ms' }}>
              <h2 className="text-xl font-semibold mb-6 text-center">Your Comic Character</h2>
              <ImageDisplay
                imageUrl={imageUrl}
                artStyle={formData.artStyle}
                onRegenerate={resetImage}
                isLoading={isLoading}
                isSavingImage={isSavingImage}
              />
            </section>
          )}

          <section className="max-w-6xl mx-auto animate-fade-up pb-12" style={{ animationDelay: '400ms' }}>
            <h2 className="text-xl font-semibold mb-6 text-center">Character Gallery</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check out characters created by everyone! Click "Remix" on any character to use its settings.
            </p>
            <Gallery 
              images={galleryImages} 
              onRemix={remixCharacter}
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
