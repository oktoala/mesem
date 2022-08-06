<script lang="ts">
  import SmileIcon from "../assets/smileIcon.svelte";
  import EmojiIcon from "../assets/emojiIcon.svelte";
  import { navIndex } from "../data/store";
  let nav = [
    { icon: EmojiIcon, name: "Emoji" },
    { icon: SmileIcon, name: "Smile" },
  ];
</script>

<section class="flex flex-col inset-x-0 bottom-0 z-10 bg-white shadow">
  <div id="tabs" class="flex justify-between">
    {#each nav as { icon, name }, i}
      <button
        on:click={() => navIndex.update(n => (n = i))}
        class={`w-full ${
          $navIndex === i
            ? "bg-primary-800 fill-primary-50"
            : "bg-white stroke-2 stroke-green-500 fill-primary-800"
        }  justify-center inline-block text-center pt-2 pb-1`}
      >
        <svelte:component this={icon} />
        <span class="tab tab-home  text-primary-50 text-xs">{name}</span>
      </button>
    {/each}
  </div>
</section>
