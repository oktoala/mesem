<script lang="ts">
  import { visible, clipboarded, tabSmile } from "../data/store";
  import { writeText } from "@tauri-apps/api/clipboard";
  import Alert from "../components/Alert.svelte";
  import Tabbar from "../components/Tabbar.svelte";
  import Lazy from "svelte-lazy";
  import { onMount } from "svelte";
  export let smiles;
</script>

<div class="mb-20 mt-10 overflow-y-hidden ">
  <Alert />
  <Tabbar />
  {#each smiles as smile, i}
    {#if $tabSmile === i}
      <section
        id={smile.name}
        class="section scrollspy mb-10 mt-10 mx-10 scroll-mt-20"
      >
        <Lazy height={300} offset={0} class="">
          <h2 class={`text-2xl text-${smile.color}  font-semibold mb-5`}>
            {smile.label}
          </h2>
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
        </Lazy>
      </section>
    {/if}
  {/each}
</div>
