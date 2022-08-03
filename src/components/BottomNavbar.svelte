<script lang="ts">
  import Smile from "../assets/smile.svelte";
  import Emoji from "../assets/emoji.svelte";
  import { navIndex } from "../data/store";
  let nav = [
    { icon: Emoji, name: "Emoji" },
    { icon: Smile, name: "Smile" },
  ];
</script>

<section class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
  <div id="tabs" class="flex justify-between">
    {#each nav as { icon, name }, i}
      <button
        on:click={() => navIndex.update((n) => (n = i))}
        class={`w-full ${
          $navIndex === i
            ? "bg-gray-300 fill-red-500"
            : "bg-white stroke-2 stroke-green-500"
        }  justify-center inline-block text-center pt-2 pb-1`}
      >
        <svelte:component this={icon} />
        <span class="tab tab-home block text-xs">{name}</span>
      </button>
    {/each}
  </div>
</section>
