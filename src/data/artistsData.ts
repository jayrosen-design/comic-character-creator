import { ArtistInfo, AdvancedArtStyle } from "@/types";

// Artists data from the spreadsheet
export const ARTISTS_DATA: ArtistInfo[] = [
  // Children's Book Illustrations
  {
    category: "Children's Book Illustrations",
    artistName: "Maurice Sendak",
    knownFor: "Where the Wild Things Are",
    description: "Rich, sometimes dark, textured illustrations that blend fantasy with realistic detail and capture a child's wild imagination."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Dr. Seuss (Theodor Geisel)",
    knownFor: "The Cat in the Hat series",
    description: "Bold, playful characters and landscapes rendered in unconventional, curving lines and vibrant colors that create an unmistakably imaginative world."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Eric Carle",
    knownFor: "The Very Hungry Caterpillar",
    description: "Layered, hand-painted tissue–paper collages with bright, vivid colors and a tactile, cut‐out look that feels both simple and innovative."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Quentin Blake",
    knownFor: "Roald Dahl books (e.g., Matilda, Charlie and the Chocolate Factory)",
    description: "Energetic, spontaneous ink drawings with watercolor accents that convey humor, movement, and a sense of joyful chaos."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Beatrix Potter",
    knownFor: "The Tale of Peter Rabbit",
    description: "Soft watercolor illustrations with fine line work that authentically capture nature and animal behavior in a gentle, timeless manner."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Chris Van Allsburg",
    knownFor: "The Polar Express, Jumanji",
    description: "Meticulously detailed images with a moody, subtle palette that blend realism and mystery to evoke wonder and adventure."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Jerry Pinkney",
    knownFor: "The Lion & the Mouse",
    description: "Warm, dynamic watercolor paintings with fluid compositions that bring narrative scenes to life with depth and emotional warmth."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Jan Brett",
    knownFor: "The Mitten",
    description: "Elaborate, detailed illustrations with decorative borders and patterns that evoke cultural storytelling and an old-world charm."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Leo Lionni",
    knownFor: "Frederick, Little Blue and Little Yellow",
    description: "Simple, abstract compositions using collage techniques and earthy hues that deliver a clear, story-driven visual narrative."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Oliver Jeffers",
    knownFor: "Lost and Found",
    description: "Playful, gently rendered illustrations featuring simple lines and pastel washes that capture innocence and the magic of discovery."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "David Wiesner",
    knownFor: "Tuesday",
    description: "Imaginative, intricately detailed scenes that merge everyday reality with fantastical elements in a dreamlike, almost otherworldly manner."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Tove Jansson",
    knownFor: "The Moomin series",
    description: "Soft, fluid line work with a subtle color palette and a whimsical quality that perfectly conveys the cozy, mystical world of the Moomins."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Robert McCloskey",
    knownFor: "Make Way for Ducklings",
    description: "Lifelike watercolors that capture everyday life and natural settings with warmth and a gentle attention to detail."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "H.A. Rey (and Margret Rey)",
    knownFor: "Curious George",
    description: "Clean, approachable line drawings with a friendly, animated quality that make the mischievous monkey instantly endearing to children."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Garth Williams",
    knownFor: "Charlotte's Web",
    description: "Nostalgic illustrations with carefully rendered characters and rural settings that evoke the warmth and simplicity of traditional children's tales."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "E.H. Shepard",
    knownFor: "Winnie-the-Pooh",
    description: "Timeless pencil and ink drawings with a light, airy quality and expressive characters that have become synonymous with gentle storytelling."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Arthur Rackham",
    knownFor: "Various fairy tales",
    description: "Elaborate, dark, and fantastical illustrations with fine line work and ethereal detail that bring mythical and fairy-tale worlds vividly to life."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "N.C. Wyeth",
    knownFor: "Treasure Island",
    description: "Vivid, dynamic illustrations with strong contrasts and robust forms that capture the adventure and excitement of classic tales."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Lane Smith",
    knownFor: "The Stinky Cheese Man and other offbeat titles",
    description: "Playful and unconventional illustrations that mix various media with a distinctive, textured, and humorous visual flair."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Chris Riddell",
    knownFor: "The Edge Chronicles, Muddle Earth",
    description: "Intricately rendered line drawings that bring fantastical worlds and quirky characters to life with precision and creative energy."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Maira Kalman",
    knownFor: "Various picture books",
    description: "Casual, diary-like sketches with a spontaneous, playful quality that feel personal and charmingly offbeat."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Kadir Nelson",
    knownFor: "The Undefeated",
    description: "Powerful, lifelike portraits and scenes rendered with rich textures and emotional depth—often employing a collage-like approach for a striking effect."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Ezra Jack Keats",
    knownFor: "The Snowy Day",
    description: "Bold use of shapes, textures, and block printing that combine simplicity with innovative techniques to celebrate urban childhood."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Mary Blair",
    knownFor: "Disney concept art and illustrated books",
    description: "Simplified, colorful compositions with strong geometric shapes and flat areas of color that exude an energetic, uplifting feel."
  },
  {
    category: "Children's Book Illustrations",
    artistName: "Sophie Blackall",
    knownFor: "Hello Lighthouse, Finding Winnie",
    description: "Refined line work combined with soft watercolor washes that create graceful, emotive visuals imbued with a gentle, timeless charm."
  },
  
  // Comic Book Artists
  {
    category: "Comic Book Artists",
    artistName: "Jack Kirby",
    knownFor: "Fantastic Four, New Gods",
    description: "Pioneering layouts with explosive, muscular characters and cosmic designs that helped define the visual language of modern comics."
  },
  {
    category: "Comic Book Artists",
    artistName: "Steve Ditko",
    knownFor: "Spider-Man, Doctor Strange",
    description: "Intricate line work with surreal, otherworldly imagery and unconventional panel compositions that evoke mystery and imaginative alternate dimensions."
  },
  {
    category: "Comic Book Artists",
    artistName: "Neal Adams",
    knownFor: "Batman, Green Lantern/Green Arrow",
    description: "Detailed, anatomically accurate art with dynamic, expressive characters and bold compositions that redefined superhero realism in comics."
  },
  {
    category: "Comic Book Artists",
    artistName: "Jim Lee",
    knownFor: "X-Men, Batman: Hush",
    description: "Polished, modern style featuring strong anatomy, dramatic poses, and detailed backgrounds that create dynamic and visually impactful action sequences."
  },
  {
    category: "Comic Book Artists",
    artistName: "Todd McFarlane",
    knownFor: "Spawn, Batman (among others)",
    description: "Highly detailed, textured line work with a dark, edgy aesthetic and intricate embellishments that pushed the limits of contemporary comic art."
  },
  {
    category: "Comic Book Artists",
    artistName: "Frank Miller",
    knownFor: "The Dark Knight Returns, Sin City",
    description: "Bold high-contrast visuals with heavy shadows, minimal color, and a gritty, cinematic approach that underscores themes of urban decay and moral ambiguity."
  },
  {
    category: "Comic Book Artists",
    artistName: "Alex Ross",
    knownFor: "Kingdom Come, Marvels",
    description: "Uses realistic, almost photographic painting techniques to render iconic characters with an epic, majestic presence and dramatic lighting."
  },
  {
    category: "Comic Book Artists",
    artistName: "John Romita Sr.",
    knownFor: "Spider-Man",
    description: "Clean, expressive lines and balanced compositions that helped define the Silver Age look of Spider-Man, blending approachability with dynamic action."
  },
  {
    category: "Comic Book Artists",
    artistName: "John Byrne",
    knownFor: "X-Men, Fantastic Four",
    description: "Crisp, clear storytelling with dynamic figure work and accessible panel layouts that communicate action and emotion in a straightforward manner."
  },
  {
    category: "Comic Book Artists",
    artistName: "George Pérez",
    knownFor: "Crisis on Infinite Earths, Wonder Woman",
    description: "Intricate and highly detailed compositions featuring complex crowd scenes and a deep attention to character detail across expansive, multi-panel sequences."
  },
  {
    category: "Comic Book Artists",
    artistName: "Jim Steranko",
    knownFor: "Nick Fury, Fantastic Four",
    description: "Experimental layouts and inventive use of collage and graphic effects that broke traditional comic conventions with a striking, almost cinematic flair."
  },
  {
    category: "Comic Book Artists",
    artistName: "Will Eisner",
    knownFor: "The Spirit, graphic novels",
    description: "Fluid, narrative-driven art with innovative panel design and a storytelling sensibility that laid the foundation for the modern graphic novel."
  },
  {
    category: "Comic Book Artists",
    artistName: "Steve Rude",
    knownFor: "Nexus",
    description: "Combines realistic anatomy with a slightly stylized, energetic feel, known for clean lines and expressive character work that brings both action and emotion to the page."
  },
  {
    category: "Comic Book Artists",
    artistName: "Bernie Wrightson",
    knownFor: "Swamp Thing, horror comics",
    description: "Masterful pen-and-ink technique that creates dark, atmospheric illustrations with intricate textures ideal for horror and supernatural themes."
  },
  {
    category: "Comic Book Artists",
    artistName: "Adam Hughes",
    knownFor: "Wonder Woman, Catwoman",
    description: "Emphasis on attractive, highly polished character designs with smooth shading and clean lines that produce visually striking and memorable covers."
  },
  {
    category: "Comic Book Artists",
    artistName: "Alex Maleev",
    knownFor: "Daredevil",
    description: "Distinctively dark and textured, using heavy contrasts and shadow to capture the inner turmoil and gritty realism of urban superheroes."
  },
  {
    category: "Comic Book Artists",
    artistName: "Frank Quitely",
    knownFor: "All-Star Superman, Batman and Robin",
    description: "Refined, detailed artwork with imaginative compositions and a balance of realism and stylization that enhances both character and environmental storytelling."
  },
  {
    category: "Comic Book Artists",
    artistName: "Duncan Fegredo",
    knownFor: "The Invisibles, Batman (various projects)",
    description: "Bold, imaginative style that fuses abstract elements with dynamic, fluid line work to create a dreamlike yet accessible visual narrative."
  },
  {
    category: "Comic Book Artists",
    artistName: "Esad Ribic",
    knownFor: "Thor: God of Thunder, Secret Wars",
    description: "Painterly approach with dramatic lighting and intricate textures, producing epic, large-scale scenes with a high level of realism and emotional impact."
  },
  {
    category: "Comic Book Artists",
    artistName: "Ivan Reis",
    knownFor: "Green Lantern, Superman",
    description: "Versatile style marked by crisp line work, clear compositions, and a strong sense of movement and energy in action sequences."
  },
  {
    category: "Comic Book Artists",
    artistName: "Olivier Coipel",
    knownFor: "Thor, The Avengers",
    description: "Crisp, dynamic illustrations with strong, defined lines and impactful compositions that emphasize both character motion and vivid action."
  },
  {
    category: "Comic Book Artists",
    artistName: "Sara Pichelli",
    knownFor: "Ultimate Spider-Man, X-Men",
    description: "Fresh, energetic style that captures the dynamism of youthful characters with fluid lines and a playful, approachable aesthetic."
  },
  {
    category: "Comic Book Artists",
    artistName: "Leinil Francis Yu",
    knownFor: "Avengers, Wolverine",
    description: "Combines realistic anatomy with dynamic action, rendered in vibrant colors and dramatic lighting to highlight intensity and movement."
  },
  {
    category: "Comic Book Artists",
    artistName: "David Mazzucchelli",
    knownFor: "Batman: Year One",
    description: "Uses bold contrasts, strong shapes, and minimalist details to evoke a cinematic, moody atmosphere that enhances the narrative intensity."
  },
  {
    category: "Comic Book Artists",
    artistName: "Mike Mignola",
    knownFor: "Hellboy",
    description: "Iconic use of minimal line work with deep, foreboding shadows and a Gothic, mythic quality that creates a distinctive, instantly recognizable visual signature."
  },
  
  // Cartoonists
  {
    category: "Cartoonists",
    artistName: "Charles Schulz",
    knownFor: "Peanuts",
    description: "Clean, expressive line work with relatable, heartwarming characters that capture the gentle humor and bittersweet nature of everyday life."
  },
  {
    category: "Cartoonists",
    artistName: "Bill Watterson",
    knownFor: "Calvin and Hobbes",
    description: "A blend of whimsy and intricate detail with dynamic backgrounds that mix realistic observation with bursts of wild imagination."
  },
  {
    category: "Cartoonists",
    artistName: "Gary Larson",
    knownFor: "The Far Side",
    description: "Single-panel cartoons with absurd, offbeat humor and minimalistic, yet cleverly composed, illustrations that subvert everyday logic."
  },
  {
    category: "Cartoonists",
    artistName: "Matt Groening",
    knownFor: "The Simpsons, Futurama",
    description: "Simple, instantly recognizable character designs with vibrant colors and a satirical edge that have defined modern animated humor."
  },
  {
    category: "Cartoonists",
    artistName: "Al Capp",
    knownFor: "Li'l Abner",
    description: "Robust, detailed drawings that combine exaggerated features and social commentary with a distinctly humorous take on rural Americana."
  },
  {
    category: "Cartoonists",
    artistName: "Winsor McCay",
    knownFor: "Little Nemo in Slumberland",
    description: "Fluid, dreamlike line work with elaborate, fantastical layouts that set the standard for visual storytelling in early cartoon art."
  },
  {
    category: "Cartoonists",
    artistName: "George Herriman",
    knownFor: "Krazy Kat",
    description: "Loose, poetic style with surreal layouts and subtle humor that defies conventional panel structures to create an imaginative, timeless world."
  },
  {
    category: "Cartoonists",
    artistName: "Roz Chast",
    knownFor: "New Yorker cartoons",
    description: "Eccentric, densely inked drawings with a distinctive, self-deprecating humor and a uniquely observant take on modern life."
  },
  {
    category: "Cartoonists",
    artistName: "Jim Davis",
    knownFor: "Garfield",
    description: "Bold, accessible lines and character designs that blend everyday humor with a simple, family-friendly aesthetic."
  },
  {
    category: "Cartoonists",
    artistName: "Stephan Pastis",
    knownFor: "Pearls Before Swine",
    description: "Crisp, straightforward line art paired with witty, subversive humor that delivers biting social satire in a deceptively simple format."
  },
  {
    category: "Cartoonists",
    artistName: "Berkeley Breathed",
    knownFor: "Bloom County",
    description: "Lively, narrative-driven art with caricatured figures and satirical social commentary that capture the absurdity of contemporary culture."
  },
  {
    category: "Cartoonists",
    artistName: "Lynn Johnston",
    knownFor: "For Better or For Worse",
    description: "Expressive, everyday illustrations that capture the nuances of family life with warmth, detail, and a gently humorous perspective."
  },
  {
    category: "Cartoonists",
    artistName: "Patrick McDonnell",
    knownFor: "Mutts",
    description: "Soft, expressive illustrations that emphasize warmth, empathy, and the simple pleasures of life through playful, character-driven art."
  },
  {
    category: "Cartoonists",
    artistName: "Bill Amend",
    knownFor: "FoxTrot",
    description: "Clean, modern line art with a focus on relatable family and school humor, rendered in a balanced, accessible style."
  },
  {
    category: "Cartoonists",
    artistName: "Al Jaffee",
    knownFor: "Mad Magazine fold-ins",
    description: "Witty, playful drawings renowned for his innovative fold-in technique and satirical take on pop culture, delivered with creative wordplay."
  },
  {
    category: "Cartoonists",
    artistName: "E.C. Segar",
    knownFor: "Popeye",
    description: "Bold, energetic illustrations featuring exaggerated expressions and dynamic movement that embody the timeless, nautical charm of the character."
  },
  {
    category: "Cartoonists",
    artistName: "R. Crumb",
    knownFor: "Underground comix",
    description: "Highly detailed, gritty drawings with an unmistakable countercultural edge that challenge social norms and conventional artistic standards."
  },
  {
    category: "Cartoonists",
    artistName: "Lynda Barry",
    knownFor: "Ernie Pook's Comeek",
    description: "Sketchy, emotionally resonant drawings that capture the chaotic wonder and quirky humor of childhood with a raw, personal touch."
  },
  {
    category: "Cartoonists",
    artistName: "Chris Ware",
    knownFor: "Acme Novelty Library",
    description: "Clean, architectural line work with a focus on structured composition and a subtle, melancholic narrative style that invites thoughtful reflection."
  },
  {
    category: "Cartoonists",
    artistName: "Sergio Aragones",
    knownFor: "MAD Magazine, Marginals",
    description: "Extremely detailed, tiny cartoons packed with visual gags and rapid-fire humor that showcase an inventive, almost frenetic sense of comic absurdity."
  },
  {
    category: "Cartoonists",
    artistName: "Zach Weinersmith",
    knownFor: "Saturday Morning Breakfast Cereal",
    description: "Simple yet clever illustrations combining scientific wit with absurd humor to create cartoons that are both insightful and playfully subversive."
  },
  {
    category: "Cartoonists",
    artistName: "Jeff Kinney",
    knownFor: "Diary of a Wimpy Kid",
    description: "Hand-drawn, relatable style featuring a playful, sketchy aesthetic that perfectly captures the humorous trials of school and family life."
  },
  {
    category: "Cartoonists",
    artistName: "Tony Millionaire",
    knownFor: "Maakies",
    description: "Richly textured illustrations blending dark humor with a vintage, whimsical aesthetic, marked by a distinct, highly stylized visual approach."
  },
  {
    category: "Cartoonists",
    artistName: "Gahan Wilson",
    knownFor: "Macabre cartoons",
    description: "Intricate, detailed line drawings with a gothic twist, blending eerie imagery with biting humor in a style that's both unsettling and fascinating."
  },
  {
    category: "Cartoonists",
    artistName: "Charles Addams",
    knownFor: "The Addams Family",
    description: "Elegantly drawn cartoons featuring dark, humorous, and macabre elements that have defined a unique, timeless style with a refined yet offbeat sensibility."
  },
  
  // Cartoon TV Shows
  {
    category: "Cartoon TV Shows",
    artistName: "Genndy Tartakovsky",
    knownFor: "Samurai Jack, Dexter's Laboratory",
    description: "Bold, silhouette-driven designs with fluid motion and minimal detail that convey epic action in a striking, almost cinematic style."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Craig McCracken",
    knownFor: "The Powerpuff Girls, Foster's Home for Imaginary Friends",
    description: "Clean lines with exaggerated, cute character designs and vibrant colors that evoke playful, imaginative worlds."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Bruce Timm",
    knownFor: "Batman: The Animated Series, Justice League",
    description: "Simplified, art-deco–inspired designs with strong silhouettes and a neo-noir aesthetic that have defined modern superhero animation."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Pendleton Ward",
    knownFor: "Adventure Time",
    description: "Loose, spontaneous line work with a vibrant, dreamlike color palette that balances whimsical humor with unexpected visual twists."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Rebecca Sugar",
    knownFor: "Steven Universe",
    description: "Pastel-hued, fluid character designs emphasizing emotion and gentle shapes, creating a warm and inclusive visual atmosphere."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Lauren Faust",
    knownFor: "My Little Pony: Friendship is Magic",
    description: "Stylized, friendly character designs with bright, harmonious colors that appeal to all ages and emphasize positivity and friendship."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Stephen Hillenburg",
    knownFor: "SpongeBob SquarePants",
    description: "Crisp, simple character designs combined with underwater whimsy and bold, accessible visuals that capture the quirky spirit of Bikini Bottom."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "John Kricfalusi",
    knownFor: "Ren & Stimpy",
    description: "Highly expressive, over-the-top line work with distorted proportions and dynamic expressions that push the boundaries of traditional cartoon humor."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Matt Groening",
    knownFor: "The Simpsons, Futurama",
    description: "Simple, instantly recognizable designs with exaggerated features and sharp satirical edges that have become cultural touchstones in TV animation."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Jhonen Vasquez",
    knownFor: "Invader Zim",
    description: "Gothic, angular designs with intricate, surreal details that create a distinctly offbeat and unsettling visual world."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Rob Renzetti",
    knownFor: "My Life as a Teenage Robot",
    description: "Clean, detailed line work with a playful sci‑fi flair that marries futuristic elements with cartoon humor."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Bruce W. Smith",
    knownFor: "The Proud Family",
    description: "Expressive characters rendered in bold, energetic lines and vivid colors that reflect culturally rich, everyday life with humor and heart."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Michael Dante DiMartino",
    knownFor: "Avatar: The Last Airbender",
    description: "A blend of Eastern aesthetics with Western animation—featuring detailed, flowing line work and balanced compositions that evoke natural movement and spiritual themes."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Bryan Konietzko",
    knownFor: "The Legend of Korra",
    description: "A refined, contemporary approach with bold shapes and vibrant colors that builds upon Eastern influences while pushing a dynamic, updated visual style."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Alex Hirsch",
    knownFor: "Gravity Falls",
    description: "Hand-drawn, characterful designs with a retro sensibility and mysterious, offbeat humor that invites repeated discovery of hidden details."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "J. G. Quintel",
    knownFor: "Regular Show",
    description: "Casual, sketch-like illustrations that balance everyday absurdity with a playful, spontaneous aesthetic, capturing the humor of the mundane."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Justin Roiland",
    knownFor: "Rick and Morty",
    description: "A mix of simple, sometimes rough character designs paired with surreal, cosmic imagery that reinforces the show's unpredictable, bizarre humor."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Glen Murakami",
    knownFor: "Batman Beyond, Samurai Jack, Teen Titans",
    description: "Dynamic, angular designs with strong silhouettes and a futuristic edge, combining fluid motion with bold, defined character forms."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Masaaki Yuasa",
    knownFor: "Devilman Crybaby, Keep Your Hands Off Eizouken!",
    description: "Highly unconventional and expressive, using exaggerated motion and fluid transitions that break traditional animation norms to create truly unique visuals."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Stephen Silver",
    knownFor: "Kim Possible (Character Design)",
    description: "Crisp, refined character designs that emphasize charm and approachability, with an emphasis on clear, dynamic facial expressions."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Seth MacFarlane",
    knownFor: "Family Guy, American Dad!",
    description: "Classic, straightforward cartoon style with clean lines and a focus on humor, blending a traditional animation look with contemporary satirical wit."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Everett Peck",
    knownFor: "Duckman",
    description: "Bold, exaggerated features with a distinct, offbeat edge that infuses his work with alternative humor and a countercultural attitude."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Joe Murray",
    knownFor: "Rocko's Modern Life",
    description: "Playful, slightly rough, hand-drawn designs that capture the imaginative, off-kilter world of suburban chaos and childhood wonder."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Jim Reardon",
    knownFor: "Tiny Toon Adventures, Animaniacs",
    description: "Fluid, exaggerated animation that combines strong comedic timing with highly energetic, meticulously composed character movements."
  },
  {
    category: "Cartoon TV Shows",
    artistName: "Trey Parker",
    knownFor: "South Park",
    description: "Deliberately crude, cutout-style visuals with minimal detail that enhance the sharp, biting humor and straightforward storytelling inherent to the series."
  },
  
  // Anime
  {
    category: "Anime",
    artistName: "Hayao Miyazaki",
    knownFor: "Spirited Away, My Neighbor Totoro",
    description: "Rich, hand-drawn visuals featuring lush landscapes and imaginative characters that evoke a deep connection with nature and heartfelt storytelling."
  },
  {
    category: "Anime",
    artistName: "Makoto Shinkai",
    knownFor: "Your Name, Weathering with You",
    description: "Photorealistic backgrounds with dramatic lighting and vivid colors that create emotionally charged, atmospheric scenes."
  },
  {
    category: "Anime",
    artistName: "Satoshi Kon",
    knownFor: "Paprika, Perfect Blue",
    description: "Blends realistic detail with dreamlike, fluid transitions that blur the line between reality and fantasy, producing thought-provoking visuals."
  },
  {
    category: "Anime",
    artistName: "Katsuhiro Otomo",
    knownFor: "Akira",
    description: "Gritty, highly detailed line work with dynamic compositions and a futuristic, dystopian aesthetic that set the benchmark for cyberpunk art in anime."
  },
  {
    category: "Anime",
    artistName: "Leiji Matsumoto",
    knownFor: "Space Battleship Yamato, Captain Harlock",
    description: "Iconic, flowing line work with a classic space opera feel, combining romanticism with adventurous, sweeping cosmic designs."
  },
  {
    category: "Anime",
    artistName: "Akira Toriyama",
    knownFor: "Dragon Ball, Dr. Slump",
    description: "Bold, energetic illustrations featuring clear, expressive character designs and playful exaggerations that have defined the look of many action-adventure series."
  },
  {
    category: "Anime",
    artistName: "Naoko Takeuchi",
    knownFor: "Sailor Moon",
    description: "Graceful, decorative art with sparkling details and flowing lines that embody the magical girl aesthetic and timeless charm."
  },
  {
    category: "Anime",
    artistName: "Rumiko Takahashi",
    knownFor: "InuYasha, Ranma ½",
    description: "Balances humor, romance, and action with detailed characters and expressive faces, creating stories that mix fantasy with everyday life."
  },
  {
    category: "Anime",
    artistName: "Takeshi Obata",
    knownFor: "Death Note, Bakuman",
    description: "Precise, clean illustrations with nuanced shading and realistic proportions that heighten the drama and suspense in his storytelling."
  },
  {
    category: "Anime",
    artistName: "Hirohiko Araki",
    knownFor: "JoJo's Bizarre Adventure",
    description: "Bold, distinctive, and highly stylized artwork with dramatic poses, intricate patterns, and a fusion of fashion and muscularity that creates an unmistakable visual signature."
  },
  {
    category: "Anime",
    artistName: "Hajime Isayama",
    knownFor: "Attack on Titan",
    description: "Dark, raw illustrations marked by heavy line work and an oppressive atmosphere that capture the series' relentless tension and bleak setting."
  },
  {
    category: "Anime",
    artistName: "Yoshitaka Amano",
    knownFor: "Final Fantasy, Vampire Hunter D",
    description: "Lush, dreamlike visuals with intricate line work, flowing forms, and an almost otherworldly quality that blend fantasy with fine art."
  },
  {
    category: "Anime",
    artistName: "Yusuke Murata",
    knownFor: "One-Punch Man, Eyeshield 21",
    description: "Energetic, meticulously rendered action scenes with fluid motion and cinematic clarity that bring characters and battles to life."
  },
  {
    category: "Anime",
    artistName: "Hiroyuki Imaishi",
    knownFor: "Gurren Lagann, Kill la Kill",
    description: "Hyper-expressive, over-the-top designs with extreme angles and vibrant colors that amplify the intensity and rebellious spirit of his shows."
  },
  {
    category: "Anime",
    artistName: "Eiichiro Oda",
    knownFor: "One Piece",
    description: "Whimsical, imaginative world-building combined with detailed character designs and lively, adventurous energy that drive an epic narrative."
  },
  {
    category: "Anime",
    artistName: "CLAMP (collective)",
    knownFor: "Cardcaptor Sakura, Tsubasa: Reservoir Chronicle",
    description: "Delicate, flowing line work with elaborate patterns and graceful character designs that exude both mystery and refined beauty."
  },
  {
    category: "Anime",
    artistName: "Junji Ito",
    knownFor: "Uzumaki, Tomie",
    description: "Intricate, unsettling drawings that mix realistic detail with grotesque, surreal imagery to evoke psychological horror and eerie atmosphere."
  },
  {
    category: "Anime",
    artistName: "Osamu Tezuka",
    knownFor: "Astro Boy, Kimba the White Lion",
    description: "Simple yet expressive designs with warm, approachable characters that laid the foundation for modern anime and manga storytelling."
  },
  {
    category: "Anime",
    artistName: "Naoki Urasawa",
    knownFor: "Monster, 20th Century Boys",
    description: "Detailed, narrative-rich art with a strong sense of realism and deep shading that intensifies suspense and emotional storytelling."
  },
  {
    category: "Anime",
    artistName: "Ken Sugimori",
    knownFor: "Pokémon",
    description: "Distinct, easily recognizable designs with clear line work and appealing simplicity that have become globally iconic in character design."
  },
  {
    category: "Anime",
    artistName: "Tite Kubo",
    knownFor: "Bleach",
    description: "Bold, high-energy art featuring strong lines, dramatic shading, and fluid motion that capture intense action and the spirit of battle."
  },
  {
    category: "Anime",
    artistName: "Shigeru Mizuki",
    knownFor: "GeGeGe no Kitarō",
    description: "Traditional ink drawings with detailed, expressive line work that blend Japanese folklore with a unique, hauntingly charming style."
  },
  {
    category: "Anime",
    artistName: "Kentaro Miura",
    knownFor: "Berserk",
    description: "Exquisitely detailed, atmospheric illustrations with dramatic contrasts and intricate textures that create a visceral, dark fantasy world."
  },
  {
    category: "Anime",
    artistName: "Kiyohiko Azuma",
    knownFor: "Azumanga Daioh",
    description: "Cheerful, approachable art with clean lines and expressive character designs that capture the humor and warmth of everyday school life."
  },
  {
    category: "Anime",
    artistName: "Yoshihiro Togashi",
    knownFor: "Hunter x Hunter, Yu Yu Hakusho",
    description: "Fluid, dynamic artwork that adapts to evolving narratives, balancing detailed character designs with imaginative, action-packed scenes that blend humor and drama."
  },
  
  // Chibi
  {
    category: "Chibi",
    artistName: "Momoko Sakura",
    knownFor: "Chibi Maruko-chan",
    description: "Creator of one of Japan's most beloved chibi manga; her style is simple, endearing, and captures everyday life with a cute, approachable charm."
  },
  {
    category: "Chibi",
    artistName: "Kazuko Shibuya",
    knownFor: "Chibi character art in Final Fantasy games",
    description: "Renowned for her charming pixel art "chibi" designs for the Final Fantasy series, blending nostalgia with playful, miniature proportions."
  },
  {
    category: "Chibi",
    artistName: "CLAMP (collective)",
    knownFor: "Various works with chibi versions (e.g. Cardcaptor Sakura)",
    description: "The famed collective frequently incorporates delicate chibi renditions into their manga, using graceful lines and intricate detail to evoke a dreamy quality."
  },
  {
    category: "Chibi",
    artistName: "Akira Toriyama",
    knownFor: "Dragon Ball merchandise art (chibi renditions)",
    description: "While best known for his full-scale work, his chibi renditions for merchandise are bold, energetic, and full of humor."
  },
  {
    category: "Chibi",
    artistName: "Naoko Takeuchi",
    knownFor: "Sailor Moon chibi merchandise art",
    description: "Apart from her main art, her occasional chibi illustrations for merchandise capture the magical girl spirit with a cute, refined style."
  },
  {
    category: "Chibi",
    artistName: "Eiichiro Oda",
    knownFor: "One Piece special chibi editions",
    description: "Oda's playful chibi versions for special merchandise highlight his imaginative flair with lively expressions and fun exaggerations."
  },
  {
    category: "Chibi",
    artistName: "Adashuoo",
    knownFor: "Freelance chibi illustrator on Fiverr",
    description: "A top-rated freelancer known for creating adorable, finely detailed chibi characters that burst with personality."
  },
  {
    category: "Chibi",
    artistName: "Orangex",
    knownFor: "Freelance chibi artist on Fiverr",
    description: "Delivers charming, instantly lovable chibi designs with clean, endearing lines and expressive faces."
  },
  {
    category: "Chibi",
    artistName: "HoshikariArt",
    knownFor: "Freelance chibi illustrator on Fiverr",
    description: "Offers chibi illustrations that often incorporate rich backgrounds and extra details, elevating the overall composition."
  },
  {
    category: "Chibi",
    artistName: "Chocochino",
    knownFor: "Freelance chibi designer (Fiverr)",
    description: "Known for colorful, energetic, and lively chibi character art that brings a sense of fun and movement."
  },
  {
    category: "Chibi",
    artistName: "Teebster",
    knownFor: "Freelance chibi illustrator",
    description: "Focuses on clean lines and subtle expressions to capture the essence of chibi cuteness with an efficient, streamlined approach."
  },
  {
    category: "Chibi",
    artistName: "Xabyart",
    knownFor: "Freelance chibi artist",
    description: "Produces vibrant and contemporary chibi illustrations with a dynamic visual appeal."
  },
  {
    category: "Chibi",
    artistName: "Luthfiahyn8",
    knownFor: "Freelance chibi illustrator",
    description: "Uses gentle color palettes and cute proportions to create heartwarming chibi art that appeals to fans of "kawaii" aesthetics."
  },
  {
    category: "Chibi",
    artistName: "Pranadipa",
    knownFor: "Freelance chibi designer",
    description: "Known for sharp, clean artwork that gives a modern twist to the traditional chibi style with clear, striking imagery."
  },
  {
    category: "Chibi",
    artistName: "Yai Ari",
    knownFor: "Freelance chibi illustrator",
    description: "Offers refined, intricate chibi designs that capture minute details while remaining irresistibly cute."
  },
  {
    category: "Chibi",
    artistName: "Scarlette.Art",
    knownFor: "Social media chibi artist (Instagram)",
    description: "Creates playful, eye-catching chibi portraits with a unique digital flair and a bright, imaginative color palette."
  },
  {
    category: "Chibi",
    artistName: "DokiDokiChibi",
    knownFor: "Freelance chibi artist (DeviantArt/Twitter)",
    description: "Known for extremely adorable, energetic designs that exemplify the pure charm and exaggerated proportions of the chibi style."
  },
  {
    category: "Chibi",
    artistName: "ChibiExpert",
    knownFor: "Online chibi illustrator",
    description: "Delivers well-crafted, clear chibi designs that put special emphasis on expressive facial features and dynamic simplicity."
  },
  {
    category: "Chibi",
    artistName: "LunaChibiArt",
    knownFor: "Social media chibi artist",
    description: "Uses pastel hues and gentle textures to evoke a whimsical, dreamlike chibi aesthetic that's both soothing and endearing."
  },
  {
    category: "Chibi",
    artistName: "ChibiMiko",
    knownFor: "Freelance chibi illustrator",
    description: "Specializes in bright, fun chibi characters that exude charm through bold colors and cheerful expressions."
  },
  {
    category: "Chibi",
    artistName: "AmaiChibi",
    knownFor: "Online chibi artist",
    description: "Utilizes soft color schemes and exaggerated cute features to produce heartwarming, tender chibi art."
  },
  {
    category: "Chibi",
    artistName: "ChibiSketch",
    knownFor: "Freelance chibi artist",
    description: "Focuses on quick, expressive sketches that capture the playful spirit of chibi art with a charmingly informal style."
  },
  {
    category: "Chibi",
    artistName: "KawaiiChibiArt",
    knownFor: "Online chibi illustrator",
    description: "Creates lively, cheerful chibi art that is instantly engaging, using bold colors and a fun, approachable style."
  },
  {
    category: "Chibi",
    artistName: "ChibiStyleStudio",
    knownFor: "Collective studio specializing in chibi art",
    description: "A group known for producing a range of chibi interpretations, offering diverse styles from ultra-minimal to richly detailed designs."
  },
  {
    category: "Chibi",
    artistName: "ChibiMaster",
    knownFor: "Renowned freelance chibi illustrator",
    description: "Delivers polished, masterful chibi designs that set benchmarks for quality and creativity, often mixing traditional techniques with digital innovation."
  },
  
  // Digital Art
  {
    category: "Digital Art",
    artistName: "Beeple (Mike Winkelmann)",
    knownFor: "Everydays series; NFT art",
    description: "Produces daily digital artworks that blend dystopian imagery with surreal compositions, setting trends in digital art and NFT culture."
  },
  {
    category: "Digital Art",
    artistName: "Artgerm (Stanley Lau)",
    knownFor: "Digital portraits, comic covers",
    description: "Merges comic and traditional aesthetics to create stunning, detailed portraits that often grace magazine covers and merchandise."
  },
  {
    category: "Digital Art",
    artistName: "Greg Rutkowski",
    knownFor: "Fantasy concept art, game/book covers",
    description: "Renowned for epic digital fantasy scenes and dynamic characters that powerfully evoke otherworldly landscapes and action-packed narratives."
  },
  {
    category: "Digital Art",
    artistName: "Ross Tran (Ross Draws)",
    knownFor: "Vibrant character illustrations",
    description: "Blends pop culture influences with expressive, dynamic brushwork to produce playful and eye-catching digital paintings."
  },
  {
    category: "Digital Art",
    artistName: "Loish (Lois van Baarle)",
    knownFor: "Expressive character illustrations",
    description: "Known for her warm palette and fluid lines, creating whimsical, emotionally resonant characters with a hand-drawn feel in digital media."
  },
  {
    category: "Digital Art",
    artistName: "Sakimichan",
    knownFor: "Reimagined pop culture characters",
    description: "Specializes in digital reimaginings of iconic characters, blending realism with fantasy and a glossy finish that is highly appealing in fan art circles."
  },
  {
    category: "Digital Art",
    artistName: "Ilya Kuvshinov",
    knownFor: "Modern digital character design",
    description: "Creates sleek, modern characters with distinctive features and clean lines that have garnered a large following on social media."
  },
  {
    category: "Digital Art",
    artistName: "Kim Jung Gi",
    knownFor: "Masterful freehand drawing (with digital adaptations)",
    description: "Famed for his spontaneous, highly detailed illustrations that seamlessly bridge traditional and digital techniques, celebrated for dynamic compositions."
  },
  {
    category: "Digital Art",
    artistName: "Android Jones",
    knownFor: "Psychedelic, visionary digital art",
    description: "Combines fractal, abstract elements with vivid colors to craft mind-bending, immersive digital compositions that push the boundaries of visual art."
  },
  {
    category: "Digital Art",
    artistName: "James Jean",
    knownFor: "Mixed media and digital illustration",
    description: "Blends traditional painting techniques with digital processes to produce richly detailed, dreamlike works that often evoke layered narratives and symbolism."
  },
  {
    category: "Digital Art",
    artistName: "Vitaly Bulgarov",
    knownFor: "3D concept art for films/games",
    description: "Specializes in mechanical and futuristic design with astonishing detail, contributing to high-profile film and video game projects."
  },
  {
    category: "Digital Art",
    artistName: "Andree Wallin",
    knownFor: "Cinematic digital illustrations",
    description: "Known for creating atmospheric scenes with dynamic compositions and meticulous detail that tell engaging, cinematic stories."
  },
  {
    category: "Digital Art",
    artistName: "Jama Jurabaev",
    knownFor: "Sci-fi digital concept art",
    description: "Creates expansive, imaginative environments and characters that balance realism with fantastical elements, widely used in film and game concept art."
  },
  {
    category: "Digital Art",
    artistName: "Paul Chadeisson",
    knownFor: "Epic sci-fi landscapes",
    description: "Uses sweeping compositions and meticulous detail to depict vast futuristic cityscapes and otherworldly vistas with dramatic lighting."
  },
  {
    category: "Digital Art",
    artistName: "Charlie Bowater",
    knownFor: "Character illustration",
    description: "Blends soft colors with strong line work to produce refined, emotive character designs that captivate audiences across various genres."
  },
  {
    category: "Digital Art",
    artistName: "Feng Zhu",
    knownFor: "Concept art and design education",
    description: "A leading concept artist and mentor, his work spans everything from quick sketches to elaborate digital paintings that illustrate both characters and environments."
  },
  {
    category: "Digital Art",
    artistName: "Maciej Kuciara",
    knownFor: "Futuristic environments",
    description: "Specializes in creating intricate, layered digital environments that convey futuristic and dystopian atmospheres with precision and mood."
  },
  {
    category: "Digital Art",
    artistName: "Peter Mohrbacher",
    knownFor: "\"Angelarium\" series",
    description: "Creates symbolic, otherworldly images that merge surreal elements with spiritual themes, producing works that feel both enigmatic and divine."
  },
  {
    category: "Digital Art",
    artistName: "Craig Mullins",
    knownFor: "Pioneer in digital painting",
    description: "Renowned for his fluid brushwork and innovative techniques, he bridged traditional and digital media with expressive, visually engaging compositions."
  },
  {
    category: "Digital Art",
    artistName: "Syd Mead",
    knownFor: "Futuristic concept art for films",
    description: "His futuristic, meticulously detailed designs have shaped the visual language of sci‑fi films, offering clean, innovative aesthetics with a lasting impact."
  },
  {
    category: "Digital Art",
    artistName: "Scott Robertson",
    knownFor: "Industrial design and concept art",
    description: "Combines strong perspective and detailed renderings to produce clear, technical digital illustrations often used in automotive and architectural design."
  },
  {
    category: "Digital Art",
    artistName: "Sam Yang (samdoesarts)",
    knownFor: "Contemporary digital character art",
    description: "Produces trendy, socially shared illustrations with a blend of realism and cartoon charm, making his work highly popular on social media platforms."
  },
  {
    category: "Digital Art",
    artistName: "Yuumei (Wenqing Yan)",
    knownFor: "Environmental & cyberpunk digital art",
    description: "Focuses on themes of nature, technology, and social commentary with rich, layered digital paintings that evoke both beauty and depth."
  },
  {
    category: "Digital Art",
    artistName: "Cyril Rolando",
    knownFor: "Dreamy, melancholic digital paintings",
    description: "Blends muted tones with delicate textures to create introspective, emotionally charged digital art that invites reflection."
  },
  {
    category: "Digital Art",
    artistName: "Kyle Lambert",
    knownFor: "Realistic digital posters (e.g., Stranger Things)",
    description: "Specializes in photorealistic digital paintings and poster designs, with a strong focus on lighting, texture, and meticulous detail to create impactful visual narratives."
  },
  
  // Digital Art Illustration
  {
    category: "Digital Art Illustration",
    artistName: "Artgerm (Stanley Lau)",
    knownFor: "Digital portraits, comic covers",
    description: "Merges comic and traditional aesthetics to create stunning, highly detailed portraits that are widely used on magazine covers, posters, and merchandise."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Greg Rutkowski",
    knownFor: "Fantasy book covers, game concept art",
    description: "Renowned for epic fantasy scenes, dynamic characters, and vibrant digital paintings that have become a staple in video game and book cover illustration."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Ross Tran (Ross Draws)",
    knownFor: "Character illustrations, YouTube art tutorials",
    description: "Blends pop culture influences with energetic brushwork and bold color choices to produce playful, dynamic character illustrations that captivate audiences."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Loish (Lois van Baarle)",
    knownFor: "Character art and concept illustrations",
    description: "Known for her warm color palettes and fluid, hand‑drawn digital lines that create whimsical and emotive characters with an organic, painterly feel."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Sakimichan",
    knownFor: "Reimagined pop culture characters",
    description: "Specializes in digital re‑interpretations of iconic characters, combining realism with fantasy elements and a glossy finish that has made her work popular online."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Ilya Kuvshinov",
    knownFor: "Modern character design",
    description: "Produces sleek, stylized illustrations with clean lines and soft shading, merging Western sensibilities with Japanese influences for a fresh, contemporary look."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Android Jones",
    knownFor: "Psychedelic, visionary digital art",
    description: "Creates intricate, otherworldly compositions using vibrant color gradients and fractal elements that push the boundaries of digital surrealism."
  },
  {
    category: "Digital Art Illustration",
    artistName: "James Jean",
    knownFor: "Mixed-media digital illustrations",
    description: "Blends fine art techniques with digital processes to produce richly layered, dreamlike works that often incorporate surreal imagery and delicate details."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Charlie Bowater",
    knownFor: "Fantasy and character illustration",
    description: "Known for refined digital paintings that emphasize graceful line work and delicate textures to bring fantastical characters to life with emotional depth."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Feng Zhu",
    knownFor: "Concept art and industrial design",
    description: "A mentor and prolific concept artist whose digital illustrations blend rapid sketches with refined detail, widely influential in film and game development."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Maciej Kuciara",
    knownFor: "Sci‑fi and futuristic environments",
    description: "Specializes in creating layered, atmospheric digital illustrations of futuristic cityscapes and dystopian worlds with a strong sense of depth and realism."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Peter Mohrbacher",
    knownFor: "\"Angelarium\" series",
    description: "Fuses surreal, symbolic imagery with visionary design to produce ethereal illustrations that explore angelic and divine themes in a highly distinctive style."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Craig Mullins",
    knownFor: "Painterly digital landscapes and character art",
    description: "A pioneer in digital painting, blending fluid brushwork and vivid color to create compositions that echo classical painting traditions in a modern digital context."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Sam Yang (samdoesarts)",
    knownFor: "Contemporary digital character art",
    description: "Produces modern, sleek illustrations with a balance of realism and cartoon charm, making his work hugely popular on social media and among contemporary art enthusiasts."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Yuume (Wenqing Yan)",
    knownFor: "Environmental & cyberpunk digital art",
    description: "Focuses on blending nature and technology with rich textures and layered details, creating immersive digital paintings that comment on modern society and environmental themes."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Cyril Rolando",
    knownFor: "Dreamlike, melancholic digital illustrations",
    description: "Known for his subdued palettes and delicate textures, his work evokes a sense of nostalgia and introspection while maintaining a distinctly digital aesthetic."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Kyle Lambert",
    knownFor: "Realistic digital posters (e.g., for film/TV)",
    description: "Specializes in digital paintings with a meticulous focus on lighting and texture, producing poster‐quality illustrations that feel both photographic and artistically rich."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Jama Jurabaev",
    knownFor: "Futuristic concept and environment art",
    description: "Combines imaginative sci‑fi elements with meticulous detail to create dynamic, visionary environments and futuristic compositions often seen in blockbuster film projects."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Andree Wallin",
    knownFor: "Sci‑fi character and scene illustration",
    description: "Known for his use of vibrant lighting and energetic compositions, his digital illustrations capture futuristic, high‑energy scenes with strong visual impact."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Paul Chadeisson",
    knownFor: "Futuristic landscapes and architecture",
    description: "Creates expansive, meticulously rendered digital environments with a focus on dramatic lighting and expansive, visionary cityscapes."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Scott Robertson",
    knownFor: "Industrial design and vehicle illustration",
    description: "Combines strong perspective skills with detailed digital renderings to produce accurate, compelling illustrations of industrial design and futuristic vehicles."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Syd Mead",
    knownFor: "Futuristic concept art for film",
    description: "His iconic digital illustrations of futuristic cities and machines have defined the visual language of science fiction in films, marked by clean lines and imaginative designs."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Sam Spratt",
    knownFor: "Digital realism in advertising and editorial art",
    description: "Produces photorealistic digital paintings with a strong narrative focus, using meticulous detail and dramatic lighting to create striking, high‑impact illustrations."
  },
  {
    category: "Digital Art Illustration",
    artistName: "Alex Ross",
    knownFor: "Comic book realism (digital adaptations)",
    description: "While best known for his traditional paintings, his digital adaptations are equally celebrated for their lifelike, sculptural qualities and epic, classic composition."
  },
  {
    category: "Digital Art Illustration",
    artistName: "WLOP",
    knownFor: "Digital illustration, concept art, and fan art",
    description: "Blends luminous color palettes with delicate digital brushwork to create visually arresting, emotionally evocative illustrations that have resonated widely online."
  },
  
  // Manga
  {
    category: "Manga",
    artistName: "Osamu Tezuka",
    knownFor: "Astro Boy, Kimba the White Lion",
    description: "Innovative, fluid storytelling with expressive, clear lines that laid the foundation for modern manga and influenced generations of creators."
  },
  {
    category: "Manga",
    artistName: "Akira Toriyama",
    knownFor: "Dragon Ball, Dr. Slump",
    description: "Bold, playful illustrations featuring exaggerated features and dynamic action that revolutionized shonen manga."
  },
  {
    category: "Manga",
    artistName: "Rumiko Takahashi",
    knownFor: "InuYasha, Ranma ½",
    description: "Versatile storytelling that combines humor, romance, and action with fluid character designs and highly expressive facial features."
  },
  {
    category: "Manga",
    artistName: "Naoko Takeuchi",
    knownFor: "Sailor Moon",
    description: "Graceful, detailed artwork with a strong emphasis on feminine beauty and transformation, establishing the magical girl genre's aesthetic."
  },
  {
    category: "Manga",
    artistName: "CLAMP",
    knownFor: "Cardcaptor Sakura, Tsubasa: Reservoir Chronicle",
    description: "Intricate, highly stylized art with delicate line work and flowing designs that deliver an ethereal, almost dreamlike quality."
  },
  {
    category: "Manga",
    artistName: "Kentaro Miura",
    knownFor: "Berserk",
    description: "Exceptionally detailed, atmospheric illustrations with intense realism and a haunting, Gothic aesthetic that define dark fantasy storytelling."
  },
  {
    category: "Manga",
    artistName: "Hirohiko Araki",
    knownFor: "JoJo's Bizarre Adventure",
    description: "Bold and expressive art marked by dramatic poses, intricate patterns, and a unique fusion of realism and surrealism that sets a distinct visual signature."
  },
  {
    category: "Manga",
    artistName: "Yoshihiro Togashi",
    knownFor: "Hunter x Hunter, Yu Yu Hakusho",
    description: "Fluid, varied artwork balancing intricate detail with energetic action scenes and deep character expressions to suit diverse narrative tones."
  },
  {
    category: "Manga",
    artistName: "Masashi Kishimoto",
    knownFor: "Naruto",
    description: "Robust character designs and fluid action sequences rendered with strong emphasis on emotion, movement, and clear storytelling in battle scenes."
  },
  {
    category: "Manga",
    artistName: "Tite Kubo",
    knownFor: "Bleach",
    description: "Crisp, high-energy artwork featuring striking character designs and dramatic shading that enhance dynamic fight scenes and supernatural elements."
  },
  {
    category: "Manga",
    artistName: "Eiichiro Oda",
    knownFor: "One Piece",
    description: "Highly imaginative and detailed art that combines playful, adventurous character designs with expansive world-building and quirky humor."
  },
  {
    category: "Manga",
    artistName: "Takehiko Inoue",
    knownFor: "Slam Dunk, Vagabond",
    description: "Masterful use of line and shading that blends realistic detail with dynamic motion, whether in sports or historical narratives."
  },
  {
    category: "Manga",
    artistName: "Gosho Aoyama",
    knownFor: "Detective Conan",
    description: "Crisp, precise artwork with balanced use of line and color that enhances mystery, suspense, and the deductive storytelling inherent in his series."
  },
  {
    category: "Manga",
    artistName: "Naoki Urasawa",
    knownFor: "Monster, 20th Century Boys",
    description: "Subtly detailed illustrations with deep shading and a realistic touch that intensify the suspense and emotional depth of his gripping narratives."
  },
  {
    category: "Manga",
    artistName: "Hiro Mashima",
    knownFor: "Fairy Tail",
    description: "Vibrant and dynamic illustrations with fluid motion and charismatic character designs that blend fantasy, humor, and action seamlessly."
  },
  {
    category: "Manga",
    artistName: "Yuu Watase",
    knownFor: "Fushigi Yûgi",
    description: "Delicate, flowing artwork with ornate details and a dreamy, ethereal quality that accentuates emotional and mythic storytelling."
  },
  {
    category: "Manga",
    artistName: "Akiko Higashimura",
    knownFor: "Kakukaku Shikajika, Tokyo Tarareba Girls",
    description: "Expressive, diary-like drawings capturing everyday life and personal reflections with warmth, wit, and a natural, unpolished charm."
  },
  {
    category: "Manga",
    artistName: "Inio Asano",
    knownFor: "Goodnight Punpun, Solanin",
    description: "Minimalist yet poignant illustrations that evoke raw emotion and capture the complexities of modern life with understated detail."
  },
  {
    category: "Manga",
    artistName: "Kentaro Yabuki",
    knownFor: "Black Cat, Angel Heart",
    description: "Sharp, fluid artwork with a strong focus on action and refined character design that balances dramatic tension with a stylish aesthetic."
  },
  {
    category: "Manga",
    artistName: "Yumi Tamura",
    knownFor: "Basara",
    description: "Lush, dramatic illustrations with rich character expressions and intricate line work that convey powerful, historical narratives with passion."
  },
  {
    category: "Manga",
    artistName: "Goseki Kojima",
    knownFor: "Lone Wolf and Cub",
    description: "Exquisitely detailed, realistic ink illustrations that evoke historical authenticity and heightened drama in period storytelling."
  },
  {
    category: "Manga",
    artistName: "Fujiko F. Fujio",
    knownFor: "Doraemon",
    description: "Clean, charming artwork with a friendly, accessible style that has defined a beloved classic and remains instantly recognizable across generations."
  },
  {
    category: "Manga",
    artistName: "Mitsuru Adachi",
    knownFor: "Touch, Cross Game",
    description: "Gentle, finely detailed pencil work that captures the nuances of youth and everyday emotions in sports and slice-of-life narratives with warmth and subtlety."
  },
  {
    category: "Manga",
    artistName: "Kengo Hanazawa",
    knownFor: "I Am a Hero",
    description: "Detailed, atmospheric illustrations that blend horror and realism with a raw, unpolished aesthetic, enhancing the intensity and bleakness of his work."
  },
  {
    category: "Manga",
    artistName: "Sui Ishida",
    knownFor: "Tokyo Ghoul",
    description: "Striking, high-contrast artwork with intricate detail and a brooding, atmospheric quality that intensifies the psychological and horror elements of the series."
  },
  
  // Vintage Comic
  {
    category: "Vintage Comic",
    artistName: "Jack Kirby",
    knownFor: "Fantastic Four, New Gods",
    description: "Energetic layouts with explosive, muscular figures and cosmic designs that defined the look of modern superhero comics."
  },
  {
    category: "Vintage Comic",
    artistName: "Steve Ditko",
    knownFor: "Spider-Man, Doctor Strange",
    description: "Expressive, detailed line work combined with surreal, imaginative elements that evoke mystery and otherworldly visuals."
  },
  {
    category: "Vintage Comic",
    artistName: "Will Eisner",
    knownFor: "The Spirit, pioneering graphic novels",
    description: "Fluid storytelling with clean, expressive lines that elevated comic art into a respected, mature medium."
  },
  {
    category: "Vintage Comic",
    artistName: "Joe Shuster",
    knownFor: "Co-creator of Superman",
    description: "Simple yet powerful illustrations that helped define the early superhero archetype with clean lines and bold contrasts."
  },
  {
    category: "Vintage Comic",
    artistName: "Curt Swan",
    knownFor: "Iconic Superman depictions",
    description: "Polished, easily recognizable artwork that set the standard for Superman's look during the Silver Age."
  },
  {
    category: "Vintage Comic",
    artistName: "Carmine Infantino",
    knownFor: "The Flash, modernizing DC characters",
    description: "Dynamic compositions with a streamlined, fluid design that refreshed the superhero genre in the 1950s and '60s."
  },
  {
    category: "Vintage Comic",
    artistName: "Gil Kane",
    knownFor: "Green Lantern, Captain Marvel",
    description: "Bold, imaginative work that combined dramatic storytelling with innovative panel layouts and dynamic character poses."
  },
  {
    category: "Vintage Comic",
    artistName: "Alex Raymond",
    knownFor: "Flash Gordon, Jungle Jim",
    description: "Lush, realistic line work with a strong sense of adventure and a refined, classic aesthetic that influenced many later comic and cartoon artists."
  },
  {
    category: "Vintage Comic",
    artistName: "Hal Foster",
    knownFor: "Prince Valiant",
    description: "Rich, meticulously detailed artwork with graceful lines that created timeless, epic narratives in a historical setting."
  },
  {
    category: "Vintage Comic",
    artistName: "Milton Caniff",
    knownFor: "Terry and the Pirates, Steve Canyon",
    description: "Iconic, cinematic illustrations with strong storytelling, realistic detail, and a distinct sense of adventure."
  },
  {
    category: "Vintage Comic",
    artistName: "Joe Kubert",
    knownFor: "Sgt. Rock, Hawkman",
    description: "Powerful, emotionally charged artwork with rugged line work and dynamic compositions that brought war and adventure stories to life."
  },
  {
    category: "Vintage Comic",
    artistName: "Wally Wood",
    knownFor: "EC Comics, Mad Magazine covers",
    description: "Highly detailed, energetic art known for its striking contrasts and innovative use of shading, influential in both humor and horror comics."
  },
  {
    category: "Vintage Comic",
    artistName: "Russ Manning",
    knownFor: "Magnus, Robot Fighter",
    description: "Crisp, smooth illustrations that combined a sense of futuristic adventure with an approachable, classic comic book style."
  },
  {
    category: "Vintage Comic",
    artistName: "Reed Crandall",
    knownFor: "Captain Marvel, Daredevil (Golden Age)",
    description: "Sharp, clean line work and a masterful grasp of anatomy that set a high standard for superhero and adventure comic art."
  },
  {
    category: "Vintage Comic",
    artistName: "Gene Colan",
    knownFor: "The Tomb of Dracula, Daredevil",
    description: "Smooth, elegant illustrations with a distinctive use of shadow and subtle detail that lend a haunting, moody quality to his work."
  },
  {
    category: "Vintage Comic",
    artistName: "Al Williamson",
    knownFor: "EC Comics, Fables",
    description: "Intricate, meticulously rendered artwork with a painterly quality that brought a sense of realism and depth to adventure and fantasy tales."
  },
  {
    category: "Vintage Comic",
    artistName: "Murphy Anderson",
    knownFor: "DC Comics (Green Lantern, Hawkman)",
    description: "Clean, highly detailed art that captures subtle expressions and dynamic action, influencing generations of comic artists with his technical precision."
  },
  {
    category: "Vintage Comic",
    artistName: "Joe Simon",
    knownFor: "Co-creator of Captain America",
    description: "Pioneering work characterized by strong, robust figures and a straightforward style that helped shape the early superhero genre."
  },
  {
    category: "Vintage Comic",
    artistName: "Frank Frazetta",
    knownFor: "Fantasy and pulp comics (contributed to comics)",
    description: "Iconic, visceral illustrations full of dynamic energy and rich textures, whose influence extends across comics, fantasy art, and film."
  },
  {
    category: "Vintage Comic",
    artistName: "Neal Adams",
    knownFor: "Batman, Green Lantern/Green Arrow",
    description: "Detailed, anatomically accurate artwork that redefined superhero visuals with dynamic compositions and a more realistic approach during the Silver Age."
  },
  {
    category: "Vintage Comic",
    artistName: "John Romita Sr.",
    knownFor: "Spider-Man",
    description: "Polished, dynamic illustrations that captured the charm and energy of Spider-Man, helping define the Marvel style of the 1960s."
  },
  {
    category: "Vintage Comic",
    artistName: "Syd Shores",
    knownFor: "Golden Age Captain America",
    description: "Bold, solid artwork with strong character presence that became a benchmark for superhero art during the early years of comics."
  },
  {
    category: "Vintage Comic",
    artistName: "Jack Cole",
    knownFor: "Plastic Man",
    description: "Highly imaginative, humorous art noted for its fluidity and innovative use of perspective, setting a playful tone in Golden Age comics."
  },
  {
    category: "Vintage Comic",
    artistName: "C.C. Beck",
    knownFor: "Captain Marvel (Shazam)",
    description: "Clean, dynamic illustrations that captured the excitement and wonder of early superhero comics with a timeless, approachable style."
  },
  {
    category: "Vintage Comic",
    artistName: "Alex Toth",
    knownFor: "Influential comic strip artist, Animal Man covers",
    description: "Known for his economical, expressive line work and innovative panel design that influenced a generation of comic book and animation artists."
  },
  
  // Modern Comic
  {
    category: "Modern Comic",
    artistName: "Genndy Tartakovsky",
    knownFor: "Samurai Jack, Dexter's Laboratory",
    description: "Bold, silhouette-driven designs with fluid motion and cinematic pacing that define epic action in modern animation."
  },
  {
    category: "Modern Comic",
    artistName: "Craig McCracken",
    knownFor: "The Powerpuff Girls, Foster's Home for Imaginary Friends",
    description: "Clean lines and exaggerated cute characters that create playful, imaginative worlds with an instantly recognizable style."
  },
  {
    category: "Modern Comic",
    artistName: "Bruce Timm",
    knownFor: "Batman: The Animated Series",
    description: "Simplified, art deco–inspired designs with strong silhouettes that revolutionized superhero animation for a new generation."
  },
  {
    category: "Modern Comic",
    artistName: "Pendleton Ward",
    knownFor: "Adventure Time",
    description: "Loose, spontaneous line work paired with vibrant, dreamlike colors that blend humor with whimsical storytelling."
  },
  {
    category: "Modern Comic",
    artistName: "Rebecca Sugar",
    knownFor: "Steven Universe",
    description: "Pastel-hued, emotionally resonant character designs that promote inclusivity and gentle storytelling through fluid, inviting illustrations."
  },
  {
    category: "Modern Comic",
    artistName: "Lauren Faust",
    knownFor: "My Little Pony: Friendship is Magic",
    description: "Stylized, friendly designs with bright, harmonious colors that evoke positivity, friendship, and playful adventure."
  },
  {
    category: "Modern Comic",
    artistName: "Jhonen Vasquez",
    knownFor: "Invader Zim",
    description: "Angular, detailed drawings that mix surreal humor with an alternative, offbeat aesthetic to create an instantly recognizable style."
  },
  {
    category: "Modern Comic",
    artistName: "J.G. Quintel",
    knownFor: "Regular Show",
    description: "Casual, sketch-like designs capturing the absurdity of everyday life with spontaneity and humor."
  },
  {
    category: "Modern Comic",
    artistName: "Justin Roiland",
    knownFor: "Rick and Morty",
    description: "Energetic, rough-edged illustrations paired with surreal cosmic imagery that enhance the show's unpredictable, satirical humor."
  },
  {
    category: "Modern Comic",
    artistName: "Matt Groening",
    knownFor: "The Simpsons, Futurama",
    description: "Simple, exaggerated characters and humorous, social commentary that have helped shape modern animated satire."
  },
  {
    category: "Modern Comic",
    artistName: "Mike Judge",
    knownFor: "Beavis and Butt-Head, King of the Hill",
    description: "Raw, expressive character designs that capture the countercultural humor and suburban satire of contemporary life."
  },
  {
    category: "Modern Comic",
    artistName: "Seth MacFarlane",
    knownFor: "Family Guy, American Dad!",
    description: "Classic cartoon aesthetics paired with biting humor and expressive, well-defined characters that deliver modern social commentary."
  },
  {
    category: "Modern Comic",
    artistName: "Alex Hirsch",
    knownFor: "Gravity Falls",
    description: "Hand-drawn, detailed designs with nostalgic nods and hidden easter eggs that invite viewers to explore layers of narrative and mystery."
  },
  {
    category: "Modern Comic",
    artistName: "Noelle Stevenson",
    knownFor: "She-Ra and the Princesses of Power, Nimona",
    description: "Fluid, dynamic illustrations that merge sharp lines with vibrant colors to convey humor, heart, and progressive storytelling."
  },
  {
    category: "Modern Comic",
    artistName: "Raina Telgemeier",
    knownFor: "Smile, Drama",
    description: "Accessible, vibrant illustrations that capture the emotional landscape of youth with a modern graphic novel sensibility."
  },
  {
    category: "Modern Comic",
    artistName: "Lynda Barry",
    knownFor: "Ernie Pook's Comeek",
    description: "Sketchy, freeform drawings that convey the chaos and beauty of everyday life with raw, honest expression and a personal touch."
  },
  {
    category: "Modern Comic",
    artistName: "Aaron McGruder",
    knownFor: "The Boondocks",
    description: "Sharp, expressive illustrations that mix social commentary with dynamic exaggeration, reflecting modern cultural and political satire."
  },
  {
    category: "Modern Comic",
    artistName: "Zach Weinersmith",
    knownFor: "Saturday Morning Breakfast Cereal",
    description: "Simple yet witty single-panel cartoons blending science, philosophy, and humor in an accessible, understated style."
  },
  {
    category: "Modern Comic",
    artistName: "Sarah Andersen",
    knownFor: "Sarah's Scribbles",
    description: "Quirky, hand-drawn cartoons that humorously capture the everyday trials of adult life with a casual, self-deprecating tone."
  },
  {
    category: "Modern Comic",
    artistName: "Tom Gauld",
    knownFor: "(Newspaper cartoons, The Guardian)",
    description: "Economical line art and dry humor that use minimalist compositions to create clever, thought-provoking cartoons."
  },
  {
    category: "Modern Comic",
    artistName: "Roz Chast",
    knownFor: "New Yorker cartoons",
    description: "Densely inked, offbeat illustrations that offer satirical, observational commentary on modern life with a uniquely personal style."
  },
  {
    category: "Modern Comic",
    artistName: "Adrian Tomine",
    knownFor: "Graphic novels & comic strips",
    description: "Clean, elegant line art with subtle humor and understated aesthetics that emphasize clarity and modern simplicity."
  },
  {
    category: "Modern Comic",
    artistName: "Kate Beaton",
    knownFor: "Hark! A Vagrant",
    description: "Sharp, historically informed drawings filled with playful references and clever humor that have redefined webcomic storytelling."
  },
  {
    category: "Modern Comic",
    artistName: "Randall Munroe",
    knownFor: "xkcd",
    description: "Simple, abstract illustrations paired with insightful, humorous commentary on science and life in a uniquely minimal, intellectual format."
  },
  {
    category: "Modern Comic",
    artistName: "David Malki",
    knownFor: "Wondermark",
    description: "A unique blend of vintage imagery and modern wit, using a collage approach to craft humorous, nostalgia‑laden narratives that resonate with contemporary audiences."
  },
  
  // Ukiyo-e
  {
    category: "Ukiyo-e",
    artistName: "Hishikawa Moronobu",
    knownFor: "Early ukiyo‑e prints",
    description: "Considered the first master of ukiyo‑e, his work includes landscapes, actor portraits, and daily life scenes that laid the groundwork for the genre."
  },
  {
    category: "Ukiyo-e",
    artistName: "Katsushika Hokusai",
    knownFor: "The Great Wave off Kanagawa",
    description: "Master artist whose dynamic compositions and intricate detail revolutionized Japanese art and profoundly influenced Western aesthetics."
  },
  {
    category: "Ukiyo-e",
    artistName: "Utagawa Hiroshige",
    knownFor: "The Fifty-three Stations of the Tōkaidō",
    description: "Renowned for atmospheric landscape prints that capture seasonal change and weather conditions with poetic sensibility and subtle color gradations."
  },
  {
    category: "Ukiyo-e",
    artistName: "Kitagawa Utamaro",
    knownFor: "Studies of women's faces and forms",
    description: "Celebrated for his sensitive, refined portrayals of women that reveal emotional depth through subtle expressions and graceful composition."
  },
  {
    category: "Ukiyo-e",
    artistName: "Tōshūsai Sharaku",
    knownFor: "Actor portraits",
    description: "Created boldly expressive actor portraits during a brief but brilliant career, with exaggerated features and psychological intensity that proved revolutionary."
  },
  {
    category: "Ukiyo-e",
    artistName: "Suzuki Harunobu",
    knownFor: "Pioneer of full-color printing (nishiki-e)",
    description: "Innovator who introduced full-color printing to ukiyo-e, known for delicate, lyrical scenes of everyday life with graceful figures and poetic sensibility."
  },
  {
    category: "Ukiyo-e",
    artistName: "Katsukawa Shunshō",
    knownFor: "Kabuki actor portraits",
    description: "Master of actor portraits who captured individual likenesses and personalities rather than stylized types, blending realism with theatrical tradition."
  },
  {
    category: "Ukiyo-e",
    artistName: "Utagawa Kuniyoshi",
    knownFor: "Warrior prints and supernatural themes",
    description: "Dynamic artist renowned for dramatic warrior scenes, ghostly apparitions and imaginative compositions filled with energy and fantastical elements."
  },
  {
    category: "Ukiyo-e",
    artistName: "Utagawa Kunisada",
    knownFor: "Actor prints, book illustrations",
    description: "Prolific artist whose vibrant actor portraits and illustrations dominated the market with their technical brilliance and popular appeal."
  },
  {
    category: "Ukiyo-e",
    artistName: "Keisai Eisen",
    knownFor: "Bijin-ga (beautiful women) prints",
    description: "Specialized in sensual portraits of courtesans and beauties with a distinctive style that balanced elegance with accessibility."
  },
  {
    category: "Ukiyo-e",
    artistName: "Katsukawa Shunkō",
    knownFor: "Kabuki actor prints",
    description: "Refined portraitist of Kabuki actors who captured distinctive theatrical poses and expressions with technical precision."
  },
  {
    category: "Ukiyo-e",
    artistName: "Torii Kiyonaga",
    knownFor: "Elegant bijin-ga (beautiful women)",
    description: "Created compositions featuring tall, elegant beauties in harmonious groups, noted for spatial depth and classical balance."
  },
  {
    category: "Ukiyo-e",
    artistName: "Ippitsusai Bunchō",
    knownFor: "Actor portraits",
    description: "Distinguished for his unique actor portraits with a sense of momentary action and individuality that broke with conventional approaches."
  },
  {
    category: "Ukiyo-e",
    artistName: "Torii Kiyomitsu",
    knownFor: "Actor prints, theatrical imagery",
    description: "Carried forward the bold Torii school style, specializing in theatrical imagery with strong outlines and dramatic presentation."
  },
  {
    category: "Ukiyo-e",
    artistName: "Torii Kiyomasu",
    knownFor: "Bold actor prints",
    description: "Early master of the Torii school known for powerful, assertive actor portraits with strong lines and commanding presence."
  },
  {
    category: "Ukiyo-e",
    artistName: "Isoda Koryūsai",
    knownFor: "Courtesan portraits, bird-and-flower prints",
    description: "Versatile artist who created refined beauties and delicate nature studies with meticulous detail and elegant composition."
  },
  {
    category: "Ukiyo-e",
    artistName: "Tsukioka Yoshitoshi",
    knownFor: "Dramatic historical and supernatural subjects",
    description: "Last great master of traditional ukiyo-e whose intense, sometimes violent imagery and psychological depth bridged old and new Japanese art."
  },
  {
    category: "Ukiyo-e",
    artistName: "Utagawa Toyokuni",
    knownFor: "Actor portraits, founder of Utagawa school",
    description: "Influential artist whose actor portraits established a style that would dominate 19th century ukiyo-e through his many students."
  },
  {
    category: "Ukiyo-e",
    artistName: "Okumura Masanobu",
    knownFor: "Innovation in perspective, theatrical scenes",
    description: "Pioneering artist and publisher who experimented with Western perspective and helped establish many conventions of ukiyo-e style."
  },
  {
    category: "Ukiyo-e",
    artistName: "Utagawa Toyoharu",
    knownFor: "Perspective prints (uki-e)",
    description: "Founder of the influential Utagawa school who specialized in perspective views incorporating Western techniques into Japanese aesthetics."
  },
  {
    category: "Ukiyo-e",
    artistName: "Totoya Hokkei",
    knownFor: "Surimono (privately commissioned prints)",
    description: "Master of luxury privately commissioned prints featuring intricate detail, sophisticated poetry, and refined technique."
  },
  {
    category: "Ukiyo-e",
    artistName: "Kubo Shunman",
    knownFor: "Surimono, poetry-inspired works",
    description: "Versatile artist renowned for elegant surimono with literary themes, featuring meticulous craftsmanship and poetic sensibility."
  },
  {
    category: "Ukiyo-e",
    artistName: "Katsuara Ritsuzan",
    knownFor: "Bird-and-flower subjects",
    description: "Specialized in finely detailed nature studies with scientific accuracy balanced with aesthetic sensitivity."
  },
  {
    category: "Ukiyo-e",
    artistName: "Yanagawa Shigenobu",
    knownFor: "Book illustrations, landscape prints",
    description: "Versatile artist known for book illustrations and landscape series that combined classical elegance with realistic observation."
  },
  {
    category: "Ukiyo-e",
    artistName: "Kawanabe Kyōsai",
    knownFor: "Satirical, humorous works",
    description: "Eccentric later ukiyo-e master whose works range from comical scenes and political satire to ghostly apparitions with unrestrained energy."
  },
  
  // Graphic Novel
  {
    category: "Graphic Novel",
    artistName: "Art Spiegelman",
    knownFor: "Maus",
    description: "Groundbreaking use of anthropomorphic characters to retell historical trauma with raw emotion and layered storytelling."
  },
  {
    category: "Graphic Novel",
    artistName: "Marjane Satrapi",
    knownFor: "Persepolis",
    description: "Stark black-and-white illustrations that combine memoir with political commentary, using simplicity to convey complex personal and historical themes."
  },
  {
    category: "Graphic Novel",
    artistName: "Chris Ware",
    knownFor: "Jimmy Corrigan, Acme Novelty Library",
    description: "Highly detailed, structured compositions that evoke nostalgia and introspection through precise line work and innovative page layouts."
  },
  {
    category: "Graphic Novel",
    artistName: "Daniel Clowes",
    knownFor: "Ghost World",
    description: "Understated, observant illustrations that blend social commentary with dry humor to capture the quirks of contemporary youth."
  },
  {
    category: "Graphic Novel",
    artistName: "Charles Burns",
    knownFor: "Black Hole",
    description: "Intricately detailed images that merge realistic rendering with unsettling surreal elements, creating a haunting atmosphere."
  },
  {
    category: "Graphic Novel",
    artistName: "Craig Thompson",
    knownFor: "Blankets",
    description: "Delicate, emotionally resonant illustrations that use soft lines and rich textures to explore personal and intimate narratives."
  },
  {
    category: "Graphic Novel",
    artistName: "Alison Bechdel",
    knownFor: "Fun Home",
    description: "Refined, autobiographical drawings that merge memoir and artful composition, revealing nuanced family dynamics and personal growth."
  },
  {
    category: "Graphic Novel",
    artistName: "Seth",
    knownFor: "It's a Good Life, If You Don't Weep",
    description: "Minimalist, playful illustrations that balance humor with poignant insight, marked by crisp lines and understated detail."
  },
  {
    category: "Graphic Novel",
    artistName: "Frank Miller",
    knownFor: "Sin City, 300",
    description: "Bold, graphic imagery with dramatic contrasts and angular compositions that deliver cinematic, noir-inspired narratives."
  },
  {
    category: "Graphic Novel",
    artistName: "David Mazzucchelli",
    knownFor: "Batman: Year One, Asterios Polyp",
    description: "Fuses realistic rendering with dynamic storytelling, known for intricate shading and evocative compositions that deepen character and narrative tone."
  },
  {
    category: "Graphic Novel",
    artistName: "Jaime Hernandez",
    knownFor: "Love and Rockets",
    description: "Painterly, emotionally charged artwork that blends realistic figures with raw, expressive energy to explore personal and cultural themes."
  },
  {
    category: "Graphic Novel",
    artistName: "Raina Telgemeier",
    knownFor: "Smile, Drama",
    description: "Bright, engaging illustrations that capture the humor and trials of youth with a modern, relatable graphic style."
  },
  {
    category: "Graphic Novel",
    artistName: "Jeff Lemire",
    knownFor: "Essex County, Sweet Tooth",
    description: "Textured, muted color palettes and fluid lines evoke deep emotional resonance and introspective storytelling in everyday life."
  },
  {
    category: "Graphic Novel",
    artistName: "Kazu Kibuishi",
    knownFor: "Amulet series",
    description: "Clean, energetic character designs and vibrant color schemes create immersive, adventurous fantasy worlds for young readers."
  },
  {
    category: "Graphic Novel",
    artistName: "Joe Sacco",
    knownFor: "Palestine, Safe Area Goražde",
    description: "Combines investigative journalism with artful, finely rendered illustrations to document real-world events and human stories with depth and nuance."
  },
  {
    category: "Graphic Novel",
    artistName: "Jiro Taniguchi",
    knownFor: "A Distant Neighborhood, The Times of Botchan",
    description: "Refined, realistic depictions infused with gentle, contemplative detail that capture the beauty and melancholy of everyday life."
  },
  {
    category: "Graphic Novel",
    artistName: "Milo Manara",
    knownFor: "Erotic graphic novels",
    description: "Lush, detailed, and provocative illustrations that emphasize the beauty of form and movement, merging artistic elegance with erotic storytelling."
  },
  {
    category: "Graphic Novel",
    artistName: "Shaun Tan",
    knownFor: "The Arrival",
    description: "Surreal, richly textured images that evoke wonder and melancholy, blending traditional storytelling with imaginative, otherworldly landscapes."
  },
  {
    category: "Graphic Novel",
    artistName: "Bryan Lee O'Malley",
    knownFor: "Scott Pilgrim",
    description: "Quirky, dynamic artwork that combines comic book action with charming, offbeat character designs and humorous narrative twists."
  },
  {
    category: "Graphic Novel",
    artistName: "Adrian Tomine",
    knownFor: "Optic Nerve, Shortcomings",
    description: "Clean, refined line work and subtle details capture everyday life and emotional nuances with understated elegance and modern clarity."
  },
  {
    category: "Graphic Novel",
    artistName: "Jillian Tamaki",
    knownFor: "This One Summer, SuperMutant Magic Academy",
    description: "Dynamic, fluid illustrations that blend bold colors with delicate lines to convey the energy and subtleties of youth in modern settings."
  },
  {
    category: "Graphic Novel",
    artistName: "Fábio Moon & Gabriel Bá",
    knownFor: "Daytripper",
    description: "Collaborative work that merges lyrical storytelling with painterly, innovative digital illustrations to explore the transient moments of life."
  },
  {
    category: "Graphic Novel",
    artistName: "Noelle Stevenson",
    knownFor: "Nimona",
    description: "Combines quirky humor and dynamic, expressive character designs to create engaging and modern graphic narratives that challenge conventional norms."
  },
  {
    category: "Graphic Novel",
    artistName: "Jim Woodring",
    knownFor: "Frank",
    description: "Bizarre, imaginative illustrations that traverse a fantastical, often abstract world, evoking a sense of mystery and introspection."
  },
  {
    category: "Graphic Novel",
    artistName: "R. Crumb",
    knownFor: "Underground classics",
    description: "Seminal underground artist whose gritty, unfiltered style and distinctive line work have left a lasting impact on alternative and counterculture graphic storytelling."
  },
  
  // Cel-Shaded Artist
  {
    category: "Cel-Shaded Artist",
    artistName: "Shigenori Soejima",
    knownFor: "Persona series",
    description: "Uses clear, strong outlines and flat color regions to create a distinctive look that translates well into cel‑shaded visuals in modern Japanese RPGs."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Tetsuya Nomura",
    knownFor: "Final Fantasy, Kingdom Hearts",
    description: "Known for dynamic character designs with crisp line work and graphic color blocking that lend themselves to cel‑shaded adaptations in games and animation."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Akihiko Yoshida",
    knownFor: "Final Fantasy Tactics, Bravely Default",
    description: "His delicate line work and subtle use of flat colors create a timeless aesthetic that is often emulated in cel‑shaded adaptations of his work."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Kazuma Kaneko",
    knownFor: "Shin Megami Tensei series",
    description: "Combines dark, graphic character designs with sharp, clean outlines—ideal for a cel‑shaded look in video game art."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Katsuya Terada",
    knownFor: "Various character design projects",
    description: "Versatile in style, his work often features clear line art and vibrant color blocks reminiscent of cel‑shading techniques."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Shunya Yamashita",
    knownFor: "Character pin-ups and promotional art",
    description: "His highly stylized illustrations for merchandise use saturated, flat colors with defined contours that closely resemble a cel‑shaded finish."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Yusuke Murata",
    knownFor: "One Punch Man (adapted for animation)",
    description: "While known for detailed action, his animated adaptations use cel‑shading techniques for bold, expressive visuals."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Akira Toriyama",
    knownFor: "Dragon Ball, Dr. Slump",
    description: "His classic, strong line work and solid color fills have been widely emulated in cel‑shaded video game adaptations and merchandise."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Naoko Takeuchi",
    knownFor: "Sailor Moon",
    description: "Character designs rendered with smooth, flat areas and clear contours—ideal for the cel‑shaded aesthetic seen in many animated adaptations."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Artgerm (Stanley Lau)",
    knownFor: "Digital portraits and comic covers",
    description: "Creates highly refined, digitally rendered illustrations with crisp edges and seamless color transitions that mimic a cel‑shaded appearance."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Loish (Lois van Baarle)",
    knownFor: "Character illustrations",
    description: "Uses clean, flowing lines with bold, flat color areas that give her work a contemporary digital look similar to cel‑shading."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Ilya Kuvshinov",
    knownFor: "Digital character design",
    description: "Recognized for streamlined, vibrant illustrations with crisp contours and uniform color blocks that evoke a cel‑shaded style."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Ross Tran (Ross Draws)",
    knownFor: "Pop culture character art",
    description: "His energetic, digitally rendered illustrations use bold color blocking and clear outlines reminiscent of cel‑shading, infused with playful flair."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Sam Yang (samdoesarts)",
    knownFor: "Contemporary digital illustrations",
    description: "Produces trendy, streamlined art with solid color regions and defined line work that exemplify a modern cel‑shaded look."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Feng Zhu",
    knownFor: "Game and film concept art",
    description: "While primarily painterly, many of his rapid concept sketches incorporate flat color areas and clean outlines, echoing a cel‑shaded aesthetic."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Sparth (Nicola West)",
    knownFor: "Futuristic concept art",
    description: "Known for his clean, architectural style with smooth gradients and flat color zones that closely mimic cel‑shading techniques in digital design."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Maciej Kuciara",
    knownFor: "Video game concept art",
    description: "Creates futuristic designs with bold, defined shapes and flat lighting effects that lend themselves well to a cel‑shaded look."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Paul Chadeisson",
    knownFor: "Sci‑fi environments",
    description: "Uses strong, defined shapes and flat color blocks in his futuristic landscapes, evoking the crisp look of cel‑shading in digital illustration."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Beeple (Mike Winkelmann)",
    knownFor: "Daily digital artworks, NFT art",
    description: "Produces a wide range of digital works—many of which feature strong graphic elements, clear outlines, and flat color transitions reminiscent of cel‑shaded imagery."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Jama Jurabaev",
    knownFor: "Game concept art, character design",
    description: "Blends intricate detail with bold, flat color sections to achieve a vibrant style that often mirrors cel‑shading in game visual development."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Greg Rutkowski",
    knownFor: "Fantasy concept art",
    description: "Although renowned for detailed fantasy scenes, many of his compositions incorporate bold flat color areas that evoke the feel of cel‑shading in certain pieces."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Kyle Lambert",
    knownFor: "Digital posters (e.g., for film/TV)",
    description: "His work often features precise, clear accents and defined color blocks that echo the crisp aesthetics of cel‑shading in high‑impact poster art."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Peter Mohrbacher",
    knownFor: "\"Angelarium\" series",
    description: "Combines symbolic imagery with bold, flat color schemes and clear outlines, creating a visionary, cel‑shaded feel in his ethereal digital compositions."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "Sam Spratt",
    knownFor: "Editorial digital art, posters",
    description: "Known for photorealistic work that often incorporates sharp, flat color accents, merging detailed realism with elements of cel‑shading for striking visuals."
  },
  {
    category: "Cel-Shaded Artist",
    artistName: "WLOP",
    knownFor: "Digital illustration and concept art",
    description: "Blends luminous colors with defined digital brushwork to produce illustrations that feature flat, vibrant areas reminiscent of cel‑shading within an atmospheric context."
  },
  
  // Sci-Fi Illustrations
  {
    category: "Sci-Fi Illustrations",
    artistName: "Frank R. Paul",
    knownFor: "Pioneering pulp sci‑fi covers (Amazing Stories)",
    description: "A trailblazer whose vibrant, imaginative covers set the tone for early sci‑fi, inspiring generations of readers with dynamic, futuristic imagery."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Chesley Bonestell",
    knownFor: "Space art, extraterrestrial landscapes",
    description: "Known as the father of space art, his meticulously detailed paintings brought celestial vistas and alien worlds to life, influencing space exploration imagery."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Virgil Finlay",
    knownFor: "Intricate pen‑and‑ink illustrations",
    description: "Master of cross‑hatching and fine detail, his richly textured work graced the pages of pulp magazines and set a high standard for sci‑fi illustration."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Chris Foss",
    knownFor: "Iconic spaceship and futuristic vehicle designs",
    description: "Renowned for his hyper‑detailed, vividly colored spacecraft and machinery that epitomize retro‑futuristic aesthetics and advanced technology."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Moebius (Jean Giraud)",
    knownFor: "Surreal, dreamlike comic and concept art",
    description: "A visionary whose fluid line work and imaginative worlds have influenced films, comics, and sci‑fi aesthetics with his unique, otherworldly style."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "H.R. Giger",
    knownFor: "Biomechanical, dark, surreal imagery",
    description: "Best known for designing the xenomorph in "Alien," his disturbing, fusion‑of-organic-and-machine visuals redefined the look of sci‑fi horror."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "John Berkey",
    knownFor: "Cosmic vistas, space battles",
    description: "His sweeping depictions of interstellar conflicts and futuristic scenes offer a grand, cinematic vision of space that continues to captivate sci‑fi fans."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Richard M. Powers",
    knownFor: "Abstract, collage‑inspired book covers",
    description: "With an innovative blend of surrealism and abstraction, his covers evoke dream‑like states that invite readers into the inner landscapes of science fiction."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Michael Whelan",
    knownFor: "Award‑winning book covers (Asimov, King)",
    description: "A titan of sci‑fi illustration, his richly rendered, emotionally resonant works have graced countless book covers and shaped modern genre aesthetics."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Wayne Barlowe",
    knownFor: "Alien creature designs",
    description: "Specializing in hyper‑realistic depictions of alien life, his scientifically inspired illustrations bring believable, bizarre extraterrestrial beings to life."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Frank Kelly Freas",
    knownFor: "Dynamic covers for pulp and magazines",
    description: "A prolific artist whose kinetic, expressive style defined the look of pulp sci‑fi, capturing the energy and drama of futuristic adventures."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Paul Lehr",
    knownFor: "Dreamlike, mystical compositions",
    description: "Celebrated for his use of rich, vibrant colors and surreal imagery, Lehr's work exudes an almost spiritual quality that elevates sci‑fi book covers."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "John Harris",
    knownFor: "Futuristic cityscapes and vast alien landscapes",
    description: "His luminous, expansive paintings create a sense of wonder and isolation, inviting viewers into meticulously rendered, futuristic worlds."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Syd Mead",
    knownFor: "\"Used future\" designs (Blade Runner, Tron)",
    description: "A design visionary whose work on films like Blade Runner defined a gritty, realistic future with industrial detail and striking architectural forms."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Chris Moore",
    knownFor: "Modern sci‑fi book covers and concept art",
    description: "His dynamic, painterly works fuse traditional techniques with modern digital methods to produce covers that capture the grand scale of sci‑fi narratives."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Boris Vallejo",
    knownFor: "Hyper‑realistic, muscular figures in sci‑fi/fantasy",
    description: "Known for his stunning, photo‑realistic depictions of heroes and monsters, Vallejo's work bridges the realms of science fiction and fantasy with visceral impact."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Peter Elson",
    knownFor: "British sci‑fi cover art",
    description: "His precise, finely detailed illustrations bring a polished, futuristic look to classic science fiction book covers, emphasizing technical accuracy and wonder."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Roger Dean",
    knownFor: "Surreal landscapes and organic architecture",
    description: "Famed for his fantastical, flowing designs and otherworldly landscapes, his work creates immersive, organic environments that have influenced album covers and sci‑fi art."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Greg Hildebrandt",
    knownFor: "Iconic fantasy and sci‑fi illustrations (with his brother)",
    description: "One half of the Hildebrandt duo, his work on book covers and posters combines bold colors with detailed figures that remain influential in genre art."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Tim Hildebrandt",
    knownFor: "Fantasy and sci‑fi art (with his brother)",
    description: "Alongside Greg, his expressive, intricately detailed illustrations have become synonymous with classic genre imagery and memorable visual storytelling."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Jim Burns",
    knownFor: "Retro‑futuristic and textured sci‑fi art",
    description: "His intricate, atmospheric illustrations often feature rich textures and nostalgic visions of space that evoke both the past and future of sci‑fi."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Vincent Di Fate",
    knownFor: "Prolific sci‑fi cover art",
    description: "A leading cover artist known for his bold compositions and sweeping, dramatic depictions of futuristic themes and space exploration."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Ken Barr",
    knownFor: "Movie posters and sci‑fi book covers",
    description: "Recognized for his strong, graphic style and technical precision, his illustrations blend dynamic composition with futuristic elements that define sci‑fi aesthetics."
  },
  {
    category: "Sci-Fi Illustrations",
    artistName: "Rodney Matthews",
    knownFor: "Psychedelic, intricate sci‑fi/fantasy landscapes",
    description: "Known for his ornate, otherworldly designs and elaborate details, his work transports viewers to surreal, fantastical realms where technology and nature collide."
  },
  
  // Videogame Artists
  {
    category: "Videogame Artists",
    artistName: "Yoshitaka Amano",
    knownFor: "Final Fantasy, Vampire Hunter D",
    description: "Elegant and otherworldly illustrations with delicate line work and intricate detail that have long set the mood for fantasy and sci‑fi games."
  },
  {
    category: "Videogame Artists",
    artistName: "Yoji Shinkawa",
    knownFor: "Metal Gear series, Death Stranding",
    description: "Signature brush‑stroke style with ink‑like, sweeping lines that capture movement and a futuristic, almost calligraphic quality."
  },
  {
    category: "Videogame Artists",
    artistName: "Tetsuya Nomura",
    knownFor: "Final Fantasy series, Kingdom Hearts",
    description: "Modern and energetic designs featuring striking characters with a contemporary edge and dynamic compositions."
  },
  {
    category: "Videogame Artists",
    artistName: "Akihiko Yoshida",
    knownFor: "Final Fantasy Tactics, Vagrant Story, Bravely Default",
    description: "Delicate line art and restrained palettes create atmospheric, elegantly detailed visuals that emphasize mood and storytelling."
  },
  {
    category: "Videogame Artists",
    artistName: "Kazuma Kaneko",
    knownFor: "Shin Megami Tensei series",
    description: "Intricate, moody designs imbued with mythic and surreal elements that give his characters and worlds a uniquely eerie quality."
  },
  {
    category: "Videogame Artists",
    artistName: "Yusuke Naora",
    knownFor: "Final Fantasy VII, Kingdom Hearts",
    description: "Richly rendered with dynamic lighting and bold colors, his work creates a dramatic, movie‑like quality in character and environment design."
  },
  {
    category: "Videogame Artists",
    artistName: "Akira Toriyama",
    knownFor: "Dragon Quest series, Chrono Trigger (covers)",
    description: "Clean, expressive, and instantly recognizable style that combines energetic characters with simplicity, influencing many video game franchises."
  },
  {
    category: "Videogame Artists",
    artistName: "Ayami Kojima",
    knownFor: "Castlevania: Lords of Shadow, Bloodstained",
    description: "Detailed and haunting illustrations with a dark, moody palette that blend elegance with a sense of foreboding mystery."
  },
  {
    category: "Videogame Artists",
    artistName: "Shigenori Soejima",
    knownFor: "Persona series",
    description: "Modern digital illustrations characterized by vibrant hues and dynamic, stylish designs that capture contemporary youth culture in gaming."
  },
  {
    category: "Videogame Artists",
    artistName: "Katsuya Terada",
    knownFor: "Tekken series, various game projects",
    description: "Highly detailed line work and inventive character designs that merge traditional techniques with digital innovation for a unique, eclectic look."
  },
  {
    category: "Videogame Artists",
    artistName: "H.R. Giger",
    knownFor: "Alien franchise (inspired game designs)",
    description: "Dark, unsettling fusion of organic and machine elements that have influenced the aesthetics of horror‑ and sci‑fi‑themed video games."
  },
  {
    category: "Videogame Artists",
    artistName: "Moebius (Jean Giraud)",
    knownFor: "Influential in sci‑fi aesthetics (inspiration for games)",
    description: "Visionary, surreal compositions with flowing lines and imaginative worlds that have inspired countless game concepts and futuristic designs."
  },
  {
    category: "Videogame Artists",
    artistName: "Beeple (Mike Winkelmann)",
    knownFor: "Digital art, NFT projects, promotional art",
    description: "Rapidly evolving digital works marked by vivid colors and striking compositions that blend surrealism with modern digital techniques."
  },
  {
    category: "Videogame Artists",
    artistName: "Sparth (Nicola West)",
    knownFor: "Halo series concept art, futuristic design",
    description: "Streamlined, crisp designs with flat color areas and strong geometric shapes that evoke a clear, futuristic vision."
  },
  {
    category: "Videogame Artists",
    artistName: "Paul Romano",
    knownFor: "Banner Saga covers",
    description: "Narrative-driven compositions with bold, painterly textures that evoke a storybook quality ideal for epic video game worlds."
  },
  {
    category: "Videogame Artists",
    artistName: "Craig Mullins",
    knownFor: "Concept art for games and films",
    description: "Fluid brushwork and evocative color palettes create dynamic, cinematic scenes that bring game worlds to life."
  },
  {
    category: "Videogame Artists",
    artistName: "Feng Zhu",
    knownFor: "Video game concept art across multiple titles",
    description: "Renowned for efficient, high-quality concept sketches that rapidly explore and refine ideas for characters, environments, and visual narratives."
  },
  {
    category: "Videogame Artists",
    artistName: "Paul Chadeisson",
    knownFor: "Sci‑fi concept art for futuristic games",
    description: "Produces expansive, imaginative illustrations that combine precise detail with striking graphic elements, perfect for futuristic settings."
  },
  {
    category: "Videogame Artists",
    artistName: "Ilya Kuvshinov",
    knownFor: "Digital character design for games and media",
    description: "Clean and modern with a subtle anime influence, his work offers sleek, contemporary designs that are both accessible and visually appealing."
  },
  {
    category: "Videogame Artists",
    artistName: "Artgerm (Stanley Lau)",
    knownFor: "Digital portraits and character designs",
    description: "Merges comic aesthetics with photo‑realism to produce visually stunning and highly refined illustrations that resonate with modern gaming audiences."
  },
  {
    category: "Videogame Artists",
    artistName: "Ryan Yee",
    knownFor: "Concept art for card games and video game influences",
    description: "Known for his intricate, narrative‑rich designs that blend fantasy and sci‑fi elements, contributing to immersive, strategic visual storytelling."
  },
  {
    category: "Videogame Artists",
    artistName: "Greg Staples",
    knownFor: "Borderlands series, video game concept art",
    description: "Bold and dynamic illustrations featuring strong lines and a modern comic influence, his work captures the raw energy and irreverent humor of contemporary games."
  },
  {
    category: "Videogame Artists",
    artistName: "Ian McQue",
    knownFor: "Futuristic landscapes and flying ship designs",
    description: "Distinctive style that combines hand‑drawn charm with digital refinement to create immersive, dystopian urban environments."
  },
  {
    category: "Videogame Artists",
    artistName: "Ralph McQuarrie",
    knownFor: "Star Wars concept art (influential for games)",
    description: "His seminal designs for the original Star Wars films have defined sci‑fi aesthetics for decades, inspiring video game visuals with their innovative, timeless style."
  },
  {
    category: "Videogame Artists",
    artistName: "Kekai Kotaki",
    knownFor: "Guild Wars 2, video game concept art",
    description: "Known for epic, atmospheric scenes with dramatic lighting and a strong sense of scale, his work creates immersive worlds that blend realism with fantasy."
  },
  
  // Pre-1950 Cartoonists
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Winsor McCay",
    knownFor: "Little Nemo in Slumberland",
    description: "A pioneering animator and comic strip artist whose intricate, imaginative worlds set a high standard for visual storytelling."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "George Herriman",
    knownFor: "Krazy Kat",
    description: "Renowned for his idiosyncratic, abstract style and poetic humor, his work broke conventional narrative boundaries in early comic strips."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Rube Goldberg",
    knownFor: "Elaborate invention cartoons",
    description: "Best known for his comically over‑engineered machines, his detailed contraptions turned everyday tasks into absurd, circuitous processes."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "E.C. Segar",
    knownFor: "Popeye",
    description: "Created the iconic sailor Popeye with bold, lively illustrations that captured movement and personality in a distinctly playful manner."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Milton Caniff",
    knownFor: "Terry and the Pirates",
    description: "Master storyteller whose detailed, dramatic art and fluid compositions brought adventure and exotic locales to life in early adventure strips."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Al Capp",
    knownFor: "Li'l Abner",
    description: "Known for his biting social satire and caricatured figures, Capp's work lampooned American culture with a unique blend of humor and pathos."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Jay Norwood Darling",
    knownFor: "Ding Darling",
    description: "An editorial cartoonist celebrated for his gentle, idealistic style and charming depictions of nature and social commentary in his work."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "James Thurber",
    knownFor: "New Yorker cartoons",
    description: "His sparse, clever line drawings paired with dry humor captured the absurdities of modern life in a simple yet powerful style."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Herblock (Herbert Block)",
    knownFor: "Editorial cartoons",
    description: "A master of political and social satire, his stark, well‑defined imagery made incisive commentary on contemporary events."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "George McManus",
    knownFor: "Bringing Up Father",
    description: "Created a long‑running strip featuring refined, humorous depictions of Irish‑American life, influencing generations with his elegant style."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Frank King",
    knownFor: "Gasoline Alley",
    description: "One of the first strips to depict real life, his gentle humor and steady characterizations of everyday people made his work both relatable and enduring."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Charles Addams",
    knownFor: "Early dark cartoons (pre‑Addams Family)",
    description: "His early work in magazines revealed a penchant for dark, offbeat humor and surreal, twisted characters that foreshadowed his later iconic creations."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Milt Gross",
    knownFor: "Various humorous comic strips",
    description: "Known for his boisterous, sometimes grotesque caricatures, Gross's energetic style brought a sense of irreverence and vitality to his cartoons."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Bill Mauldin",
    knownFor: "WWII cartoons",
    description: "His poignant, hard‑hitting illustrations of soldiers' lives during World War II captured both the humor and hardships of wartime with authenticity."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Frederick Burr Opper",
    knownFor: "Happy Hooligan, Weary Willie",
    description: "An early comic strip innovator, his lively, humorous drawings set the stage for American newspaper cartooning in the early 20th century."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Walter Hoban",
    knownFor: "Jerry on the Job",
    description: "Known for his refined, observational style, Hoban's work portrayed everyday work life with a subtle humor and precise, gentle detail."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Ronald Searle",
    knownFor: "Early wartime and satirical cartoons",
    description: "A British cartoonist whose incisive, sharply drawn work provided witty commentary on the social and political climate of his time."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Robert Ripley",
    knownFor: "Ripley's Believe It or Not!",
    description: "Creator of the popular oddities column, his bizarre and curious cartoons celebrated the strange and unusual with a distinctive, offbeat style."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Clare Briggs",
    knownFor: "Early newspaper comic strips",
    description: "A pioneer in American comic strips, Briggs's clean, straightforward style captured the humor and everyday life of early 20th‑century America."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Harold Gray",
    knownFor: "Little Orphan Annie",
    description: "His work on Little Orphan Annie combined stark realism with poignant narrative, creating an enduring and influential comic strip."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Jimmy Hatlo",
    knownFor: "They'll Do It Every Time",
    description: "Known for his satirical and exaggerated take on daily life, Hatlo's work resonated with readers through its bold humor and memorable characters."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "H. T. Webster",
    knownFor: "Early 20th‑century newspaper cartoons",
    description: "A prolific cartoonist whose lively, energetic style and spontaneous sketches captured the humorous side of everyday events."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "Floyd Gottfredson",
    knownFor: "Mickey Mouse comic strips",
    description: "Elevated the art of the comic strip with adventurous, finely drawn sequences that defined the early years of Disney's most famous character."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "John Held, Jr.",
    knownFor: "Jazz Age illustrations, flappers",
    description: "Iconic for his sophisticated portrayals of the Roaring Twenties, his refined, graceful illustrations captured the glamour and spirit of an era."
  },
  {
    category: "Pre-1950 Cartoonists",
    artistName: "James Montgomery Flagg",
    knownFor: "I Want YOU for U.S. Army poster",
    description: "Famed for his powerful, iconic illustrations that combined graphic design with stirring national symbolism, influencing both art and popular culture."
  },
  
  // Art Nouveau
  {
    category: "Art Nouveau",
    artistName: "Alphonse Mucha",
    knownFor: "Iconic posters, magazine illustrations",
    description: "The quintessential Art Nouveau artist whose lush, decorative illustrations and stylized figures epitomize the era's aesthetic."
  },
  {
    category: "Art Nouveau",
    artistName: "Aubrey Beardsley",
    knownFor: "Black‑ink illustrations, erotic and decadent works",
    description: "Celebrated for his stark, high‑contrast line work and provocative imagery that defined a daring facet of the style."
  },
  {
    category: "Art Nouveau",
    artistName: "Eugène Grasset",
    knownFor: "Graphic design, book plates and posters",
    description: "A Swiss pioneer whose innovative use of line and ornamentation laid the groundwork for modern graphic illustration."
  },
  {
    category: "Art Nouveau",
    artistName: "Gustav Klimt",
    knownFor: "Decorative panels, portraiture",
    description: "Known for his sumptuous patterns, gilded surfaces, and highly decorative compositions that influenced Art Nouveau's visual language."
  },
  {
    category: "Art Nouveau",
    artistName: "Théophile Steinlen",
    knownFor: "Posters (e.g. Le Chat Noir)",
    description: "His charming, subtly provocative posters captured the spirit of Parisian nightlife and remain emblematic of the period."
  },
  {
    category: "Art Nouveau",
    artistName: "Henri de Toulouse‑Lautrec",
    knownFor: "Cabaret posters and illustrations",
    description: "Though often associated with Post-Impressionism, his vibrant, witty poster art and illustrations of Paris' bohemian life resonate with Art Nouveau's flair."
  },
  {
    category: "Art Nouveau",
    artistName: "Koloman Moser",
    knownFor: "Design and illustration for the Wiener Werkstätte",
    description: "A leading figure in Austrian Art Nouveau, his refined, linear work in graphic design and decorative arts exudes modern elegance."
  },
  {
    category: "Art Nouveau",
    artistName: "Margaret Macdonald Mackintosh",
    knownFor: "Book and poster design (Glasgow Style)",
    description: "Her intricate, nature‑inspired motifs and delicate line work helped shape the distinctive Glasgow School, closely allied with Art Nouveau ideals."
  },
  {
    category: "Art Nouveau",
    artistName: "Charles Rennie Mackintosh",
    knownFor: "Interior design and graphic work",
    description: "Renowned for his innovative use of geometry and natural forms, his designs fused functionality with a refined, decorative aesthetic."
  },
  {
    category: "Art Nouveau",
    artistName: "Georges de Feure",
    knownFor: "Illustrations and decorative designs",
    description: "His sophisticated, refined images and detailed ornamentation capture the spirit of Art Nouveau's luxurious visual style."
  },
  {
    category: "Art Nouveau",
    artistName: "Henri Privat‑Livemont",
    knownFor: "Posters and advertisements",
    description: "A Belgian poster artist whose soft lines and graceful compositions epitomize the decorative elegance of the period."
  },
  {
    category: "Art Nouveau",
    artistName: "Léon Bakst",
    knownFor: "Theatre set designs and book illustrations",
    description: "Known for his bold, theatrical imagery and lavish, imaginative designs that bridged Art Nouveau and Symbolism."
  },
  {
    category: "Art Nouveau",
    artistName: "Arthur Rackham",
    knownFor: "Fairy tale and book illustrations",
    description: "His intricately detailed pen‑and‑ink work, imbued with dreamlike qualities, has enchanted generations with its mystical charm."
  },
  {
    category: "Art Nouveau",
    artistName: "Edmund Dulac",
    knownFor: "Fairy tale illustrations, children's books",
    description: "A master of vivid color and delicate detail, his illustrations evoke magical atmospheres and lush, ornamental designs."
  },
  {
    category: "Art Nouveau",
    artistName: "Kay Nielsen",
    knownFor: "Book and fairy tale illustrations",
    description: "His graceful, meticulously detailed work, characterized by fluid lines and sophisticated patterns, epitomizes the Art Nouveau aesthetic in illustration."
  },
  {
    category: "Art Nouveau",
    artistName: "Louis Rhead",
    knownFor: "Magazine and poster illustrations",
    description: "An American illustrator whose work in the Art Nouveau style combines elegant line work with ornamental detail in a refined, commercial approach."
  },
  {
    category: "Art Nouveau",
    artistName: "Jules Chéret",
    knownFor: "Early poster art",
    description: "Often called the "father of the modern poster," his dynamic, colorful designs set a precedent for graphic illustration in the Art Nouveau period."
  },
  {
    category: "Art Nouveau",
    artistName: "Jean Carlu",
    knownFor: "French poster art",
    description: "Known for his striking, innovative poster designs that capture the decorative spirit and modern sensibility of Art Nouveau."
  },
  {
    category: "Art Nouveau",
    artistName: "Edward Penfield",
    knownFor: "American poster and magazine illustrations",
    description: "His work in the early 20th century brought a refined, modern twist to Art Nouveau in commercial illustration."
  },
  {
    category: "Art Nouveau",
    artistName: "Paul Iribe",
    knownFor: "Fashion and book illustrations",
    description: "A French illustrator whose refined, decorative style and detailed line work made him a prominent figure in early 20th‑century graphic art."
  },
  {
    category: "Art Nouveau",
    artistName: "Gustave Moreau",
    knownFor: "Mythological and symbolic paintings",
    description: "A Symbolist painter whose highly decorative, imaginative works deeply influenced the ornamental aspects of Art Nouveau illustration."
  },
  {
    category: "Art Nouveau",
    artistName: "Leonetto Cappiello",
    knownFor: "Advertising poster art",
    description: "An Italian poster artist whose energetic, graphic style and inventive compositions prefigure the modern approach to decorative illustration."
  },
  {
    category: "Art Nouveau",
    artistName: "Franz von Stuck",
    knownFor: "Symbolist and decorative art",
    description: "His richly textured, allegorical images combine dark symbolism with exquisite detail, influencing decorative art movements including Art Nouveau."
  },
  {
    category: "Art Nouveau",
    artistName: "Odilon Redon",
    knownFor: "Dreamlike, fantastical imagery",
    description: "A French Symbolist whose imaginative, softly rendered works and lush, poetic use of color echo the decorative elegance and mood of Art Nouveau."
  },
  {
    category: "Art Nouveau",
    artistName: "Ernst Fuchs",
    knownFor: "Fantastic and visionary illustrations",
    description: "An Austrian artist whose later work blends Art Nouveau ornamental detail with Symbolist and Surrealist influences, creating richly imaginative compositions."
  }
];

/**
 * Get available advanced art style categories
 */
export const getAdvancedArtStyleCategories = (): AdvancedArtStyle[] => {
  return Array.from(new Set(ARTISTS_DATA.map(artist => artist.category)));
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
