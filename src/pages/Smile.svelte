<script>
  import { visible, clipboarded, smiles } from "../data/store";
  import { invoke } from "@tauri-apps/api/tauri";
  import { writeText } from "@tauri-apps/api/clipboard";
  import Alert from "../components/Alert.svelte";
  import Tabbar from "../components/Tabbar.svelte";
  import scrollSpy from "simple-scrollspy";
  import { onMount } from "svelte";
  onMount(() => {
    scrollSpy("#main-menu", {
      sectionClass: ".scrollspy",
      menuActiveTarget: ".menu-item",
      offset: 50,
      smoothScroll: true,
    });
  });
  // $: invoke("custom_command").then((message) => alert(message));
</script>

<main class="mb-20 mt-5">
  <Alert />
  <Tabbar />
  {#each smiles as smile}
    <section
      id={smile.name}
      class="section scrollspy mb-10 mt-10 mx-10 scroll-mt-12"
    >
      <h2 class="text-2xl text-zinc-500 font-semibold mb-5">{smile.name}</h2>
      <div class="grid grid-auto-fit gap-5 my-2">
        {#each smile.data as data}
          <button
            on:click={async () => {
              writeText(data);
              clipboarded.update((e) => (e = data));
              visible.update((e) => (e = true));
            }}
            class="p-2 w-full text-4xl shadow-lg">{data}</button
          >
        {/each}
      </div>
    </section>
  {/each}
</main>
