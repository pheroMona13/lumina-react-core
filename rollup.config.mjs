import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';
import svgr from '@svgr/rollup'
import packageJson from './package.json' with { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: './tsconfig.build.json',
        declaration: false,
      }),
      postcss({
        extract: true,
        minimize: true,
        sourceMap: true,
        modules: false,
        to: 'dist/index.css',
        plugins: [
          url({
            url: 'inline', // enable inline assets using base64 encoding
            maxSize: 10, // maximum file size to inline (in kilobytes)
            fallback: 'copy', // fallback method to use if max size is exceeded
          }),
        ],
      }),
      svgr({
        icon: true,           // sets width/height to "1em"
        svgoConfig: {         // tweak SVGO options as needed
          plugins: [
            {
              name: 'removeViewBox',
              active: false,
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: '(fill)',
              },
            },
          ]
        }
      })
    ],
  },
];
