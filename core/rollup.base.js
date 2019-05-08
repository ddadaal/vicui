import postcss from "rollup-plugin-postcss";
import nested from 'postcss-nested';
import atImport from "postcss-import";


export default {
  input: "src/index.js",
  output: {
    file: "build/index.js",
    format: "esm"
  },
  plugins: [
    postcss({
      plugins: [
        nested(),
        atImport(),
      ],
      extract: "build/vicui-core.css",
      minimize: true,
    }),
  ],
}
