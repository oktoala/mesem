<script lang="ts">
  import Alert from "../components/Alert.svelte";
  import Section from "../components/Section.svelte";
  export let smiley: any;
  export let people: any;
  export let animals: any;
  export let food: any;
  export let activities: any;
  export let travel: any;
  export let objects: any;
  export let symbols: any;
  export let flags: any;
</script>

<div class="my-10 overflow-y-hidden">
  <Alert />
  <Section emojis={smiley} category="Smiley & Emoticon" />
  <Section emojis={people} category="People & Body" />
  <Section emojis={animals} category="Animals & Nature" />
  <Section emojis={food} category="Food & Drink" />
  <Section emojis={activities} category="Activities" />
  <Section emojis={travel} category="Travel Places" />
  <Section emojis={objects} category="Objects" />
  <Section emojis={symbols} category="Symbols" />
  <Section emojis={flags} category="Flags" />
</div>
