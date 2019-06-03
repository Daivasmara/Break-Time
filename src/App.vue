<template>
  <div id="app">
    <div class="container">
      <div class="break-time">
        <form action="#">
          <h4 class="teal-text">Break Time</h4>
          <p>every <b class="teal-text">{{ setTime }}</b> minutes</p>
          <p class="range-field">
            <input
              class="rangepicker"
              :class="{disabled : started}"
              v-model="setTime"
              type="range"
              id="test5"
              min="0"
              max="60"
              :disabled="started"
            />
          </p>
        </form>
        <a
          v-if="!started"
          @click="start"
          class="waves-effect waves-light btn-large"
        >
            Start
          <i
            class="material-icons left"
          >
              timer
          </i>
        </a>
        <a
          v-else
          @click="stop"
          class="waves-effect waves-light btn-large red"
        >
          Stop
          <i
            class="material-icons left"
          >
            stop
          </i>
        </a>
        <div v-if="started" class="total-time">
          <p>You have been working for</p>
          <h4 class="teal-text">
            <span v-if="hour !== 0"> {{ hour }}<sup>h</sup></span>
            <span v-if="minute !== 0"> {{ minute }}<sup>m</sup></span>
            <span v-if="second !== 0"> {{ second }}<sup>s</sup></span>
          </h4>
        </div>
      </div>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large teal">
          <i class="large material-icons">settings</i>
        </a>
        <ul>
          <li>
            <a href="#modal1" class="btn-floating blue btn modal-trigger">
              <i class="material-icons">insert_link</i>
            </a>
          </li>
        </ul>
      </div>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4 class="teal-text">Links</h4>
          <div class="input-field col s6">
            <i class="material-icons prefix">insert_link</i>
            <input v-model="link" id="icon_prefix" type="url" class="validate">
            <span
              class="helper-text"
              data-error="wrong"
              data-success="right"
            >
              This is the link that will be opened everytime the set time has passed.
            </span>
            <label for="icon_prefix">Link</label>
          </div>
        </div>
        <div class="modal-footer">
          <a
            href="#!"
            class="modal-close waves-effect waves-green btn-flat teal white-text"
          >
            Close
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.fixed-action-btn');
  const instances = M.FloatingActionButton.init(elems, {
    direction: 'left',
    hoverEnabled: false,
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
});


export default {
  name: 'app',
  data() {
    return {
      started: false,
      setTime: 0,
      time: 0,
      hour: 0,
      minute: 0,
      second: 0,
      link: 'https://www.youtube.com/watch?v=eAbDNUj8pxo',
    };
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.time++;
        this.hour = Math.floor(this.time / 3600);
        this.minute = Math.floor(this.time % 3600 / 60);
        this.second = Math.floor(this.time % 3600 % 60);
      }, 1000);
      this.started = !this.started;
    },
    stop() {
      clearInterval(this.interval),
      this.time = 0,
      this.hour = 0,
      this.minute = 0,
      this.second = 0,
      this.started = !this.started;
    },
  },
  watch: {
    time() {
      if (this.time !== 0 && this.time % (this.setTime * 60) === 0) {
        window.open(this.link);
      }
    },
  },
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand');
#app {
  font-family: 'Patrick Hand', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.break-time {
  margin-top: 100px;
  h4 {
    font-weight: bold;
    font-size: 70px;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    font-size: 30px;
    b {
      position: relative;
      top: 3px;
      font-size: 35px;
      font-weight: bold;
    }
    .disabled {
      cursor: not-allowed;
    }
  }
  a {
    font-weight: bold;
    font-size: 20px;
  }
}
.total-time {
  margin-top: 50px !important;
}
</style>
