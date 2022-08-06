<script lang="ts">
  import { navIndex, smiles } from "./data/store";
  import BottomNavbar from "./components/BottomNavbar.svelte";
  import Emoji from "./pages/Emoji.svelte";
  import Smile from "./pages/Smile.svelte";
  import { invoke } from "@tauri-apps/api/tauri";
  import { onMount } from "svelte";
  import Headerbar from "./components/Headerbar.svelte";
  // // Variable for category
  // const categories = {
  //   smiley: "smileys-emotion",
  //   people: "people-body",
  //   animals: "animals-nature",
  //   food: "food-drink",
  //   activities: "activities",
  //   travel: "travel-places",
  //   objects: "objects",
  //   symbols: "symbols",
  //   flags: "flags",
  // };
  // const fetchEmoji = async (category: string) => {
  //   const api = `https://emoji-api.com/categories/${category}?access_key=${
  //     import.meta.env.VITE_EMOJI_KEY
  //   }`;
  //   const response = await fetch(api);
  //   const data = await response.json();
  //   return data;
  // };

  // const emojis = {
  //   smiley: [],
  //   people: [],
  //   animals: [],
  //   food: [],
  //   activities: [],
  //   travel: [],
  //   objects: [],
  //   symbols: [],
  //   flags: [],
  // }

  onMount(async () => {
    //   emojis.smiley = await fetchEmoji(categories.smiley);
    //   emojis.people = await fetchEmoji(categories.people);
    //   emojis.animals = await fetchEmoji(categories.animals);
    //   emojis.food = await fetchEmoji(categories.food);
    //   emojis.activities = await fetchEmoji(categories.activities);
    //   emojis.travel = await fetchEmoji(categories.travel);
    //   emojis.objects = await fetchEmoji(categories.objects);
    //   emojis.symbols = await fetchEmoji(categories.symbols);
    //   emojis.flags = await fetchEmoji(categories.flags);
    invoke("close_splashscreen");
  });
</script>

<main class="overflow-hidden">
  <Headerbar />
  {#if $navIndex == 0}
    <p>Makan</p>
    <!-- <Emoji {...emojis} /> -->
  {:else if $navIndex == 1}
    <Smile {smiles} />
  {/if}
  <BottomNavbar />
</main>
