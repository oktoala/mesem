<script lang="ts">
  import Alert from "../components/Alert.svelte";
  import Section from "../components/Section.svelte";
  import { onMount } from "svelte";

  // Variable for category
  const categories = {
    smiley: "smileys-emotion",
    people: "people-body",
    animals: "animals-nature",
    food: "food-drink",
    activities: "activities",
    travel: "travel-places",
    objects: "objects",
    symbols: "symbols",
    components: "flags",
  };
  let smiley: any = [];
  let people: any = [];
  const fetchEmoji = async (category: string) => {
    const api = `https://emoji-api.com/categories/${category}?access_key=${
      import.meta.env.VITE_EMOJI_KEY
    }`;
    const response = await fetch(api);
    const data = await response.json();
    return data;
  };

  onMount(async () => {
    smiley = await fetchEmoji(categories.smiley);
    people = await fetchEmoji(categories.people);
  });
</script>

<div class="my-20 overflow-y-hidden">
  <Alert />
  <Section emojis={smiley} category="Smiley & Emoticon" />
  <Section emojis={people} category="People & Body" />
</div>
