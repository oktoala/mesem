import { writable } from "svelte/store";

// Data Json
import smiley from "./emoji-data/smiley.json";
import people from "./emoji-data/people.json";
import animals from "./emoji-data/animals.json";
import food from "./emoji-data/food.json";
import activities from "./emoji-data/activities.json";
import travel from "./emoji-data/travel.json";
import objects from "./emoji-data/objects.json";
import symbols from "./emoji-data/symbols.json";
import flags from "./emoji-data/flags.json";
import {
  bahu,
  beda,
  cinta,
  gugup,
  hewan,
  meja,
  memeluk,
  menangis,
  menari,
  otot,
  penunjuk,
  terkejut,
  tersenyum,
} from "./smilesData.json";

// SVG
import smileyGroup from "../assets/title-bar/maximize.svelte";

export const navIndex = writable(0);

export const visible = writable(false);

// Tab State
export const tabSmile = writable(0);
export const tabEmoji = writable(0);

// Cliboard
export const alert = writable("");

export const emojis = [
  {
    title: "👺",
    label: "Smiley & Emoticon",
    name: "smiley",
    color: "bg-blue-500",
    data: smiley,
  },
  {
    title: "💪🏻",
    label: "People & Body",
    name: "people",
    color: "bg-purple-500",
    data: people,
  },
  {
    title: "🐱",
    label: "Animals & Nature",
    name: "animals",
    color: "bg-green-500",
    data: animals,
  },
  {
    title: "🍰",
    label: "Food & Drink",
    name: "food",
    color: "bg-pink-500",
    data: food,
  },
  {
    title: "🏓",
    label: "Activities",
    name: "activities",
    color: "bg-slate-500",
    data: activities,
  },
  {
    title: "✈️",
    label: "Travel & Places",
    name: "travel",
    color: "bg-orange-500",
    data: travel,
  },
  {
    title: '🖱️',
    label: 'Objects',
    name: 'objects',
    color: 'bg-yellow-700',
    data: objects
  },
  {
    title: '❤️',
    label: 'Symbols',
    name: 'symbols',
    color: 'bg-fuchsia-500',
    data: symbols,
  },
  {
    title: '🇮🇩',
    label: 'Flags',
    name: 'flags',
    color: 'bg-sky-500',
    data: flags,
  }
];

export const smiles = [
  {
    title: "(◠‿◕)",
    label: "Tersenyum",
    name: "tersenyum",
    color: "bg-orange-500",
    data: tersenyum,
  },
  {
    title: "(•ө•)♡",
    label: "Cinta",
    name: "cinta",
    color: "bg-red-500",
    data: cinta,
  },
  {
    title: "(^o^)",
    label: "Memeluk",
    name: "memeluk",
    color: "bg-lime-500",
    data: memeluk,
  },
  {
    title: "ᕙ~.~ᕗ",
    label: "Memamerkan Otot",
    name: "otot",
    color: "bg-yellow-700",
    data: otot,
  },
  {
    title: "(◕ᴥ◕)",
    label: "Hewan",
    name: "hewan",
    color: "bg-green-500",
    data: hewan,
  },
  {
    title: "(>0<)",
    label: "Terkejut",
    name: "terkejut",
    color: "bg-blue-500",
    data: terkejut,
  },
  {
    title: "♪\\^ω^\\",
    label: "Menari",
    name: "menari",
    color: "bg-fuchsia-500",
    data: menari,
  },
  {
    title: "乁•_•ㄏ",
    label: "Mengangkat Bahu",
    name: "bahu",
    color: "bg-neutral-500",
    data: bahu,
  },
  {
    title: "┻━┻",
    label: "Membalikkan Meja",
    name: "meja",
    color: "bg-rose-500",
    data: meja,
  },
  {
    title: "ಠ_ಠ",
    label: "Tidak Setuju",
    name: "beda",
    color: "bg-purple-500",
    data: beda,
  },
  {
    title: "ಥ‿ಥ",
    label: "Menangis",
    name: "menangis",
    color: "bg-cyan-500",
    data: menangis,
  },
  {
    title: "~_~",
    label: "Gugup",
    name: "gugup",
    color: "bg-amber-500",
    data: gugup,
  },
  {
    title: "→_→",
    label: "Penunjuk Arah",
    name: "penunjuk",
    color: "bg-slate-800",
    data: penunjuk,
  },
];
