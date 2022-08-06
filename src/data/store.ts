import { writable } from "svelte/store";

import smiley from "./emoji-data/smiley";
import people from "./emoji-data/people";

import { bahu, beda, cinta, gugup, hewan, meja, memeluk, menangis, menari, otot, penunjuk, terkejut, tersenyum } from "./smilesData";

export const navIndex = writable(0);

export const visible = writable(false);

export const tabSmile = writable(0);

export const clipboarded = writable("");

export const emojis = [
  {
    title: '',
    label: 'Smiley & Emoticon',
    name: 'smiley',
    color: 'fill-orange-500',
    data: smiley,
  },
  {
    title: '',
    label: 'People & Body',
    name: 'smiley',
    color: 'fill-purple-500',
    data: people,
  },
]

export const smiles = [
  {
    title: '(◠‿◕)',
    label: 'Tersenyum',
    name: "tersenyum",
    color: "bg-orange-500",
    data: tersenyum
  },
  {
    title: '(•ө•)♡',
    label: 'Cinta',
    name: "cinta",
    color: "bg-red-500",
    data: cinta,
  },
  {
    title: '(^o^)',
    label: 'Memeluk',
    name: "memeluk",
    color: "bg-lime-500",
    data: memeluk,
  },
  {
    title: 'ᕙ~.~ᕗ',
    label: 'Memamerkan Otot',
    name: "otot",
    color: "bg-yellow-700",
    data: otot,
  },
  {
    title: '(◕ᴥ◕)',
    label: 'Hewan',
    name: "hewan",
    color: "bg-green-500",
    data: hewan
  },
  {
    title: '(>0<)',
    label: 'Terkejut',
    name: "terkejut",
    color: "bg-blue-500",
    data: terkejut
  },
  {
    title: '♪\\^ω^\\',
    label: 'Menari',
    name: "menari",
    color: "bg-fuchsia-500",
    data: menari
  },
  {
    title: '乁•_•ㄏ',
    label: 'Mengangkat Bahu',
    name: "bahu",
    color: "bg-neutral-500",
    data: bahu
  },
  {
    title: '┻━┻',
    label: 'Membalikkan Meja',
    name: "meja",
    color: "bg-rose-500",
    data: meja
  },
  {
    title: 'ಠ_ಠ',
    label: 'Tidak Setuju',
    name: "beda",
    color: "bg-purple-500",
    data: beda
  },
  {
    title: 'ಥ‿ಥ',
    label: 'Menangis',
    name: "menangis",
    color: "bg-cyan-500",
    data: menangis
  },
  {
    title: '~_~',
    label: 'Gugup',
    name: "gugup",
    color: "bg-amber-500",
    data: gugup
  },
  {
    title: '→_→',
    label: 'Penunjuk Arah',
    name: "penunjuk",
    color: 'bg-slate-800',
    data: penunjuk,
  },
];
