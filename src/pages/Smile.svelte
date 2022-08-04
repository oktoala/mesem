<script lang="ts">
  import {  visible,clipboarded,  smiles } from "../data/store";
  import { invoke } from "@tauri-apps/api/tauri";
  import { writeText } from "@tauri-apps/api/clipboard";
  import Alert from "../components/Alert.svelte";
  invoke("custom_command").then((message) => console.log(message));
</script>

<main class="mb-20 mt-5">
  <Alert />
  {#each smiles as smile}
    <section id={smile.name} class="mb-10 mx-10">
      <h2 class="text-2xl text-zinc-500 font-semibold mb-5">{smile.name}</h2>
      <div class="grid grid-auto-fit gap-5 my-2">
        {#each smile.data as data}
          <button
            on:click={async () => {
              writeText(data);
              clipboarded.update(e => e = data);
              visible.update((e) => (e = true));
            }}
            class="p-2 w-full text-4xl shadow-lg">{data}</button
          >
        {/each}
      </div>
    </section>
  {/each}
</main>
