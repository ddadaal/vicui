import postcss from "rollup-plugin-postcss";
import nested from 'postcss-nested';
import atImport from "postcss-import";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import html from 'rollup-plugin-fill-html';

const dev = 'development';
const prod = 'production';
const env = (process.env.NODE_ENV === prod || process.env.NODE_ENV === dev) ? process.env.NODE_ENV : dev;

const plugins = [
  postcss({
    plugins: [
      nested(),
      atImport(),
    ],
    extract: "build/vicui-core.css",
    minimize: true,
  }),
];

if (env === dev) {
  plugins.push(
    serve({
      open: true,
      contentBase: ['', 'build'],
    }),
    livereload('build'),
    html({
      template: 'src/index.html',
      filename: 'index.html'
    }),
  );
}

export default {
  input: "src/index.js",
  output: {
    file: "build/index.js",
    format: "esm"
  },
  plugins,
};
