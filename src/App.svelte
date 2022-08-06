<script lang="ts">
  import { navIndex, smiles, emojis } from "./data/store";
  import Emoji from "./pages/Emoji.svelte";
  import Smile from "./pages/Smile.svelte";
  import { invoke } from "@tauri-apps/api/tauri";
  import { onMount } from "svelte";
  import Headerbar from "./components/Headerbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
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

  onMount(async () => {
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
</main>
