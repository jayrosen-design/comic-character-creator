
import { ArtStyleDescription } from "@/types";

export const ART_STYLE_DESCRIPTIONS: ArtStyleDescription[] = [
  {
    style: "Children's Book Illustrators",
    description: "These artists create warm, playful images that make stories come alive with friendly characters and bright colors. Their art is soft and inviting, helping little readers feel happy and safe as they explore magical worlds."
  },
  {
    style: "Comic Book Artists",
    description: "Comic book art is bold and action-packed, using strong lines and dramatic shading to tell exciting stories about heroes and adventures. It makes you feel like you're reading a mini-movie on each page!"
  },
  {
    style: "Cartoonists",
    description: "Cartoonists use simple, funny drawings to share jokes and stories about everyday life. Their art is filled with exaggerated features and bright, lively images that make us laugh."
  },
  {
    style: "Cartoon TV Show Artists",
    description: "These artists design the characters and worlds you see in your favorite cartoons on TV. Their drawings are colorful and fast-moving, making animated shows fun and full of energy."
  },
  {
    style: "Anime",
    description: "Anime is a distinctive Japanese animation style known for its colorful graphics, vibrant characters, and fantastical themes that range from sci-fi and fantasy to romance and everyday life."
  },
  {
    style: "Manga Artists",
    description: "Manga is a special Japanese comic style known for its detailed drawings and dramatic expressions. It often mixes action, adventure, and deep feelings, pulling readers into amazing stories."
  },
  {
    style: "Chibi Artists",
    description: "Chibi art makes characters look super cute with huge heads and tiny bodies. This playful style is extra charming and is used to show characters in a fun, adorable way."
  },
  {
    style: "Digital Artists",
    description: "Digital artists create pictures on computers using special software that lets them blend colors and effects in new ways. Their art is bright and modern, showing off neat techniques that you can't do with just pencils or paint."
  },
  {
    style: "Digital Art Illustration",
    description: "These artists use computers to draw detailed, polished pictures that can appear in books, websites, and magazines. Their work is clear and clean, combining old drawing skills with cool new technology."
  },
  {
    style: "Vintage Comic",
    description: "Vintage comic art comes from long ago and has a classic, hand‑drawn feel with bold ink and simple colors. It's like looking at a treasure chest of old, nostalgic stories told with a lot of charm."
  },
  {
    style: "Modern Comic",
    description: "Modern cartoon art uses both traditional drawing and computer tools to create fun, fresh images. Their work is bright and full of energy, showing today's trends in humor and design."
  },
  {
    style: "Ukiyo-e",
    description: "Ukiyo‑e is a traditional Japanese art style famous for its flowing lines and beautiful patterns. These illustrations often show nature and everyday life in a graceful, dreamy way that's very different from most cartoons."
  },
  {
    style: "Graphic Novel",
    description: "Graphic novel art tells longer, deeper stories by mixing pictures and words. The style is often more realistic and detailed, making the book feel like a big, exciting movie you can read."
  },
  {
    style: "Cel-Shaded Artist",
    description: "Cel‑shading gives drawings a clean, cartoon-like look with bold outlines and flat areas of color. This style makes images look bright and graphic, almost like animated cartoons drawn by hand."
  },
  {
    style: "Sci-Fi Illustrations",
    description: "Science fiction art shows us futuristic worlds, strange aliens, and amazing technology. These artists mix real science with wild imagination to create images that make you dream of space adventures."
  },
  {
    style: "Videogame Artists",
    description: "These artists design characters and worlds for video games, making the games look exciting and fun. Their detailed drawings mix realism with fantasy, inviting players to explore new and immersive worlds."
  },
  {
    style: "Pre-1950 Cartoonists",
    description: "Early cartoon art was drawn by hand with simple lines and a lot of heart. These pioneers created the first comic strips that made people laugh, using techniques that are different from the bright, digital cartoons of today."
  },
  {
    style: "Art Nouveau",
    description: "Art Nouveau is known for its flowing, organic lines and intricate, nature-inspired patterns. These artists create very elegant and decorative images that look like beautiful, living designs full of curves and flowers."
  }
];

export const getArtStyleDescription = (style: string): string | undefined => {
  const description = ART_STYLE_DESCRIPTIONS.find(
    (desc) => desc.style === style
  );
  return description?.description;
};

// Add a helper function to get all art style categories
export const getAllArtStyleCategories = (): string[] => {
  return ART_STYLE_DESCRIPTIONS.map(desc => desc.style);
};
