
const Welcome = () => {

  const template = `
  
  <div class="reveal">
  <div class="slides">
    <section data-background-video="../assets/images/video.mp4"
    data-background-video-loop data-background-video-muted>Slide 1</section>
    <section >
    <p class="fragment highlight-red">Slide up while fading in</p>
        <p class="fragment fade-in-then-out">Fade in, then out</p>
       
    </section>
    <section>Nest1</section>

    <section>
   
    <section>Nest3</section>
    <section >SUN</section>
    <section>Nest5</section>

    </section>
   
    <section>Nest5</section>
    <section>Slide 3</section>
    <section>Slide 4</section>
  </div>
</div>

  `;

	return template;
};

export default Welcome;
