
import { ArtStyle } from "@/types";

interface FunFact {
  artStyle: ArtStyle;
  facts: string[];
}

export const artStyleFunFacts: FunFact[] = [
  {
    artStyle: "Classic Comic",
    facts: [
      "It uses bold lines and bright colors to make characters stand out.",
      "It tells exciting stories with heroes and funny villains.",
      "It uses speech bubbles so you can read what the characters say."
    ]
  },
  {
    artStyle: "Manga",
    facts: [
      "Manga is a style of comics from Japan with unique and imaginative characters.",
      "It is often drawn in black and white with lots of cool details.",
      "Manga stories can be funny, adventurous, or even magical."
    ]
  },
  {
    artStyle: "Modern Cartoon",
    facts: [
      "Modern Cartoon has playful characters and lots of fun, bright colors.",
      "It uses simple drawings with cool effects to tell stories.",
      "These cartoons are made to make people laugh and feel happy."
    ]
  },
  {
    artStyle: "Superhero",
    facts: [
      "Superhero art shows characters with amazing powers and cool costumes.",
      "These comics feature brave heroes who fight for justice and help others.",
      "Superhero stories are full of action, adventure, and daring rescues."
    ]
  },
  {
    artStyle: "Animated",
    facts: [
      "Animated art is like a moving drawing you see on TV.",
      "It brings characters to life with fun, energy, and lots of movement.",
      "Animated cartoons often have silly and exciting adventures that are fun to watch."
    ]
  },
  {
    artStyle: "Vintage",
    facts: [
      "Vintage art has an old-school look with soft, warm colors that remind us of the past.",
      "It makes you feel like you are reading an old storybook filled with classic adventures.",
      "Vintage art shows how people used to draw stories in a simple, charming way."
    ]
  },
  {
    artStyle: "Chibi",
    facts: [
      "Chibi art shows characters in a super cute and small form with big, sparkly eyes.",
      "The characters are drawn with tiny bodies and oversized features that make them adorable.",
      "Chibi art makes even strong heroes look extra cuddly and fun."
    ]
  },
  {
    artStyle: "Digital Art",
    facts: [
      "Digital art is created on computers using cool software and creative tools.",
      "It can make amazing effects and bright, vibrant colors that pop out on the screen.",
      "Digital art lets artists try many creative ideas quickly and share them with the world."
    ]
  },
  {
    artStyle: "Watercolor",
    facts: [
      "Watercolor art uses soft, blended colors that mix together like a gentle painting.",
      "It looks like a picture made with water and special brushes that spread color softly.",
      "Watercolor art creates dreamy pictures that feel calm and beautiful."
    ]
  },
  {
    artStyle: "Minimalist",
    facts: [
      "Minimalist art uses simple shapes and very few colors to create a clean look.",
      "It shows that sometimes simple designs can be the most beautiful and easy to understand.",
      "Minimalist art is all about keeping things neat, clear, and fun with just a few elements."
    ]
  }
];

/**
 * Gets a random fun fact for the specified art style
 */
export function getRandomFunFact(artStyle: ArtStyle): string {
  const artStyleData = artStyleFunFacts.find(item => item.artStyle === artStyle);
  
  if (!artStyleData) {
    return "Did you know? Art is a great way to express creativity!";
  }
  
  const randomIndex = Math.floor(Math.random() * artStyleData.facts.length);
  return artStyleData.facts[randomIndex];
}
