
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArtStyle, AdvancedArtStyle, ArtistInfo } from "@/types";
import { useEffect, useState } from "react";
import { getAllArtStyleCategories } from "@/data/artStyleDescriptions";

interface ArtStyleSelectorProps {
  advancedMode: boolean;
  artStyle: string;
  advancedArtStyle: string;
  artistName: string;
  medium: string;
  onUpdateArtStyle: (value: ArtStyle) => void;
  onUpdateAdvancedArtStyle: (value: AdvancedArtStyle) => void;
  onUpdateArtistName: (value: string) => void;
  onUpdateMedium: (value: string) => void;
}

const ART_STYLES: ArtStyle[] = [
  'Classic Comic', 'Manga', 'Modern Cartoon', 'Superhero', 'Animated',
  'Vintage', 'Chibi', 'Digital Art', 'Watercolor', 'Minimalist'
];

const MEDIUMS = [
  'Pencil Sketch', 'Ink Drawing', '2-Tone', '3-Tone', 'Watercolor Wash',
  'Digital Painting', 'Marker Rendering', 'Charcoal Drawing', 'Pastel', 'Mixed Media'
];

// Direct mapping of art style categories to artists
const ARTISTS_BY_CATEGORY: Record<string, string[]> = {
  "Children's Book Illustrations": [
    "Maurice Sendak", "Dr. Seuss (Theodor Geisel)", "Eric Carle", "Quentin Blake",
    "Beatrix Potter", "Chris Van Allsburg", "Jerry Pinkney", "Jan Brett",
    "Leo Lionni", "Oliver Jeffers", "David Wiesner", "Tove Jansson",
    "Robert McCloskey", "H.A. Rey (and Margret Rey)", "Garth Williams",
    "E.H. Shepard", "Arthur Rackham", "N.C. Wyeth", "Lane Smith",
    "Chris Riddell", "Maira Kalman", "Kadir Nelson", "Ezra Jack Keats",
    "Mary Blair", "Sophie Blackall"
  ],
  "Comic Book Artists": [
    "Jack Kirby", "Steve Ditko", "Neal Adams", "Jim Lee",
    "Todd McFarlane", "Frank Miller", "Alex Ross", "John Romita Sr.",
    "John Byrne", "George Pérez", "Jim Steranko", "Will Eisner",
    "Steve Rude", "Bernie Wrightson", "Adam Hughes", "Alex Maleev",
    "Frank Quitely", "Duncan Fegredo", "Esad Ribic", "Ivan Reis",
    "Olivier Coipel", "Sara Pichelli", "Leinil Francis Yu", "David Mazzucchelli",
    "Mike Mignola"
  ],
  "Cartoonists": [
    "Charles Schulz", "Bill Watterson", "Gary Larson", "Matt Groening",
    "Al Capp", "Winsor McCay", "George Herriman", "Roz Chast",
    "Jim Davis", "Stephan Pastis", "Berkeley Breathed", "Lynn Johnston",
    "Patrick McDonnell", "Bill Amend", "Al Jaffee", "E.C. Segar",
    "R. Crumb", "Lynda Barry", "Chris Ware", "Sergio Aragones",
    "Zach Weinersmith", "Jeff Kinney", "Tony Millionaire", "Gahan Wilson",
    "Charles Addams"
  ],
  "Cartoon TV Shows": [
    "Genndy Tartakovsky", "Craig McCracken", "Bruce Timm", "Pendleton Ward",
    "Rebecca Sugar", "Lauren Faust", "Stephen Hillenburg", "John Kricfalusi",
    "Matt Groening", "Jhonen Vasquez", "Rob Renzetti", "Bruce W. Smith",
    "Michael Dante DiMartino", "Bryan Konietzko", "Alex Hirsch", "J. G. Quintel",
    "Justin Roiland", "Glen Murakami", "Masaaki Yuasa", "Stephen Silver",
    "Seth MacFarlane", "Everett Peck", "Joe Murray", "Jim Reardon",
    "Trey Parker"
  ],
  "Anime": [
    "Hayao Miyazaki", "Makoto Shinkai", "Satoshi Kon", "Katsuhiro Otomo",
    "Leiji Matsumoto", "Akira Toriyama", "Naoko Takeuchi", "Rumiko Takahashi",
    "Takeshi Obata", "Hirohiko Araki", "Hajime Isayama", "Yoshitaka Amano",
    "Yusuke Murata", "Hiroyuki Imaishi", "Eiichiro Oda", "CLAMP (collective)",
    "Junji Ito", "Osamu Tezuka", "Naoki Urasawa", "Ken Sugimori",
    "Tite Kubo", "Shigeru Mizuki", "Kentaro Miura", "Kiyohiko Azuma",
    "Yoshihiro Togashi"
  ],
  "Manga": [
    "Osamu Tezuka", "Akira Toriyama", "Rumiko Takahashi", "Naoko Takeuchi",
    "CLAMP", "Kentaro Miura", "Hirohiko Araki", "Yoshihiro Togashi",
    "Masashi Kishimoto", "Tite Kubo", "Eiichiro Oda", "Takehiko Inoue",
    "Gosho Aoyama", "Naoki Urasawa", "Hiro Mashima", "Yuu Watase",
    "Akiko Higashimura", "Inio Asano", "Kentaro Yabuki", "Yumi Tamura",
    "Goseki Kojima", "Fujiko F. Fujio", "Mitsuru Adachi", "Kengo Hanazawa",
    "Sui Ishida"
  ],
  "Chibi": [
    "Momoko Sakura", "Kazuko Shibuya", "CLAMP (collective)", "Akira Toriyama",
    "Naoko Takeuchi", "Eiichiro Oda", "Adashuoo", "Orangex",
    "HoshikariArt", "Chocochino", "Teebster", "Xabyart",
    "Luthfiahyn8", "Pranadipa", "Yai Ari", "Scarlette.Art",
    "DokiDokiChibi", "ChibiExpert", "LunaChibiArt", "ChibiMiko",
    "AmaiChibi", "ChibiSketch", "KawaiiChibiArt", "ChibiStyleStudio",
    "ChibiMaster"
  ],
  "Digital Art": [
    "Beeple (Mike Winkelmann)", "Artgerm (Stanley Lau)", "Greg Rutkowski", "Ross Tran (Ross Draws)",
    "Loish (Lois van Baarle)", "Sakimichan", "Ilya Kuvshinov", "Kim Jung Gi",
    "Android Jones", "James Jean", "Vitaly Bulgarov", "Andree Wallin",
    "Jama Jurabaev", "Paul Chadeisson", "Charlie Bowater", "Feng Zhu",
    "Maciej Kuciara", "Peter Mohrbacher", "Craig Mullins", "Syd Mead",
    "Scott Robertson", "Sam Yang (samdoesarts)", "Yuumei (Wenqing Yan)", "Cyril Rolando",
    "Kyle Lambert"
  ],
  "Digital Art Illustration": [
    "Artgerm (Stanley Lau)", "Greg Rutkowski", "Ross Tran (Ross Draws)", "Loish (Lois van Baarle)",
    "Sakimichan", "Ilya Kuvshinov", "Android Jones", "James Jean",
    "Charlie Bowater", "Feng Zhu", "Maciej Kuciara", "Peter Mohrbacher",
    "Craig Mullins", "Sam Yang (samdoesarts)", "Yuume (Wenqing Yan)", "Cyril Rolando",
    "Kyle Lambert", "Jama Jurabaev", "Andree Wallin", "Paul Chadeisson",
    "Scott Robertson", "Syd Mead", "Sam Spratt", "Alex Ross",
    "WLOP"
  ],
  "Vintage Comic": [
    "Jack Kirby", "Steve Ditko", "Will Eisner", "Joe Shuster",
    "Curt Swan", "Carmine Infantino", "Gil Kane", "Alex Raymond",
    "Hal Foster", "Milton Caniff", "Joe Kubert", "Wally Wood",
    "Russ Manning", "Reed Crandall", "Gene Colan", "Al Williamson",
    "Murphy Anderson", "Joe Simon", "Frank Frazetta", "Neal Adams",
    "John Romita Sr.", "Syd Shores", "Jack Cole", "C.C. Beck",
    "Alex Toth"
  ],
  "Modern Comic": [
    "Genndy Tartakovsky", "Craig McCracken", "Bruce Timm", "Pendleton Ward",
    "Rebecca Sugar", "Lauren Faust", "Jhonen Vasquez", "J.G. Quintel",
    "Justin Roiland", "Matt Groening", "Mike Judge", "Seth MacFarlane",
    "Alex Hirsch", "Noelle Stevenson", "Raina Telgemeier", "Lynda Barry",
    "Aaron McGruder", "Zach Weinersmith", "Sarah Andersen", "Tom Gauld",
    "Roz Chast", "Adrian Tomine", "Kate Beaton", "Randall Munroe",
    "David Malki"
  ],
  "Ukiyo-e": [
    "Hishikawa Moronobu", "Katsushika Hokusai", "Utagawa Hiroshige", "Kitagawa Utamaro",
    "Tōshūsai Sharaku", "Suzuki Harunobu", "Katsukawa Shunshō", "Utagawa Kuniyoshi",
    "Utagawa Kunisada", "Keisai Eisen", "Katsukawa Shunkō", "Torii Kiyonaga",
    "Ippitsusai Bunchō", "Torii Kiyomitsu", "Torii Kiyomasu", "Isoda Koryūsai",
    "Tsukioka Yoshitoshi", "Utagawa Toyokuni", "Okumura Masanobu", "Utagawa Toyoharu",
    "Totoya Hokkei", "Kubo Shunman", "Katsuara Ritsuzan", "Yanagawa Shigenobu",
    "Kawanabe Kyōsai"
  ],
  "Graphic Novel": [
    "Art Spiegelman", "Marjane Satrapi", "Chris Ware", "Daniel Clowes",
    "Charles Burns", "Craig Thompson", "Alison Bechdel", "Seth",
    "Frank Miller", "David Mazzucchelli", "Jaime Hernandez", "Raina Telgemeier",
    "Jeff Lemire", "Kazu Kibuishi", "Joe Sacco", "Jiro Taniguchi",
    "Milo Manara", "Shaun Tan", "Bryan Lee O'Malley", "Adrian Tomine",
    "Jillian Tamaki", "Fábio Moon & Gabriel Bá", "Noelle Stevenson", "Jim Woodring",
    "R. Crumb"
  ],
  "Cel-Shaded Artist": [
    "Shigenori Soejima", "Tetsuya Nomura", "Akihiko Yoshida", "Kazuma Kaneko",
    "Katsuya Terada", "Shunya Yamashita", "Yusuke Murata", "Akira Toriyama",
    "Naoko Takeuchi", "Artgerm (Stanley Lau)", "Loish (Lois van Baarle)", "Ilya Kuvshinov",
    "Ross Tran (Ross Draws)", "Sam Yang (samdoesarts)", "Feng Zhu", "Sparth (Nicola West)",
    "Maciej Kuciara", "Paul Chadeisson", "Beeple (Mike Winkelmann)", "Jama Jurabaev",
    "Greg Rutkowski", "Kyle Lambert", "Peter Mohrbacher", "Sam Spratt",
    "WLOP"
  ],
  "Sci-Fi Illustrations": [
    "Frank R. Paul", "Chesley Bonestell", "Virgil Finlay", "Chris Foss",
    "Moebius (Jean Giraud)", "H.R. Giger", "John Berkey", "Richard M. Powers",
    "Michael Whelan", "Wayne Barlowe", "Frank Kelly Freas", "Paul Lehr",
    "John Harris", "Syd Mead", "Chris Moore", "Boris Vallejo",
    "Peter Elson", "Roger Dean", "Greg Hildebrandt", "Tim Hildebrandt",
    "Jim Burns", "Vincent Di Fate", "Ken Barr", "Rodney Matthews"
  ],
  "Videogame Artists": [
    "Yoshitaka Amano", "Yoji Shinkawa", "Tetsuya Nomura", "Akihiko Yoshida",
    "Kazuma Kaneko", "Yusuke Naora", "Akira Toriyama", "Ayami Kojima",
    "Shigenori Soejima", "Katsuya Terada", "H.R. Giger", "Moebius (Jean Giraud)",
    "Beeple (Mike Winkelmann)", "Sparth (Nicola West)", "Paul Romano", "Craig Mullins",
    "Feng Zhu", "Paul Chadeisson", "Ilya Kuvshinov", "Artgerm (Stanley Lau)",
    "Ryan Yee", "Greg Staples", "Ian McQue", "Ralph McQuarrie",
    "Kekai Kotaki"
  ],
  "Pre-1950 Cartoonists": [
    "Winsor McCay", "George Herriman", "Rube Goldberg", "E.C. Segar",
    "Milton Caniff", "Al Capp", "Jay Norwood Darling", "James Thurber",
    "Herblock (Herbert Block)", "George McManus", "Frank King", "Charles Addams",
    "Milt Gross", "Bill Mauldin", "Frederick Burr Opper", "Walter Hoban",
    "Ronald Searle", "Robert Ripley", "Clare Briggs", "Harold Gray",
    "Jimmy Hatlo", "H. T. Webster", "Floyd Gottfredson", "John Held, Jr.",
    "James Montgomery Flagg"
  ],
  "Art Nouveau": [
    "Alphonse Mucha", "Aubrey Beardsley", "Eugène Grasset", "Gustav Klimt",
    "Théophile Steinlen", "Henri de Toulouse‑Lautrec", "Koloman Moser", "Margaret Macdonald Mackintosh",
    "Charles Rennie Mackintosh", "Georges de Feure", "Henri Privat‑Livemont", "Léon Bakst",
    "Arthur Rackham", "Edmund Dulac", "Kay Nielsen", "Louis Rhead",
    "Jules Chéret", "Jean Carlu", "Edward Penfield", "Paul Iribe",
    "Gustave Moreau", "Leonetto Cappiello", "Franz von Stuck", "Odilon Redon",
    "Ernst Fuchs"
  ]
};

