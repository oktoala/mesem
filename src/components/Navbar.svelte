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
          ? "bg-primary-800 fill-primary-50"
          : "stroke-2 stroke-green-500 fill-primary-800"
      } ml-5 rounded-md justify-center items-center inline-block flex-row text-center pt-2 pb-1`}
    >
      <svelte:component this={icon} />
      {#if $navIndex === i}
        <span class="ml-2  text-primary-50 text-sm font-semibold">{name}</span>
      {/if}
    </button>
  {/each}
</div>
