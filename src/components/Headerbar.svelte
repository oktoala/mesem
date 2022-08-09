<script lang="ts">
  import { title } from "../data/store";
  import { appWindow } from "@tauri-apps/api/window";
  import maximizeIcon from "../assets/title-bar/maximize.svelte";
  import closeIcon from "../assets/title-bar/close.svelte";
  import minimizeIcon from "../assets/title-bar/minimize.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div
  data-tauri-drag-region
  class="h-12 bg-gray-200 flex select-none justify-between items-center px-2 fixed top-0 left-0 right-0  "
>
  <h1 class="text-lg font-bold w-44">{$title}</h1>
  <Navbar />
  <div class="decoration">
    <div
      class="titlebar-button rounded-full hover:bg-slate-50"
      on:click={() => appWindow.minimize()}
      id="titlebar-minimize"
    >
      <svelte:component this={minimizeIcon} />
    </div>
    <div
      class="titlebar-button rounded-full hover:bg-slate-50"
      on:click={async () => {
        if (await appWindow.isMaximized()) {
          appWindow.unmaximize();
        } else {
          appWindow.maximize();
        }
      }}
      id="titlebar-maximize"
    >
      <svelte:component this={maximizeIcon} />
    </div>
    <div
      class="titlebar-button rounded-full hover:bg-red-500 group"
      on:click={() => appWindow.hide()}
      id="titlebar-close"
    >
      <svelte:component this={closeIcon} />
    </div>
  </div>
</div>

<style>
  .titlebar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
</style>
