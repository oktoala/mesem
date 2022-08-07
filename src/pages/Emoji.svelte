<script lang="ts">
  import { nav, emojis, alert } from "../data/store";
  import { writeText } from "@tauri-apps/api/clipboard";
</script>

<div class="flex mt-12 bg-zinc-50">
  <div class="ml-20 p-5 w-full">
    {#each emojis as emoji, i}
      {#if $nav.tab[0].indexSidebar === i}
          <div class="grid grid-auto-fit-[5rem] gap-5 my-2">
            {#each emoji.data as data}
              {#if !data.slug.includes("skin-tone")}
                <button
                  class="p-2 w-full bg-white rounded text-4xl shadow"
                  on:dblclick={async () => {
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
