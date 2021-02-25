<template>
  <div class="sounds_players_container">
    <div
      class="player_container"
      v-for="(song, index) in songs"
      :key="song.name"
    >
      <div class="song_info">
        <div class="song_name">{{ song.name }}</div>
        <div class="song_author">{{ song.author }} | {{ song.instrument }}</div>
      </div>
      <div class="song_duration song_duration">
        <input
          type="range"
          min="0"
          max="100"
          value="0"
          class="duration duration_dmc"
          @change="change_duration_dmc(index)"
        />
      </div>
      <div
        class="play_button"
        @click="isPlaying === false ? play_track(index) : pause_track(index)"
      >
        <div class="play_icon">
          <img src="@/assets/play.png" />
        </div>
        <div class="play_text">Odtwórz</div>
      </div>
    </div>

    <ListenMoreOn />

    <div class="player_bottom_bar">
      <div class="song_info">
        <div class="song_name"></div>
        <div class="song_author"></div>
      </div>
      <div class="song_duration">
        <input
          type="range"
          min="0"
          max="100"
          value="0"
          name="duration"
          class="duration duration_non-dmc"
          @change="change_duration_non_dmc(prevPlayed)"
        />
      </div>
      <div class="bottom_buttons">
        <div class="prev_button" @click="prev_track()">
          <img src="@/assets/next.png" />
        </div>
        <div
          class="play_bottom_button"
          @click="
            isPlaying === false
              ? play_track(prevPlayed)
              : pause_track(prevPlayed)
          "
        >
          <img src="@/assets/play-bc.png" />
        </div>
        <div class="next_button" @click="next_track()">
          <img src="@/assets/next.png" />
        </div>
      </div>

      <div class="volume_container">
        <div class="volume_header">Głośność</div>
        <input
          type="range"
          name="volume"
          id="volume"
          min="0"
          max="100"
          value="50"
          @change="change_volume()"
        />
      </div>

      <div class="close_button" @click="hide_player()">
        <img src="@/assets/close.png" />
      </div>
    </div>
  </div>
</template>

<script>
import ListenMoreOn from "@/components/ListenMoreOn.vue";

