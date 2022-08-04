<script lang="ts">
  import { smiles } from "../data/store";
  import { invoke } from "@tauri-apps/api/tauri";
  import {writeText} from '@tauri-apps/api/clipboard';
  invoke("custom_command").then((message) => console.log(message));
</script>

<main>
  {#each smiles as smile}
    <section  id={smile.name} class="mb-10 mx-10">
      <h2 class="text-2xl text-zinc-500 font-semibold mb-5">{smile.name}</h2>
      <div class="grid grid-auto-fit gap-4 my-2">
        {#each smile.data as data}
          <button on:click={async () => await writeText(data)} class="text-2xl">{data}</button>
        {/each}

      </div>
    </section>
  {/each}
</main>
