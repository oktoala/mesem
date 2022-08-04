<script lang="ts">
  import { visible, clipboarded } from "../data/store";
  import { fly } from "svelte/transition";
  let status = "waiting...";
</script>

{#if $visible}
  <div
    transition:fly={{ y: -100, duration: 500 }}
    on:introstart={() => (status = "intro started")}
    on:outrostart={() => (status = "outro started")}
    on:introend={() => visible.update((e) => (e = false))}
    on:outroend={() => (status = "outro ended")}
    class="p-2 bg-primary-800 items-center fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-50 leading-none lg:rounded-full flex lg:inline-flex"
  >
    <span
      class="flex rounded-full bg-primary-500 uppercase px-2 py-1 text-xs font-bold mr-3"
    >
      {$clipboarded}
    </span>
    <span class="font-semibold mr-2 text-left flex-auto">
      Tercopy ke Clipboard
    </span>
  </div>
{/if}