export default {
  name: "SoundPlayer",
  components: {
    ListenMoreOn
  },
  data() {
    return {
      songs: [
        {
          name: "Wspomnienie",
          path: "@/assets/songs/Wspomnienie.mp3",
          author: "Jacek Rurak",
          instrument: "HANDPAN"
        },
        {
          name: "Taniec Żywiołów",
          path: "@/assets/songs/Taniec-zywiolow.mp3",
          author: "Jacek Rurak",
          instrument: "HANDPAN"
        },
        {
          name: "Cienie",
          path: "@/assets/songs/Cienie.mp3",
          author: "Jacek Rurak",
          instrument: "HANDPAN"
        }
      ],
      autoplay: false,
      isPlaying: false,
      track: document.createElement("audio"),
      prevPlayed: undefined,
      position: undefined,
      sliderPosition: undefined
    };
  },
  methods: {
    play_track(index) {
      // Create audio element
      if (this.isPlaying === false) {
        const songName = document.querySelector(
          ".player_bottom_bar .song_info .song_name"
        );
        const songAuthor = document.querySelector(
          ".player_bottom_bar .song_info .song_author"
        );
        const playIcon = document.querySelectorAll(
          ".player_container .play_icon img"
        );
        const playBottomIcon = document.querySelector(
          ".play_bottom_button img"
        );
        const playerBar = document.querySelector(".player_bottom_bar");
        const durationBar = document.querySelectorAll(".song_duration");

        if (this.prevPlayed !== undefined) {
          // Set "play" button for the previously played songs
          playIcon[this.prevPlayed].src = `${require("@/assets/play.png")}`;

          durationBar[this.prevPlayed].style.display = "none";
        }

        durationBar[index].style.display = "flex";
        durationBar[durationBar.length - 1].style.display = "flex";

        // this.prevPlayed !== index
        // ...Check if previously playes song is the same.
        // If it is, do not set the .src again
        // prevents from playing the song from the beginning every time the button is clicked
        if (this.prevPlayed !== index) {
          if (index === 0) {
            this.track.src = require("@/assets/songs/Wspomnienie.mp3");
          }
          if (index === 1) {
            this.track.src = require("@/assets/songs/Taniec-zywiolow.mp3");
          }
          if (index === 2) {
            this.track.src = require("@/assets/songs/Cienie.mp3");
          }
        }

        // Set value for previously played song
        this.prevPlayed = index;

        // Unhide player bottom bar
        playerBar.classList.remove("player_bottom_bar-inactive");
        playerBar.classList.add("player_bottom_bar-active");

        // Set current Song name and Author
        songName.innerText = this.songs[index].name;
        songAuthor.innerText = `${this.songs[index].author} | ${this.songs[index].instrument}`;

        // Set "stop" button: ||
        playIcon[index].src = `${require("@/assets/stop-wht.png")}`;
        playBottomIcon.src = `${require("@/assets/stop.png")}`;

        // Play audio
        this.track.play();

        // Change duration dynamicaly
        setInterval(() => {
          const durationBars = document.querySelectorAll(
            ".sounds_players_container .duration_dmc"
          ); // dynamicaly rendered
          const durationPlayer = document.querySelector(
            ".sounds_players_container .duration_non-dmc"
          ); // non-dynamicaly rendered

          if (!isNaN(this.track.duration)) {
            this.position =
              this.track.currentTime * (100 / this.track.duration);
            durationBars[index].value = this.position;
            durationPlayer.value = this.position;
          }
        }, 500);

        this.isPlaying = true;
      }
    },
    pause_track() {
      const playBottomIcon = document.querySelector(".play_bottom_button img");
      const playIcon = document.querySelectorAll(
        ".player_container .play_icon img"
      );

      this.track.pause();

      playBottomIcon.src = `${require("@/assets/play-bc.png")}`;
      // Set "play" button for the previously played songs
      playIcon.forEach(icon => {
        icon.src = `${require("@/assets/play.png")}`;
      });

      this.isPlaying = false;
    },
    hide_player() {
      const playerBar = document.querySelector(".player_bottom_bar");
      const playIcon = document.querySelectorAll(
        ".player_container .play_icon img"
      );
      const durationBar = document.querySelectorAll(".song_duration");

      durationBar.forEach(bar => {
        bar.style.display = "none";
      });

      playerBar.classList.add("player_bottom_bar-inactive");
      playerBar.classList.remove("player_bottom_bar-active");

      // close the bar and
      // ...stop playing
      this.track.pause();

      // Set "play" button for the previously played songs
      playIcon.forEach(icon => {
        icon.src = `${require("@/assets/play.png")}`;
      });

      this.isPlaying = false;
    },
    change_volume() {
      const volumeInput = document.querySelector(".volume_container #volume");
      this.track.volume = volumeInput.value / 100;
    },
    next_track() {
      const playIcon = document.querySelectorAll(
        ".player_container .play_icon img"
      );
      const songName = document.querySelector(
        ".player_bottom_bar .song_info .song_name"
      );
      const songAuthor = document.querySelector(
        ".player_bottom_bar .song_info .song_author"
      );
      const durationBar = document.querySelectorAll(".song_duration");

      // Set "play" button for the previously played songs
      playIcon.forEach(icon => {
        icon.src = `${require("@/assets/play.png")}`;
      });

      durationBar[this.prevPlayed].style.display = "none";
      durationBar[durationBar.length - 1].style.display = "flex";

      if (this.prevPlayed === 0) {
        this.track.src = require("@/assets/songs/Taniec-zywiolow.mp3");

        playIcon[1].src = `${require("@/assets/stop-wht.png")}`;

        // Set current Song name and Author
        songName.innerText = this.songs[1].name;
        songAuthor.innerText = `${this.songs[1].author} | ${this.songs[1].instrument}`;

        durationBar[1].style.display = "flex";

        this.prevPlayed = 1;
      } else if (this.prevPlayed === 1) {
        this.track.src = require("@/assets/songs/Cienie.mp3");

        playIcon[2].src = `${require("@/assets/stop-wht.png")}`;

        // Set current Song name and Author
        songName.innerText = this.songs[2].name;
        songAuthor.innerText = `${this.songs[2].author} | ${this.songs[2].instrument}`;

        durationBar[2].style.display = "flex";

        this.prevPlayed = 2;
      } else {
        this.track.src = require("@/assets/songs/Wspomnienie.mp3");

        playIcon[0].src = `${require("@/assets/stop-wht.png")}`;

        // Set current Song name and Author
        songName.innerText = this.songs[0].name;
        songAuthor.innerText = `${this.songs[0].author} | ${this.songs[0].instrument}`;

        durationBar[0].style.display = "flex";

        this.prevPlayed = 0;
      }

      this.track.play();

      // Change duration dynamicaly
      setInterval(() => {
        const durationBars = document.querySelectorAll(
          ".sounds_players_container .duration_dmc"
        ); // dynamicaly rendered
        const durationPlayer = document.querySelector(
          ".sounds_players_container .duration_non-dmc"
        ); // non-dynamicaly rendered

        if (!isNaN(this.track.duration)) {
          this.position = this.track.currentTime * (100 / this.track.duration);
          durationBars[this.prevPlayed].value = this.position;
          durationPlayer.value = this.position;
        }
      }, 500);

      this.isPlaying = true;
    },
    prev_track() {
      const playIcon = document.querySelectorAll(
        ".player_container .play_icon img"
      );
      const songName = document.querySelector(
        ".player_bottom_bar .song_info .song_name"
      );
      const songAuthor = document.querySelector(
        ".player_bottom_bar .song_info .song_author"
      );
      const durationBar = document.querySelectorAll(".song_duration");

      // Set "play" button for the previously played songs
      playIcon.forEach(icon => {
        icon.src = `${require("@/assets/play.png")}`;
      });

      durationBar[this.prevPlayed].style.display = "none";
      durationBar[durationBar.length - 1].style.display = "flex";

      if (this.prevPlayed === 0) {
        this.track.src = require("@/assets/songs/Cienie.mp3");

        playIcon[2].src = `${require("@/assets/stop-wht.png")}`;

        // Set current Song name and Author
        songName.innerText = this.songs[2].name;
        songAuthor.innerText = `${this.songs[2].author} | ${this.songs[2].instrument}`;

        durationBar[2].style.display = "flex";

        this.prevPlayed = 2;
      } else if (this.prevPlayed === 1) {
        this.track.src = require("@/assets/songs/Wspomnienie.mp3");

        playIcon[0].src = `${require("@/assets/stop-wht.png")}`;

        // Set current Song name and Author
        songName.innerText = this.songs[0].name;
        songAuthor.innerText = `${this.songs[0].author} | ${this.songs[0].instrument}`;

        durationBar[0].style.display = "flex";

        this.prevPlayed = 0;
      } else {
        this.track.src = require("@/assets/songs/Taniec-zywiolow.mp3");

        playIcon[1].src = `${require("@/assets/stop-wht.png")}`;

        // Set current Song name and Author
        songName.innerText = this.songs[1].name;
        songAuthor.innerText = `${this.songs[1].author} | ${this.songs[1].instrument}`;

        durationBar[1].style.display = "flex";

        this.prevPlayed = 1;
      }

      this.track.play();

      // Change duration dynamicaly
      setInterval(() => {
        const durationBars = document.querySelectorAll(
          ".sounds_players_container .duration_dmc"
        ); // dynamicaly rendered
        const durationPlayer = document.querySelector(
          ".sounds_players_container .duration_non-dmc"
        ); // non-dynamicaly rendered

        if (!isNaN(this.track.duration)) {
          this.position = this.track.currentTime * (100 / this.track.duration);
          durationBars[this.prevPlayed].value = this.position;
          durationPlayer.value = this.position;
        }
      }, 500);

      this.isPlaying = true;
    },
    change_duration_dmc(index) {
      // change track duration bar for tracks (dynamicaly rendered)
      const durationBars = document.querySelectorAll(
        ".sounds_players_container .duration_dmc"
      );

      this.sliderPosition =
        this.track.duration * (durationBars[index].value / 100);
      this.track.currentTime = this.sliderPosition;
    },
    change_duration_non_dmc() {
      // change track duration bar for bottom player (non dynamicaly rendered)
      const durationPlayer = document.querySelector(
        ".sounds_players_container .duration_non-dmc"
      );

      this.sliderPosition = this.track.duration * (durationPlayer.value / 100);
      this.track.currentTime = this.sliderPosition;
    }
  }
};
</script>

