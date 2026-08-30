import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch("[data-sy-reveal='words']", {
  onEnter: (batch) => {
    gsap.set(batch, { opacity: 1 });
    const split = SplitText.create(batch, { type: "words", mask: "words" });
    gsap.fromTo(
      split.words,
      { opacity: 1, yPercent: 120, rotate: 5 },
      {
        yPercent: 0,
        rotate: 0,
        ease: "power3.out",
        duration: 0.5,
        stagger: { each: 0.05 },
      },
    );
  },
  start: "top 85%",
});

ScrollTrigger.batch("[data-sy-reveal='lines']", {
  onEnter: (batch) => {
    gsap.set(batch, { opacity: 1 });
    const split = SplitText.create(batch, { type: "lines", mask: "lines" });
    gsap.fromTo(
      split.lines,
      { rotateX: 45, yPercent: 120 },
      {
        rotateX: 0,
        yPercent: 0,
        ease: "power3.out",
        duration: 0.5,
        stagger: { each: 0.05 },
      },
    );
  },
  start: "top 85%",
});

ScrollTrigger.batch("[data-sy-reveal='fade']", {
  onEnter: (batch) => {
    gsap.fromTo(
      batch,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "power2.out",
        duration: 0.6,
        stagger: 0.1,
      },
    );
  },
  start: "top 85%",
});

ScrollTrigger.batch("[data-sy-reveal='']", {
  onEnter: (batch) => {
    batch.forEach((el) => el.classList.add("is-in"));
  },
  start: "top 90%",
});

export function manualRevealIn(elem: HTMLElement) {
  elem.dispatchEvent(new Event("reveal-in"));
}

export function manualRevealOut(elem: HTMLElement) {
  elem.dispatchEvent(new Event("reveal-out"));
}
