
import { ArtistInfo, AdvancedArtStyle } from "@/types";

// A subset of the artists from the user's context for initial implementation
export const ARTISTS_DATA: ArtistInfo[] = [
  {
    category: "Children's Book Illustrators",
    artistName: "Maurice Sendak",
    knownFor: "Where the Wild Things Are",
    description: "Rich, sometimes dark, textured illustrations that blend fantasy with realistic detail and capture a child's wild imagination."
  },
  {
    category: "Children's Book Illustrators",
    artistName: "Dr. Seuss (Theodor Geisel)",
    knownFor: "The Cat in the Hat series",
    description: "Bold, playful characters and landscapes rendered in unconventional, curving lines and vibrant colors that create an unmistakably imaginative world."
  },
  {
    category: "Children's Book Illustrators",
    artistName: "Eric Carle",
    knownFor: "The Very Hungry Caterpillar",
    description: "Layered, hand-painted tissue–paper collages with bright, vivid colors and a tactile, cut‐out look that feels both simple and innovative."
  },
  {
    category: "Comic Book Artists",
    artistName: "Jack Kirby",
    knownFor: "Fantastic Four, New Gods",
    description: "Dynamic, Bold. Pioneering layouts with explosive, muscular characters and cosmic designs that helped define the visual language of modern comics."
  },
  {
    category: "Comic Book Artists",
    artistName: "Steve Ditko",
    knownFor: "Spider-Man, Doctor Strange",
    description: "Fluid, Intricate. Intricate line work with surreal, otherworldly imagery and unconventional panel compositions that evoke mystery and imaginative alternate dimensions."
  },
  {
    category: "Comic Book Artists",
    artistName: "Neal Adams",
    knownFor: "Batman, Green Lantern/Green Arrow",
    description: "Realistic, Dramatic. Detailed, anatomically accurate art with dynamic, expressive characters and bold compositions that redefined superhero realism in comics."
  },
  {
    category: "Cartoonists",
    artistName: "Charles Schulz",
    knownFor: "Peanuts",
    description: "Simple & Expressive. Clean, expressive line work with relatable, heartwarming characters that capture the gentle humor and bittersweet nature of everyday life."
  },
  {
    category: "Cartoonists",
    artistName: "Bill Watterson",
    knownFor: "Calvin and Hobbes",
    description: "Imaginative & Detailed. A blend of whimsy and intricate detail with dynamic backgrounds that mix realistic observation with bursts of wild imagination."
  },
  {
    category: "Cartoonists",
    artistName: "Gary Larson",
    knownFor: "The Far Side",
    description: "Surreal & Minimal. Single-panel cartoons with absurd, offbeat humor and minimalistic, yet cleverly composed, illustrations that subvert everyday logic."
  },
  {
    category: "Cartoon TV Show Artists",
    artistName: "Genndy Tartakovsky",
    knownFor: "Samurai Jack, Dexter's Laboratory",
    description: "Minimalist & Dynamic. Bold, silhouette-driven designs with fluid motion and minimal detail that convey epic action in a striking, almost cinematic style."
  },
  {
    category: "Cartoon TV Show Artists",
    artistName: "Craig McCracken",
    knownFor: "The Powerpuff Girls, Foster's Home for Imaginary Friends",
    description: "Whimsical & Vibrant. Clean lines with exaggerated, cute character designs and vibrant colors that evoke playful, imaginative worlds."
  },
  {
    category: "Cartoon TV Show Artists",
    artistName: "Bruce Timm",
    knownFor: "Batman: The Animated Series, Justice League",
    description: "Sleek & Iconic. Simplified, art-deco–inspired designs with strong silhouettes and a neo-noir aesthetic that have defined modern superhero animation."
  },
  {
    category: "Manga Artists",
    artistName: "Hayao Miyazaki",
    knownFor: "Spirited Away, My Neighbor Totoro",
    description: "Whimsical & Detailed. Rich, hand-drawn visuals featuring lush landscapes and imaginative characters that evoke a deep connection with nature and heartfelt storytelling."
  },
  {
    category: "Manga Artists",
    artistName: "Makoto Shinkai",
    knownFor: "Your Name, Weathering with You",
    description: "Hyper-detailed & Vibrant. Photorealistic backgrounds with dramatic lighting and vivid colors that create emotionally charged, atmospheric scenes."
  },
  {
    category: "Manga Artists",
    artistName: "Satoshi Kon",
    knownFor: "Paprika, Perfect Blue",
    description: "Surreal & Fluid. Blends realistic detail with dreamlike, fluid transitions that blur the line between reality and fantasy, producing thought-provoking visuals."
  },
  {
    category: "Chibi Artists",
    artistName: "Momoko Sakura",
    knownFor: "Chibi Maruko-chan",
    description: "Iconic, Simplistic. Creator of one of Japan's most beloved chibi manga; her style is simple, endearing, and captures everyday life with a cute, approachable charm."
  },
  {
    category: "Digital Artists",
    artistName: "Beeple (Mike Winkelmann)",
    knownFor: "Everydays series; NFT art",
    description: "Futuristic, Collage-like. Produces daily digital artworks that blend dystopian imagery with surreal compositions, setting trends in digital art and NFT culture."
  },
  {
    category: "Digital Artists",
    artistName: "Artgerm (Stanley Lau)",
    knownFor: "Digital portraits, comic covers",
    description: "Hyper-realistic, Polished. Merges comic and traditional aesthetics to create stunning, detailed portraits that often grace magazine covers and merchandise."
  }
];

/**
 * Get available advanced art style categories
 */
export const getAdvancedArtStyleCategories = (): AdvancedArtStyle[] => {
  return Array.from(new Set(ARTISTS_DATA.map(artist => artist.category))) as AdvancedArtStyle[];
};

/**
 * Get artists for a specific art style category
 */
export const getArtistsByCategory = (category: AdvancedArtStyle): ArtistInfo[] => {
  return ARTISTS_DATA.filter(artist => artist.category === category);
};

/**
 * Get artist info by name and category
 */
export const getArtistInfo = (category: AdvancedArtStyle, artistName: string): ArtistInfo | undefined => {
  return ARTISTS_DATA.find(artist => artist.category === category && artist.artistName === artistName);
};
