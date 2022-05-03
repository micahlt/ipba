<template>
  <div :class="['team', { selected }]">
    <h1>{{ name[0] }}</h1>
    <p>
      <span class="name">{{ name }}</span
      ><br />
      {{ planet }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: {
    name: String,
    planet: String,
    selected: Boolean,
  },
};
</script>

<style scoped>
.team {
  width: max-content;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 2px solid black;
  border-radius: 0.4rem;
  text-align: center;
  width: 100%;
  cursor: pointer;
}

p {
  font-family: "Space Mono", monospace;
  font-size: 0.7rem;
}

.name {
  font-family: "Goldman", sans-serif;
  font-size: 1rem;
}

.team:hover,
.team.selected {
  background-color: black;
  background-image: url("https://transparenttextures.com/patterns/beige-paper.png");
  color: white;
  background-size: 100px;
}
</style>