import { expect } from 'chai';

import * as express from 'express';
import { default as server } from './server';

describe('server', () => {
  it('should export a server', () => {
    expect(server).to.not.be.null;
  });
});