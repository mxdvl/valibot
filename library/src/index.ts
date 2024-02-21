import * as errors from './error/index.ts';
import * as methods from './methods/index.ts';
import * as regex from './regex.ts';
import * as schemas from './schemas/index.ts';
import * as storages from './storages/index.ts';
import * as transformations from './transformations/index.ts';
import * as types from './types/index.ts';
import * as utils from './utils/index.ts';
import * as validations from './validations/index.ts';

export const v = {
  ...errors,
  ...methods,
  ...regex,
  ...schemas,
  ...storages,
  ...transformations,
  ...types,
  ...utils,
  ...validations,
};

export default v;
