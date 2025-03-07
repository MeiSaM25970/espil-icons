import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
const packageJson = require("./package.json");
import fileSize from "rollup-plugin-filesize";
const config = [
  {
    input: "src/index.ts",
    output: {
      file: "./dist/index.esm.js",
      format: "es",
    },
    external: [/@babel\/runtime/, "react"],
    plugins: [
      babel({
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      typescript(),
      fileSize(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];

export default config;
