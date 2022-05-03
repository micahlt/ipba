<script>
export default {
  name: "App",
};
</script>

<template>
  <NavBar />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

body {
  background: radial-gradient(
      circle at 25% 25%,
      #2d2d2d 20%,
      transparent 21%,
      transparent 100%
    ),
    radial-gradient(circle at 75% 75%, #2d2d2d 15%, transparent 16%);
  background-size: 1em 1em;
  background-color: #000000;
}

main {
  margin: auto;
  background: white;
  width: 40vw;
  max-width: 800px;
  color: black;
  height: calc(100vh - 13rem);
  border-radius: 0.4rem;
  box-shadow: 0px 8px 20px 0px rgb(0 0 0 / 75%);
  overflow: hidden;
  position: relative;
  border-bottom-right-radius: 2rem;
}

.paginator {
  background: white;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  bottom: 0;
}

.p-right {
  right: 0;
  border-top-left-radius: 1rem;
  box-shadow: -0.1rem -0.1rem 0.2rem 0.3em rgb(0 0 0 / 30%);
  transition: 0.2s all;
  background: radial-gradient(at top left, #e7e7e7 60%, black 93%);
}

.p-right:hover {
  cursor: pointer;
  transform: scale(1.3);
  transition: 0.2s all;
}

.p-right.transitioning {
  transform: scale(50) rotate(-70deg);
  transition: 0.6s;
  background-color: #e3e3e3;
  background-image: url("https://transparenttextures.com/patterns/beige-paper.png");
  background-size: 5px;
  background-repeat: repeat;
  border-top-left-radius: 0rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
