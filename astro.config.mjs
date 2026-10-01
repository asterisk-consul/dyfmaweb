// @ts-check
import {
  defineConfig,
} from "astro/config";


// https://astro.build/config
export default defineConfig({
  site: "https://www.dyfma.ar",
  base: "/",
  output: "static",
  scopedStyleStrategy: 'where',
});
