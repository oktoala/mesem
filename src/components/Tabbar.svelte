<script lang="ts">
  import { smiles, tabSmile } from "../data/store";
  
</script>

<section class="block fixed overflow-x-auto inset-x-0 top-0 z-10 bg-white shadow-md">
  <div id="main-menu" class="flex justify-between">
    {#each smiles as smile, i}
      <button
        on:click={() => tabSmile.update(n => n = i)}
        title={smile.label}
        class={`menu-item  ${$tabSmile === i ? `${smile.color} active` : ''} whitespace-nowrap w-full text-white  justify-center inline-block text-center rounded-lg p-2 mx-5 my-1`}
      >
        {smile.title}
      </button>
    {/each}
  </div>
</section>
