<template>
  <div class="content">
    <h2>About the Association</h2>
    <p>
      The Interplanetary Basketball Association is a league of basketball teams
      that play on various courts across the inhabitable planets of the solar
      system. This handbook is designed to make it easier to standardize court
      sizes across differing environments across the league. Games played in
      courts that do not follow the respective sizes for their planets will not
      be acknowleged as valid.<br /><br />
      This guide can be adjusted for individual existing planets, or, for the
      sake of future-proofing, custom parameters such as gravity can be
      inputted.
    </p>
  </div>
  <div
    :class="['paginator', 'p-right', { transitioning: isTransition }]"
    @click="transition"
  ></div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      isTransition: false,
    };
  },
  methods: {
    transition() {
      this.isTransition = true;
      setTimeout(() => {
        this.$router.push("/team");
      }, 600);
    },
  },
};
</script>

<style scoped>
.content {
  padding: 2rem;
  background-color: #ffffff;
  background-image: url("https://transparenttextures.com/patterns/beige-paper.png");
  background-repeat: repeat;
  height: 100%;
  background-size: 210px;
  background-position: center;
  display: block;
  color: black;
  font-family: "Goldman", sans-serif;
}

h2 {
  text-transform: uppercase;
  font-weight: 400;
  line-height: 1em;
  border-bottom: 1px solid black;
  width: max-content;
  padding-bottom: 0.5em;
}

p {
  padding-top: 1rem;
  font-family: "Space Mono", monospace;
}
</style>