const ArtStyleSelector = ({
  advancedMode,
  artStyle,
  advancedArtStyle,
  artistName,
  medium,
  onUpdateArtStyle,
  onUpdateAdvancedArtStyle,
  onUpdateArtistName,
  onUpdateMedium
}: ArtStyleSelectorProps) => {
  const allArtStyleCategories = getAllArtStyleCategories();
  const [artistOptions, setArtistOptions] = useState<string[]>([]);
  
  useEffect(() => {
    if (advancedArtStyle) {
      // Get the artists for the selected art style category
      const artists = ARTISTS_BY_CATEGORY[advancedArtStyle] || [];
      console.log(`Found ${artists.length} artists for category ${advancedArtStyle}`);
      setArtistOptions(artists);
    } else {
      setArtistOptions([]);
    }
  }, [advancedArtStyle]);

  return (
    <>
      {!advancedMode ? (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="artStyle" className="block text-sm font-medium text-foreground/80">
            Art Style
          </label>
          <Select
            value={artStyle}
            onValueChange={(value) => onUpdateArtStyle(value as ArtStyle)}
          >
            <SelectTrigger id="artStyle" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Art Style" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy">
              {ART_STYLES.map((style) => (
                <SelectItem key={style} value={style} className="cursor-pointer">
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
          <label htmlFor="advancedArtStyle" className="block text-sm font-medium text-foreground/80">
            Advanced Art Style
          </label>
          <Select
            value={advancedArtStyle || ""}
            onValueChange={(value) => {
              onUpdateAdvancedArtStyle(value as AdvancedArtStyle);
              onUpdateArtistName("");
            }}
          >
            <SelectTrigger id="advancedArtStyle" className="w-full h-12 rounded-xl">
              <SelectValue placeholder="Select Advanced Art Style" />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy max-h-[300px]">
              {allArtStyleCategories.map((style) => (
                <SelectItem key={style} value={style} className="cursor-pointer">
                  {style}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {advancedMode && (
        <div className="space-y-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
          <label htmlFor="artistName" className="block text-sm font-medium text-foreground/80">
            Artist Name
          </label>
          <Select
            value={artistName || ""}
            onValueChange={(value) => onUpdateArtistName(value)}
            disabled={!advancedArtStyle || artistOptions.length === 0}
          >
            <SelectTrigger id="artistName" className="w-full h-12 rounded-xl">
              <SelectValue 
                placeholder={
                  !advancedArtStyle 
                    ? "Select Art Style first" 
                    : artistOptions.length === 0 
                    ? "No artists available for this style" 
                    : "Select Artist"
                } 
              />
            </SelectTrigger>
            <SelectContent className="dropdown-fancy max-h-[300px]">
              {artistOptions.length > 0 ? (
                artistOptions.map((artist) => (
                  <SelectItem key={artist} value={artist} className="cursor-pointer">
                    {artist}
                  </SelectItem>
                ))
              ) : (
                <div className="px-2 py-4 text-center text-muted-foreground">
                  {!advancedArtStyle 
                    ? "Select an art style first" 
                    : "No artists available for this style"}
                </div>
              )}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="space-y-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
        <label htmlFor="medium" className="block text-sm font-medium text-foreground/80">
          Medium
        </label>
        <Select
          value={medium || ""}
          onValueChange={(value) => onUpdateMedium(value)}
        >
          <SelectTrigger id="medium" className="w-full h-12 rounded-xl">
            <SelectValue placeholder="Select Medium" />
          </SelectTrigger>
          <SelectContent className="dropdown-fancy">
            {MEDIUMS.map((medium) => (
              <SelectItem key={medium} value={medium} className="cursor-pointer">
                {medium}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default ArtStyleSelector;
