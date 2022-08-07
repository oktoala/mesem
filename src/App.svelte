<script lang="ts">
  import { nav } from "./data/store";
  import Emoji from "./pages/Emoji.svelte";
  import Smile from "./pages/Smile.svelte";
  import { invoke } from "@tauri-apps/api/tauri";
  import { onMount } from "svelte";
  import Headerbar from "./components/Headerbar.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import Alert from "./components/Alert.svelte";

  onMount(async () => {
    invoke("close_splashscreen");
  });
</script>

<main class="overflow-hidden select-none ">
  <Alert />
  <Headerbar />
  <Sidebar />
  {#if $nav.index == 0}
    <Emoji />
  {:else if $nav.index == 1}
    <Smile />
  {/if}
</main>
