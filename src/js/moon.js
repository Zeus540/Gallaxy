import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger);



let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: ".Section2",
     
      start: "20px 100%", // when the top of the trigger hits the top of the viewport

      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
     
 
    }
  
  });

// add animations and labels to the timeline
tl.addLabel("start")
  .from(".earth", {top:'0vh', left : '0vw'  })
  .to(".earth", { top:'150vh', left : '140vw' })
  .addLabel("end")
