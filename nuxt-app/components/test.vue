<template>

<section class="content-one">
  <h2>Liked playlist</h2>

  <article class="pinguin-kaart">
    <article class="pinguin-card">
      <img src="/Frame 27 (1).svg" class="pinguin" alt="pinguin" />
      <p class="pinguin-tekst">Penguin activities!</p>

      <div class="pinguin-icon">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Heart.svg" class="heart-icon" alt="heart-icon" />
      </div>
    </article>

    <article class="pinguin-card">
      <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
      <p class="kerstpinguin-tekst">
        Christmas stories, for the festive season.
      </p>

      <div class="pinguin-icons">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Heart.svg" class="heart-icon" alt="heart-icon" />
      </div>
    </article>
  </article>
</section>

<section class="last-content">
  <h2>Suggested playlist</h2>

  <article class="pinguin-kaart">
    <article class="pinguin-card">
      <img src="/Frame 27 (1).svg" class="pinguin" alt="pinguin" />
      <p class="pinguin-tekst">Penguin activities!</p>

      <div class="pinguin-icon">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
      </div>
    </article>

    <article class="pinguin-card">
      <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
      <p class="kerstpinguin-tekst">
        Christmas stories, for the festive season.
      </p>

      <div class="pinguin-icons">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
      </div>
    </article>

    <article class="pinguin-card">
      <img src="/Frame 27 (4).svg" class="pinguin" alt="pinguin" />
      <p class="kerstpinguin-tekst">
        Christmas stories, for the festive season.
      </p>

      <div class="pinguin-icons">
        <img src="/Group 316.svg" class="playbutton" alt="play-button" />
        <p class="tijd">31 min. 55 sec</p>

        <img src="/Icon.svg" class="empty-heart" alt="empty-heart-icon" />
      </div>
    </article>
  </article>
</section>

  
</template>

<script>
export default {
  name: 'TestComponent',
};
</script>

<style>
section.content-one {
    margin-top: 30px;
     transform: translateX(70px);
  }

  section.last-content {
    transform: translateX(70px);
  }

  h2 {
    color: white;
    transform: translateX(10px);
    margin-bottom: 10px;
    margin-top: 20px;
  }

  article.pinguin-kaart {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
  }

  article.pinguin-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 120px;
    height: 190px;
    border-radius: 10px;
    background-color: white;
    padding: 10px;
    transform: translateX(8px);
  }

  img.pinguin {
    width: 120px;
    height: 95px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 3px;
  }

  .pinguin-tekst {
    font-size: 16px;
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
    margin-bottom: 10px;
  }

  .kerstpinguin-tekst {
   font-size: 16px;
    text-align: left;
    color: var(--card-font-color);
    line-height: 16.5px;
    margin: 0;
    margin-bottom: 5px;
  }

  .pinguin-icon {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 5px;
  }

  .pinguin-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  img.empty-heart {
    width: 22px;
    height: 30px;
    transform: translateX(5px);
  }

  img.playbutton {
    width: 24px;
    height: 24px;
    transform: translateX(-2px);
  }

  img.heart-icon {
    width: 28px;
    height: 30px;
    transform: translateX(5px);
  }

  p.tijd {
    transform: translateX(2px);
    font-size: var(--card-time-font-size);
    line-height: 16px;
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
    margin-left: 5px;
  }

  @media screen and (min-width: 375px) {
     
  h2 {
      transform: translateX(5px);
  }

  article.pinguin-card {
    transform: translateX(5px);
  }
  
  }

  @media screen and (min-width: 425px) {
     
  h2 {
      transform: translateX(5px);
  }

  article.pinguin-card {
    transform: translateX(5px);
  }


  }
</style>
