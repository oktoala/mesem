<script lang="ts">
  import { tabSmile, smiles, alert } from "../data/store";
  import { writeText } from "@tauri-apps/api/clipboard";
</script>

<div class="flex mt-12 bg-zinc-50 ">
  <div class="ml-20 p-5 w-full">
    {#each smiles as smile, i}
      {#if $tabSmile === i}
        <h2 class={`text-2xl text-${smile.color}  font-semibold mb-5`}>
          {smile.label}
        </h2>
        <div class="grid grid-auto-fit gap-5 my-2">
          {#each smile.data as data}
            <button
              on:click={async () => {
                await writeText(data);
                $alert = data;
              }}
              class="p-2 w-full bg-white rounded text-4xl shadow">{data}</button
            >
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</div>
