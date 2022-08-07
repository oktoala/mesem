<script lang="ts">
  import { navIndex } from "./data/store";
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

<main class="overflow-hidden">
  <Alert />
  <Headerbar />
  <Sidebar />
  {#if $navIndex == 0}
    <p>Makan</p>
    <Emoji />
  {:else if $navIndex == 1}
    <Smile />
  {/if}
</main>
