import type { IRunConfiguration } from '@cucumber/cucumber/api';
import path from 'path';

const config: IRunConfiguration = {
  default: {
    require: [path.join(__dirname, 'step-definitions/**/*.ts')],
    requireModule: ['ts-node/register'],
    paths: [path.join(__dirname, 'features/**/*.feature')],
    format: ['progress'],
    publishQuiet: true,
    parallel: 0
  }
};

export = config;
