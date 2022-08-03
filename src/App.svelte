<script lang="ts">
  import BottomNavbar from "./components/BottomNavbar.svelte";
  import { navIndex } from "./data/store";
  let index;

  navIndex.subscribe(value => {
    index = navIndex;
  })
</script>

<main>
  {#if index == 0}
    <p class="text-red-600">Makan</p>
  {:else if index == 1}
    <p class="text-green-600">Minum</p>
  {/if}
  <BottomNavbar  />
</main>
