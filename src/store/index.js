import { proxy } from "valtio";

const state = proxy({
  page: "intro",
  color: "#198754",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./morocco.png",
  fullDecal: "./morocco.png",
});

export default state;
