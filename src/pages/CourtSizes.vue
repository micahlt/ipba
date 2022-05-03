<template>
  <div class="content">
    <h2>Hoop height</h2>
    <div class="margin-top">
      <canvas id="canvas" style="width: 100%; height: 20vh"></canvas>
    </div>
    <h2 class="margin-top">Court scale</h2>
    <div class="courts" :style="{ '--fs': courtScale }">
      <img
        src="/court.svg"
        alt="earth sized court"
        class="og-court"
        :style="ogVars"
      />
      <img
        src="/court.svg"
        alt="planet sized court"
        class="new-court"
        :style="newVars"
        id="bigCourt"
      />
    </div>
  </div>
  <div
    :class="['paginator', 'p-right', { transitioning: isTransition }]"
    @click="transition"
  ></div>
</template>

<script>
export default {
  name: "CourtSizes",
  data() {
    return {
      isTransition: false,
      team: JSON.parse(window.localStorage.getItem("team")),
      l: 28.6512,
      w: 15.24,
      g: 9.807,
      rimHeight: 3.048,
      courtScale: 7,
      rimScale: 9,
      playerHeight: 1.8288,
    };
  },
  methods: {
    transition() {
      this.isTransition = true;
      setTimeout(() => {
        this.$router.push("/travel");
      }, 600);
    },
  },
  mounted() {
    const canvas = document.getElementById("canvas");
    canvas.setAttribute(
      "width",
      window.getComputedStyle(canvas, null).getPropertyValue("width")
    );
    canvas.setAttribute(
      "height",
      window.getComputedStyle(canvas, null).getPropertyValue("height")
    );
    const pen = canvas.getContext("2d");
    // draw original (earth-sized) goal
    pen.beginPath();
    pen.lineWidth = this.rimScale / 2;
    pen.globalAlpha = 0.5;
    pen.font = "normal 15px sans-serif";
    pen.moveTo(15, canvas.height - 25);
    pen.lineTo(15, canvas.height - this.rimHeight * this.rimScale - 15);
    pen.moveTo(15, canvas.height - 10 - this.rimHeight * this.rimScale);
    pen.lineTo(25, canvas.height - 10 - this.rimHeight * this.rimScale);
    pen.stroke();
    // draw planet goal
    pen.globalAlpha = 1;
    pen.moveTo(85, canvas.height - 25);
    pen.lineTo(85, canvas.height - this.goalHeight * this.rimScale - 15);
    pen.moveTo(85, canvas.height - 10 - this.goalHeight * this.rimScale);
    pen.lineTo(75, canvas.height - 10 - this.goalHeight * this.rimScale);
    pen.stroke();
    // render actual measurements
    pen.fillText(this.rimHeight.toFixed(1) + "m", 0, canvas.height - 5);
    pen.fillText(this.goalHeight.toFixed(1) + "m", 70, canvas.height - 5);
  },
  computed: {
    ogVars() {
      return {
        "--length": this.l + "px",
        "--width": this.w + "px",
      };
    },
    newVars() {
      let l = this.l;
      let w = this.w;
      let g = this.g;
      let t = this.team;
      const ratio = g / t.g; // length over earth's gravity
      l = ratio * l; // team gravity times original length
      w = ratio * w; // team gravity times original width
      console.log(ratio);
      return {
        "--length": l + "px",
        "--width": w + "px",
      };
    },
    goalHeight() {
      return this.rimHeight * (this.g / this.team.g);
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

.margin-top {
  margin-top: 1rem;
}

#canvas {
  width: 100%;
  height: 20vh;
}

.courts {
  margin-top: 1rem;
  position: relative;
  height: 30vh;
}

.og-court,
.new-court {
  position: absolute;
  height: calc(var(--width) * var(--fs));
  width: calc(var(--length) * var(--fs));
}

.og-court {
  opacity: 0.3;
}
</style>