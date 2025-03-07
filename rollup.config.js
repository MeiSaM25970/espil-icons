import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json";
import fileSize from "rollup-plugin-filesize";

const config = [
  {
    input: "src/index.ts",
    output: {
      file: "./dist/index.esm.js",
      format: "es",
      sourcemap: true, // اضافه کردن sourcemap برای دیباگ کردن در توسعه
    },
    external: [
      /@babel\/runtime/,
      "react", // React نباید به عنوان external مشخص شود
      "react-dom", // همینطور react-dom
      "next", // و همچنین next.js
    ],
    plugins: [
      babel({
        babelHelpers: "runtime",
        plugins: [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-syntax-dynamic-import", // پشتیبانی از dynamic import
        ],
        exclude: "node_modules/**", // جلوگیری از پردازش node_modules
      }),
      typescript(),
      fileSize(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types, format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/], // فقط فایل‌های CSS از این پکیج‌ها خارجی هستند
  },
];

export default config;
