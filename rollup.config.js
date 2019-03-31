import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/typed-fx.ts',
  output: [
    {
      file: pkg.main,
      name: 'typed-fx',
      format: 'umd',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
};
