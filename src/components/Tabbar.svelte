<script lang="ts">
  import { smiles } from "../data/store";
</script>

<section class="block fixed inset-x-0 top-0 z-10 bg-white shadow">
  <div id="main-menu" class="flex justify-between">
    {#each smiles as smile}
      <a
        href={`#${smile.name}`}
        class={`menu-item w-full justify-center inline-block text-center pt-2 mx-5 my-1 pb-1`}
      >
        {smile.name}
      </a>
    {/each}
  </div>
</section>
