<script lang="ts">
  import { navIndex } from "./data/store";
  import BottomNavbar from "./components/BottomNavbar.svelte";
  import Emoji from "./pages/Emoji.svelte";
  import Smile from "./pages/Smile.svelte";
</script>

<main>
  {#if $navIndex == 0}
    <Emoji />
  {:else if $navIndex == 1}
    <Smile />
  {/if}
  <BottomNavbar />
</main>
