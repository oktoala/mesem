<script lang="ts">
  import {
    nav,
    emojis,
    smiles,
    title,
  } from "../data/store";
</script>

<section
  class="w-20 top-12 overflow-y-visible  h-screen p-2 z-10 bg-white shadow-lg fixed"
>
  <div class="flex-col flex items-center relative">
    {#if $nav.index === 0}
      {#each emojis as emoji, i}
        <button
          on:click={() => {
            $nav.tab[0].indexSidebar = i;
            $nav.tab[0].label = emoji.label;
            $title = emoji.label;
          }}
          class={`sidebar-button  ${
            $nav.tab[0].indexSidebar === i ? `${emoji.color} active` : "inactive"
          }  group`}
        >
          {emoji.title}
          <span class="tooltip group-hover:scale-100">{emoji.label}</span>
        </button>
      {/each}
    {:else if $nav.index === 1}
      {#each smiles as smile, i}
        <button
          on:click={() => {
            $nav.tab[1].indexSidebar = i;
            $nav.tab[1].label = smile.label;
            $title = smile.label;
          }}
          class={`sidebar-button  ${
            $nav.tab[1].indexSidebar=== i ? `${smile.color} active` : "inactive"
          }  group`}
        >
          {smile.title}
          <span class="tooltip group-hover:scale-100">{smile.label}</span>
        </button>
      {/each}
    {/if}
  </div>
</section>
