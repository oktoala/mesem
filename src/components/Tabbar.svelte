<script lang="ts">
  import { smiles, tabSmile } from "../data/store";
  import MaximizeIcon from "../assets/maximize.svelte";
</script>

<section class=" w-20 h-screen p-2 z-10 bg-white shadow-md fixed">
  <div class="flex-col flex items-center">
    {#each smiles as smile, i}
      <button
        on:click={() => tabSmile.update((n) => (n = i))}
        title={smile.label}
        class={`menu-item  ${
          $tabSmile === i ? `${smile.color} text-white` : "text-slate-400"
        } whitespace-nowrap w-full  justify-center inline-block text-center rounded-lg p-2  my-1`}
      >
        {smile.title}
      </button>
    {/each}
  </div>
</section>
