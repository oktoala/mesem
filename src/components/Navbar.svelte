<script lang="ts">
  import { nav, title } from "../data/store";
  import SmileIcon from "../assets/smileIcon.svelte";
  import EmojiIcon from "../assets/emojiIcon.svelte";
  let navBar = [
    {
      icon: EmojiIcon,
      name: "Emoji",
    },
    {
      icon: SmileIcon,
      name: "Smile",
    },
  ];
</script>

<div id="tabs" class="flex w-1/3 justify-between items-center">
  {#each navBar as { icon, name }, i}
    <button
      on:click={() => {
        $nav.index = i;
        $title = $nav.tab[$nav.index].label;
      }}
      class={`w-full ${
        $nav.index === i
          ? "bg-slate-800 hover:bg-slate-900 fill-slate-100"
          : "hover:bg-slate-300 fill-slate-500"
      } ml-5 my-2 rounded-md justify-center items-center inline-block flex-row text-center py-2 pb-1`}
    >
      <svelte:component this={icon} />
      {#if $nav.index === i}
        <span class="ml-2 hidden sm:inline  text-slate-100 text-sm font-semibold">{name}</span>
      {/if}
    </button>
  {/each}
</div>
