import { gsap } from "gsap";

gsap.from(".earth", {duration: 5, x: -1000,y: -1000});
gsap.to(".earth", {duration: 5, x: 1000,y: 1000});