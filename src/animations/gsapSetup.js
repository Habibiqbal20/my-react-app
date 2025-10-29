import { gsap } from "gsap";
import {
  Draggable,
  EaselPlugin,
  Flip,
  Observer,
  PixiPlugin,
  ScrambleTextPlugin,
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase,
} from "gsap/all";


gsap.registerPlugin(
  Draggable,
  EaselPlugin,
  Flip,
  Observer,
  PixiPlugin,
  ScrambleTextPlugin,
  ScrollTrigger,
  ScrollSmoother,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
);

export default gsap;