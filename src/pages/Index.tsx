
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
    <div className="min-h-screen flex flex-col relative">
      {/* Enhanced background with more elements and colors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Background gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        {/* Comic-style background pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px' 
          }}>
        </div>
        
        {/* Colorful bubble elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-comic-blue/15 rounded-full blur-3xl opacity-60 parallax" data-speed="10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-comic-purple/15 rounded-full blur-3xl opacity-60 parallax" data-speed="15"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-comic-pink/15 rounded-full blur-3xl opacity-50 parallax" data-speed="8"></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-comic-green/15 rounded-full blur-3xl opacity-40 parallax" data-speed="12"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-comic-yellow/15 rounded-full blur-3xl opacity-50 parallax" data-speed="7"></div>
        
        {/* SVG comic elements */}
        <div className="absolute top-10 right-[10%] text-comic-yellow/10 w-24 h-24 transform rotate-12 parallax" data-speed="6">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.3 22h-.1c-6.4-.1-10.3-5.3-8.8-11.5 1-4.3 4.4-8.3 8.6-9.3 1.2-.3 2.4-.4 3.6-.2 6.2 1.1 9.3 7.3 6.9 13.4-1.2 3.1-3.9 5.8-7.1 7.1-.9.3-2.1.5-3.1.5zm5.5-18.5c-.5 0-1 .1-1.5.2-3.6.9-6.5 4.4-7.4 8.2-1.3 5.3 1.9 9.7 7.3 9.8.8 0 1.7-.2 2.5-.4 2.8-1.1 5.1-3.4 6.2-6.1 2.1-5.3-.7-10.6-5.9-11.5-.4-.1-.8-.2-1.2-.2z"></path><path d="M14.7 8.3c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zm-5 0c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zm2.5 7.5c-1.9 0-3.5-1.2-4.1-2.9-.1-.3.1-.6.4-.7.3-.1.6.1.7.4.4 1.3 1.6 2.2 3 2.2s2.6-.9 3-2.2c.1-.3.4-.5.7-.4.3.1.5.4.4.7-.6 1.7-2.2 2.9-4.1 2.9z"></path></svg>
        </div>
        <div className="absolute bottom-20 left-[15%] text-comic-pink/10 w-20 h-20 transform -rotate-12 parallax" data-speed="9">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.55 14.4a1 1 0 0 1-.85.5 1 1 0 0 1-.5-.13 1 1 0 0 1-.37-1.36c.3-.62.5-1.28.62-1.95a.755.755 0 0 1 1.45.33c-.15.81-.4 1.61-.8 2.33a.99.99 0 0 1-.55.28zM10 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7 9a1 1 0 0 0-1 1 1 1 0 0 0 2 0 1 1 0 0 0-1-1z"></path></svg>
        </div>
        <div className="absolute top-[40%] left-[5%] text-comic-blue/10 w-16 h-16 transform rotate-45 parallax" data-speed="10">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
        </div>
      </div>

      <Header apiKey={apiKey} onApiKeyChange={updateApiKey} />

      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
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
