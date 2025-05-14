declare module "vanta/dist/vanta.rings.min" {
  import { Object3D } from "three";

  interface VantaRingsOptions {
    el: HTMLElement | null;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color?: number;
    backgroundAlpha?: number;
    maxDistance?: number;
    size?: number;
    waveHeight?: number;
  }

  interface VantaRingsEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Partial<VantaRingsOptions>) => void;
  }

  function RINGS(options: VantaRingsOptions): VantaRingsEffect;

  export default RINGS;
}
