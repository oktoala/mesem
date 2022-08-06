<script lang="ts">
  import SmileIcon from "../assets/smileIcon.svelte";
  import EmojiIcon from "../assets/emojiIcon.svelte";
  import { navIndex } from "../data/store";
  let nav = [
    { icon: EmojiIcon, name: "Emoji" },
    { icon: SmileIcon, name: "Smile" },
  ];
</script>

<div id="tabs" class="flex w-1/4 justify-between items-center">
  {#each nav as { icon, name }, i}
    <button
      on:click={() => navIndex.update((n) => (n = i))}
      class={`w-full ${
        $navIndex === i
          ? "bg-slate-800 hover:bg-slate-900 fill-slate-100"
          : "hover:bg-slate-300 fill-slate-500"
      } ml-5 my-2 rounded-md justify-center items-center inline-block flex-row text-center py-2 pb-1`}
    >
      <svelte:component this={icon} />
      {#if $navIndex === i}
        <span class="ml-2  text-slate-100 text-sm font-semibold">{name}</span>
      {/if}
    </button>
  {/each}
</div>
