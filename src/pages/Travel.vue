<template>
  <div class="content">
    <h2>Travel between arenas</h2>
    <p>
      Traveling between different planets and entities that participate in the
      IPBA can be difficult. Thankfully, the SpaceX Starships utilizing the
      unique Merlin II engines are capable of travelling at nearly 0.98 times
      the speed of light (over <b>293,700,000</b> meters per second). It is
      notable that travel will still take a considerable amount of time, so
      teams must plan for significant intervals between games. Below is a tool
      that will allow you to calculate the <i>minimum</i> needed travel time at
      max speed on a Starship.
    </p>
    <div class="calculator">
      <h2>From {{ team.planet }} to...</h2>
      <div class="calculations">
        <div
          class="calc"
          v-for="t in teams.filter((t) => {
            return t.planet != team.planet;
          })"
          :key="t.name"
        >
          <h3>{{ t.planet }}</h3>
          <p>{{ timeTraveled(t.distances) }}</p>
        </div>
      </div>
    </div>
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
      team: JSON.parse(window.localStorage.getItem("team")),
      teams: [
        {
          name: "Blazers",
          planet: "Earth",
          desc: "The first IPBA team was the Earth Trail Blazers, founded in 2086.  Their strength is their experience.  In honor of Earth being the origin of humanity, they always get first pick in the yearly draft.",
          g: 9.807,
          distances: {
            Pluto: 512382943000026,
            Mars: 242850009600,
            Venus: 151819076000,
            Mercury: 115035909000,
            Moon: 384472282,
          },
        },
        {
          name: "Pistons",
          planet: "Pluto",
          desc: "The Pluto Pistons have a rough history in the IPBA.  Since originally being founded along with most other teams in 2091, they have been removed from the league twice over debates on whether Pluto can be considered a planet.  The IPBA Board made a decision in 2098 that non-planetary entities should be allowed to join the league, and the Pistons were reinstated.",
          g: 0.62,
          distances: {
            Earth: 512382943000026,
            Mars: 5685580000000,
            Venus: 5805320000000,
            Mercury: 5855610000000,
            Moon: 5763574000000,
          },
        },
        {
          name: "Mavericks",
          planet: "Mars",
          desc: "The Mars Mavericks are known for their pioneering spirit as they were founded along with the Earth Trail Blazers in 2086.  Their competitive spirit is known throughout the IPBA.",
          g: 3.721,
          distances: {
            Earth: 78340000000,
            Venus: 2765350000000,
            Mercury: 170030000000,
            Pluto: 5685580000000,
            Moon: 77994000000,
          },
        },
        {
          name: "Raptors",
          planet: "Venus",
          desc: "Named for the dinosaur-like creatures discovered on Venus in 2049, the Venus Raptors are a far-out team founded in 2091.",
          g: 8.87,
          distances: {
            Earth: 151819076000,
            Pluto: 5805320000000,
            Mars: 2765350000000,
            Mercury: 50290000000,
            Moon: 41054000000,
          },
        },
        {
          name: "Heat",
          planet: "Mercury",
          desc: "The intense climate on Mercury gives the Heat their name.  Some team members have become so used to the high temperatures that they are able to push their bodies to their limits without feeling hot.",
          g: 3.7,
          distances: {
            Earth: 5855610000000,
            Mars: 170030000000,
            Venus: 50290000000,
            Moon: 91344000000,
            Pluto: 5855610000000,
          },
        },
        {
          name: "Magic",
          planet: "Moon",
          desc: "Founded in 2099 as a result of the IPBA's decision to allow non-planetary entities on the league, the Moon Magic is a young team based in the Apollo Basin.",
          g: 1.62,
          distances: {
            Earth: 384472282,
            Mars: 242850009600,
            Venus: 41054000000,
            Mercury: 115035909000,
            Pluto: 5763574000000,
          },
        },
      ],
    };
  },
  methods: {
    transition() {
      this.isTransition = true;
      setTimeout(() => {
        this.$router.push("/team");
      }, 600);
    },
    timeTraveled(distances) {
      const v = 293700000;
      return (distances[this.team.planet] / v).toFixed(1) + " m/s";
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

.calculator {
  margin-top: 3rem;
  text-align: center;
}

.calculator h2 {
  margin: auto;
  border-bottom: none;
}

.calculations {
  width: 100%;
  display: flex;
}

.calc {
  flex-grow: 1;
  font-family: "Space Mono", monospace;
}
</style>