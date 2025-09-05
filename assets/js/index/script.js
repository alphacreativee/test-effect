document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  //
  gsap.registerPlugin(ScrollTrigger);
  const imgClips = gsap.utils.toArray(".clip-img");
  imgClips.forEach((clip) => {
    gsap.fromTo(
      clip,
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        clipPath: "inset(0 0 0 0)",
        scrollTrigger: {
          trigger: clip,
          start: "top 70%",
          end: "bottom 70%",
          markers: true,
        },
      }
    );
  });
  const imgClipRs = gsap.utils.toArray(".clip-img-reverse");
  imgClipRs.forEach((clip) => {
    gsap.fromTo(
      clip,
      {
        clipPath: "inset(0 0 0 100%)",
      },
      {
        clipPath: "inset(0 0 0 0)",
        scrollTrigger: {
          trigger: clip,
          start: "top 70%",
          end: "bottom 70%",
          markers: true,
        },
      }
    );
  });
});
