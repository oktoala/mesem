<script lang="ts">
  import { navIndex, emojis, tabEmoji, smiles, tabSmile } from "../data/store";
</script>

<section
  class="w-20 top-12 overflow-y-visible h-screen p-2 z-10 bg-white shadow-lg fixed"
>
  <div class="flex-col flex items-center relative">
    {#if $navIndex === 0}
      {#each emojis as emoji, i}
        <button
          on:click={() => tabEmoji.update((n) => (n = i))}
          class={`sidebar-button  ${
            $tabEmoji === i ? `${emoji.color} active` : "inactive"
          }  group`}
        >
          {emoji.title}
          <span class="tooltip group-hover:scale-100">{emoji.label}</span>
        </button>
      {/each}
    {:else if $navIndex === 1}
      {#each smiles as smile, i}
        <button
          on:click={() => tabSmile.update((n) => (n = i))}
          class={`sidebar-button  ${
            $tabSmile === i ? `${smile.color} active` : "inactive"
          }  group`}
        >
          {smile.title}
          <span class="tooltip group-hover:scale-100">{smile.label}</span>
        </button>
      {/each}
    {/if}
  </div>
</section>
