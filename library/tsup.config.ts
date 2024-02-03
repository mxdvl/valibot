import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/**/*.ts'], // get all source files!
  bundle: false, // do not bundle them… let the consumers do that
  clean: true,
  format: ['esm', 'cjs'],
  dts: false, // this fails https://github.com/egoist/tsup/issues/920
  outDir: './dist',
});
