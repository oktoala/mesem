import { writable } from "svelte/store";

export const navIndex = writable(0);

export const visible = writable(false);

export const clipboarded = writable('');

export const smiles = [
  {
    name: "Tersenyum",
    data: [
      "(•‿•)",
      "(・∀・)",
      "◉‿◉",
      "｡◕‿◕｡",
      "(. ❛ ᴗ ❛.)",
      "(θ‿θ)",
      "ʘ‿ʘ",
      "(✷‿✷)",
      "(◔‿◔)",
      "(◕ᴗ◕✿)",
      "(ʘᴗʘ✿)",
      "(人 •͈ᴗ•͈)",
      "(◍•ᴗ•◍)",
      "( ╹▽╹ )",
      "(≧▽≦)",
      "(☆▽☆)",
      "(✯ᴗ✯)",
      "ಡ ͜ ʖ ಡ",
      "(ㆁωㆁ)",
      "<(￣︶￣)>",
      "(*´ω｀*)",
      "(ꈍᴗꈍ)",
      "(✿^‿^)",
      "^_________^",
      "(◡ ω ◡)",
      "(´◡‿ゝ◡`)",
      "(｡•̀ᴗ-)✧",
      "(◠‿◕)",
      "(◠‿・)—☆",
      "✧◝(⁰▿⁰)◜✧",
      "(人*´∀｀)｡*ﾟ+",
      "(ﾉ◕ヮ◕)ﾉ*.✧",
    ],
  },
  {
    name: "Cinta",
    data: [
      "(●♡∀♡)",
      "(๑♡⌓♡๑)",
      "(｡♡‿♡｡)",
      "(✿ ♡‿♡)",
      "(◍•ᴗ•◍)❤",
      "( ◜‿◝ )♡",
      "(｡･ω･｡)ﾉ♡",
      "(•ө•)♡",
      "(♡ω♡ ) ~♪",
      "꒰⑅ᵕ༚ᵕ꒱˖♡",
      "♡˖꒰ᵕ༚ᵕ⑅꒱",
      "♡(ӦｖӦ｡)",
      "ෆ╹ .̮ ╹ෆ",
      "(´∩｡• ᵕ •｡∩`)",
      "♡(> ਊ <)♡",
      "♥╣[-_-]╠♥",
      "(灬º‿º灬)♡",
      "(｡・//ε//・｡)",
      "(〃ﾟ3ﾟ〃)",
      "(´ε｀ )",
      "( ˘ ³˘)♥",
      "(~￣³￣)~",
      "(◕દ◕)",
      "(ʃƪ＾3＾",
      "(*＾3＾)/～♡",
      "(っ˘з(˘⌣˘ )",
      "(●’3)♡(ε`●)",
      "(๑˙❥˙๑)",
      "(/^-^(^ ^*)/",
      "( ˶ ❛ ꁞ ❛ ˶ )",
      "(*˘︶˘*).｡*♡",
      "(◍•ᴗ•◍)✧*。",
    ],
  },
];