<template>
  <div class="content">
    <img src="/logo-white.svg" alt="logo" />
    <h1>Interplanetary<br />Basketball<br />Association</h1>
    <p>Official Regulator's Handbook</p>
  </div>
  <div
    :class="['paginator', 'p-right', { transitioning: isTransition }]"
    @click="transition"
  ></div>
</template>

<script>
export default {
  name: "Cover",
  data() {
    return {
      isTransition: false,
    };
  },
  methods: {
    transition() {
      this.isTransition = true;
      setTimeout(() => {
        this.$router.push("/about");
      }, 600);
    },
  },
};
</script>

<style scoped>
.content {
  padding: 1rem;
  background: url("cover-bg.jpg");
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Goldman", sans-serif;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 3em;
  line-height: 1em;
}

img {
  height: 20%;
  margin-bottom: 1.5rem;
}

p {
  margin-top: 1rem;
  border-top: 1px solid white;
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-transform: uppercase;
}
</style>