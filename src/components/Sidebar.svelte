<script lang="ts">
  import { navIndex, smiles, emojis, tabSmile, tabEmoji } from "../data/store";
  let datas = smiles;
</script>

<section
  class="w-20 top-12 overflow-y-auto h-screen p-2 z-10 bg-white shadow-lg fixed"
>
  <div class="flex-col flex items-center">
    {#each datas as data, i}
      <button
        on:click={() => {
          tabSmile.update((n) => (n = i));
        }}
        class={`menu-item  ${
          $tabSmile === i
            ? `${data.color} text-white`
            : "text-slate-400 hover:bg-slate-100"
        } whitespace-nowrap w-full  justify-center inline-block text-center rounded-lg p-2  my-1 group`}
      >
        {data.title}
        <span
          class="absolute w-auto p-2 min-w-max left-20 rounded-md z-50 shadow-md text-white bg-gray-900 text-xs group-hover:scale-100 font-bold transition-all duration-100 origin-left"
          >{data.label}</span
        >
      </button>
    {/each}
  </div>
</section>
