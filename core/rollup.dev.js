import baseConfig from "./rollup.base";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import html from 'rollup-plugin-fill-html';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      open: true,
      contentBase: ['', 'build'],
    }),
    livereload('build'),
    html({
      template: 'src/index.html',
      filename: 'index.html'
    }),
  ]
};
