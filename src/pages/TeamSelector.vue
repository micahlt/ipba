<template>
  <div class="content">
    <h2>Choose a team</h2>
    <div class="teams">
      <Team
        v-for="t in teams"
        :key="t.name"
        :name="t.name"
        :planet="t.planet"
        @click="select(t)"
        :selected="selected.name == t.name"
      />
      <Team name="+ Custom" planet="add another" @click.prevent />
    </div>
    <h2 class="margin-top">The {{ selected.planet }} {{ selected.name }}</h2>
    <p>{{ selected.desc }}</p>
  </div>
  <div
    :class="['paginator', 'p-right', { transitioning: isTransition }]"
    @click="transition"
  ></div>
</template>

<script>
export default {
  name: "TeamSelector",
  data() {
    return {
      isTransition: false,
      selected: {
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
        this.$router.push("/courts");
      }, 600);
    },
    select(t) {
      this.selected = t;
      window.localStorage.setItem("team", JSON.stringify(t));
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

.teams {
  margin-top: 1rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.margin-top {
  margin-top: 1.5rem;
}
</style>