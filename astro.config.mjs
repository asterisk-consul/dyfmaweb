// @ts-check
import {
  defineConfig,
} from "astro/config";


// https://astro.build/config
export default defineConfig({
  site: "https://asterisk-consul.github.io",
  base: "/dyfmaweb/",
  output: "static",
  scopedStyleStrategy: 'where',
});
