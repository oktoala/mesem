<script lang="ts">
  import { smiles } from "../data/store";
</script>

<section class="block fixed overflow-x-auto inset-x-0 top-0 z-10 bg-white shadow-md">
  <div id="main-menu" class="flex justify-between">
    {#each smiles as smile}
      <a
        href={`#${smile.name}`}
        title={smile.label}
        class={`menu-item  ${smile.color} whitespace-nowrap w-full text-white  justify-center inline-block text-center rounded-lg p-2 mx-5 my-1`}
      >
        {smile.title}
      </a>
    {/each}
  </div>
</section>
