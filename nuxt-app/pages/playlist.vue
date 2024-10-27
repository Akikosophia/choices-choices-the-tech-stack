<template>

<body>
  <main>
    <h1>Lessons</h1>
    <nav>
      <a href="/" class="button-listening">Listening</a>
      <img src="/Music Note 2.svg" class="music-note" alt="music-note" />

      <a href="/" class="button-listening">2.</a>
    </nav>

    <section class="content">
      <h2 class="titel">Own playlists</h2>

      <article class="kaart">
        <article class="octopus-kaart">
          <img src="/Frame 27.svg" class="octopus" alt="octopus" />
          <p class="octopus-tekst">The octopus who was very hungry</p>

          <div class="tijd-en-playbutton">
            <img
              src="/Group 316.svg"
              class="playbutton-orange"
              alt="play-button"
            />
            <p class="time">31 min. 55 sec</p>
          </div>
        </article>

        <article class="maak-playlist">
          <img src="/Group 321.svg" class="playlist-icon" alt="playlist-icon" />
          <p class="playlist-text">Make a playlist!</p>
          <p></p>
          <p class="favorite-text">Add your favorite stories in one playlist</p>
        </article>
      </article>
    </section>

    <section class="content">
      <h2 class="storie-titel">All stories</h2>

      <div class="buttons">
        <div class="button-ned">
          <img
            src="/Rectangle 133.svg"
            class="ned-vlag"
            alt="nederlandse-vlag"
          />
          <a href="/" class="button-text">Dutch</a>
        </div>

        <div class="button-eng">
          <img
            src="/Rectangle 135.svg"
            class="engelse-vlag"
            alt="engelse-vlag"
          />
          <a href="/" class="button-text">English</a>
        </div>
      </div>
    </section>

    <carousel />

    <div>
    <Test />
  </div>

    
  </main>
</body>

</template>

<script>
import Test from '@/components/test.vue';
import Carousel from '@/components/carousel.vue'; 

export default {
  name: 'playlist',
  components: {
    Test,
    Carousel,
  },
};
</script>



<style scoped>
  :root {
    --playlist-bg-color: #471871;
    --btn-color: #1cb854;
    --btn-color-two: #37c6ab;
    --card-bg-color-two: #494375;
    --card-bg-color: #f3f3f3;
    --card-time-font-size: 8px;
    --card-description-font-size: 11px;
    --card-font-color: #000000;
    --languages-btn-color: white;
    --languages-font-color: #1f1230;
    --languages-font-size: 12px;
    --carousel-btn: #9264f4;
    --label-btn: #ccc;
    --heading-font-color: white;
    --playlistcard-font-color:white;
    --icon-btn-color: white;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: var(--playlist-bg-color);
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    transform: translateX(120px);
    gap: 10px;
  }

  h1 {
    font-size: 2em;
    margin-bottom: 10px;
    margin-top: 50px;
    color: var(--heading-font-color);
  }

  a.button-listening {
    font-size: 16px;
    color: var(--heading-font-color);
    background-color: var(--btn-color);
    padding: 8px 90px;
    text-decoration: none;
    border-radius: 5px;
    margin-bottom: 30px;
    transform: translateX(-18px);
  }

  a.button-listening:hover {
    background-color: var(--btn-color);
  }

  a.button-listening:nth-child(3) {
    background-color: var(--btn-color-two);
    opacity: 40%;
  }

  img.music-note {
    position: absolute;
    left: 190px;
    top: 7px;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--bg-color);
  }

  section.content {
  transform: translateX(30px);
  }

  article.kaart article.maak-playlist {
    background-color: var(--card-bg-color-two);
  }

  article.kaart {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-right: 55px;
    margin-bottom: 30px;
  }

  article.kaart article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    height: 200px;
    border-radius: 10px;
    background-color:var(--card-bg-color);
    padding: 10px;
    transform: translateX(-8px);
  }

  .tijd-en-playbutton {
    display: flex;
    align-items: center;
  }

  img.octopus {
    width: 115px;
    height: 95px;
    object-fit: cover;
    border-radius: 8px;
  }

  img.playbutton-orange {
    width: 24px;
    height: 24px;
    transform: translateX(5px);
    margin-bottom: 10px;
  }

  img.playlist-icon {
    margin-top: 22px;
    margin-bottom: 8px;
  }

  .titel {
    font-size: 1.3em;
    transform: translateX(-5px);
  }

  h2 {
    font-size: 1.3em;
    text-align: left;
    color: var(--heading-font-color);
    margin-bottom: 10px;
    transform: translateX(-20px);
  }

  p {
    font-size: var(--card-time-font-size);
    line-height: 12px;
    font-size: 16px;
    text-align: left;
  }

  .octopus-tekst {
    font-size: var(--card-description-font-size);
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
    font-size: 16px;
    margin-left: 5px;
    margin-bottom: 5px;
  }

  .playlist-text {
    color: white;
    font-weight: 600;
    margin: 0;
    font-size: 16px;
    line-height: 12px;
  }

  .favorite-text {
    color: white;
    margin-bottom: 15px;
    margin-left: 5px;
    font-weight: 300;
    line-height: 15px;
    font-size: 16px;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    transform: translateX(-77px);
    text-decoration: none;
  }

  .button-ned,
  .button-eng {
    display: flex;
    align-items: center;
    color: var(--languages-font-color);
    background-color: var(--languages-btn-color);
    padding: 3px 8px;
    border-radius: 10px;
    text-decoration: none;
  }

  .button-text {
    margin-bottom: 0;
    text-decoration: none;
    color: var(--card-font-color);
    font-weight: 500;
    line-height: 18px;
    margin-left: 3px;
     font-size: 16px;
  }

  .ned-vlag,
  .engelse-vlag {
    width: 24px;
    height: 24px;
    margin-right: 3px;
    transform: translateX(-3px);
  }

  h2.storie-titel {
    margin-top: 1em;
      transform: translateX(-75px);
  }


  img.playlist-icon {
    margin-top: 22px;
    margin-bottom: 8px;
  }

  p.time {
    margin-left: 10px;
    margin-top: 15px;
  }

</style>