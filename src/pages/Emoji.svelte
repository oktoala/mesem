<script lang="ts">
  import { tabEmoji, emojis, alert } from "../data/store";
  import { writeText } from "@tauri-apps/api/clipboard";
  import Lazy from "svelte-lazy";
</script>

<div class="flex mt-12 bg-zinc-50">
  <div class="ml-20 p-5 w-full">
    {#each emojis as emoji, i}
      {#if $tabEmoji === i}
          <h2 class="text-2xl font-semibold mb-5">{emoji.label}</h2>
          <div class="grid grid-auto-fit-[5rem] gap-5 my-2">
            {#each emoji.data as data}
              {#if !data.slug.includes("skin-tone")}
                <button
                  class="p-2 w-full bg-white rounded text-4xl shadow"
                  on:click={async () => {
                    await writeText(data.character);
                    $alert = data.character;
                  }}>{data.character}</button
                >
              {/if}
            {/each}
          </div>
      {/if}
    {/each}
  </div>
</div>
