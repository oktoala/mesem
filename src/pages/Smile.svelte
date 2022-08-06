<script lang="ts">
  import { visible, clipboarded, tabSmile } from "../data/store";
  import { writeText } from "@tauri-apps/api/clipboard";
  import Alert from "../components/Alert.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Lazy from "svelte-lazy";
  import { onMount } from "svelte";
  export let smiles;
</script>

<div class="flex mt-12 bg-zinc-50 ">
  <Alert />
  <Sidebar  />
  <div class="ml-20 p-5 w-full">
    {#each smiles as smile, i}
      {#if $tabSmile === i}
        <Lazy height={300} offset={0} class="w-full">
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
                class="p-2 w-full bg-white rounded text-4xl shadow">{data}</button
              >
            {/each}
          </div>
        </Lazy>
      {/if}
    {/each}
  </div>
</div>
