import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const scssVariables = 'src/scss/variables.scss';
const { name, distDirs } = require('./package.json');

export const config: Config = {
  namespace: name,
  taskQueue: 'async',
  plugins: [
    sass({
      injectGlobalPaths: [scssVariables],
    }),
  ],
  globalStyle: 'src/scss/init.scss',
  devServer: {
    reloadStrategy: 'hmr',
    openBrowser: false,
  },
  outputTargets: [
    // creates /dist dir
    {
      type: 'dist',
      dir: `${distDirs.stencil}`,
      copy: [
        // copy fonts into static for storybook and stencil build
        { src: 'fonts' },
      ],
    },
    // one file in es6
    {
      type: 'dist-custom-elements-bundle',
      dir: `${distDirs.stencil}/custom-elements`,
    },
    // creates readme.md for components
    {
      type: 'docs-readme',
      dir: distDirs.stencil,
    },
    // create components(.d.ts|json) into dist
    {
      type: 'docs-json',
      file: `${distDirs.stencil}/components.json`,
    },
  ],
};