<style lang="scss">
$border: #d1d1d1;
@mixin flex($al, $ju) {
  display: flex;
  align-items: $al;
  justify-content: $ju;
}

.sounds_players_container {
  width: 100%;
  height: auto;
  .player_container {
    width: 100%;
    min-height: 100px;
    background: #000;
    margin-bottom: 30px;
    border-radius: 80px;
    @include flex(center, space-between);
    padding: 0 40px 0 5vw;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
    border: 3px solid rgba(255, 255, 255, 1);
    .play_button {
      width: 140px;
      height: 50px;
      background: #fff;
      border-radius: 80px;
      @include flex(center, space-between);
      padding: 0 25px 0 12px;
      cursor: pointer;
      .play_icon {
        background: #000;
        height: 30px;
        width: 30px;
        border-radius: 50px;
        position: relative;
        img {
          height: 9px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .play_text {
        font-family: "Red Hat Display", sans-serif;
        font-weight: 500;
        font-size: 0.85rem;
      }
      &:hover {
        border: 2px solid rgb(87, 87, 87);
        padding: 2px 23px 2px 10px;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
  .song_info {
    @include flex(flex-start, center);
    flex-direction: column;
    min-width: 20%;
    .song_name {
      color: #fff;
      font-size: 1.5rem;
      font-family: "Red Hat Display", sans-serif;
      font-weight: 900;
      font-style: italic;
      cursor: pointer;
    }
    .song_author {
      color: $border;
      opacity: 0.6;
    }
  }
  .song_duration {
    height: 50px;
    width: 40vw;
    @include flex(center, center);
    display: none;
    .duration {
      width: 100%;
    }
    input[type="range"] {
      -webkit-appearance: none;
      outline: none;
      height: 3px;
      background: #d2d2d2;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: rgb(255, 255, 255);
        height: 15px;
        width: 15px;
        border-radius: 100%;
      }
    }
  }
  .player_bottom_bar {
    width: 100vw;
    height: 15vh;
    background: rgb(0, 0, 0);
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 5vw;
    @include flex(center, space-between);
    transform: translateY(100%);
    border-top: 3px solid rgb(87, 87, 87);
    .bottom_buttons {
      @include flex(center, space-between);
      margin: 0 2vw;
      .play_bottom_button {
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 80px;
        @include flex(center, center);
        padding: 0;
        cursor: pointer;
        position: relative;
        margin: 0 20px;
        img {
          height: 15px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:hover {
          border: 2px solid rgb(87, 87, 87);
          padding: 2px 23px 2px 10px;
          background: rgba(255, 255, 255, 0.8);
        }
      }
      .prev_button,
      .next_button {
        background: #fff;
        height: 35px;
        width: 35px;
        border-radius: 50px;
        position: relative;
        cursor: pointer;
        img {
          height: 12px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:hover {
          border: 2px solid rgb(87, 87, 87);
          padding: 2px;
          background: rgba(255, 255, 255, 0.8);
        }
      }
      .prev_button img {
        transform: translate(-50%, -50%) rotate(180deg);
      }
    }
    .volume_container {
      @include flex(flex-start, center);
      flex-direction: column;
      position: relative;
      height: 50px;
      .volume_header {
        color: $border;
        opacity: 0.6;
        position: absolute;
        top: -20%;
        left: 0;
      }
      #volume {
        -webkit-appearance: none;
        outline: none;
        height: 3px;
        background: rgb(87, 87, 87);
        &::-webkit-slider-thumb {
          -webkit-appearance: none;
          background: rgb(255, 255, 255);
          height: 15px;
          width: 15px;
          border-radius: 100%;
        }
      }
    }
    .close_button {
      background: rgb(87, 87, 87);
      height: 35px;
      width: 35px;
      border-radius: 100px;
      position: relative;
      cursor: pointer;
      margin-left: 3vw;
      img {
        height: 9px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &:hover {
        border: 2px solid rgb(87, 87, 87);
        padding: 2px;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

.player_bottom_bar-active {
  animation: unhidePlayer 0.15s ease-in-out both;
}
.player_bottom_bar-inactive {
  animation: hidePlayer 0.15s ease-in-out both;
}

@keyframes unhidePlayer {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes hidePlayer {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
}
</style>
