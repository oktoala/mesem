<script lang="ts">
  import { clipboarded, visible } from "../data/store";
  import Lazy from "svelte-lazy";
  import { writeText } from "@tauri-apps/api/clipboard";
  export let emojis = [];
  export let category: string;
  let slug;
  const changeSlug = (slugEmoji) => (slug = slugEmoji);
</script>

<Lazy height={300} offset={150}>
<section class="section mb-10 mx-10 scroll-mt-20">
    <h2 class={`text-2xl font-semibold mb-5`}>{category}</h2>
    <div class="grid grid-auto-fit-[4rem] gap-5 my-2">
      {#each emojis as emoji}
        {#if !emoji.slug.includes("skin-tone")}
          <button
            on:click={async () => {
              writeText(emoji.character);
              clipboarded.update((e) => (e = emoji.character));
              visible.update((e) => (e = true));
            }}
            class="p-2 w-full text-4xl shadow relative inline-block"
            >{emoji.character}
            <!-- <div class="hidden absolute z-30  ">Dropdown</div> -->
          </button>
        {/if}
      {/each}
      <div />
    </div>
  </section>
</Lazy>
