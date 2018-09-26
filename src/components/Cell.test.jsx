import React from 'react';
import renderer from 'react-test-renderer';

import Cell from './Cell';

describe('<Cell />', () => {
  it('should match snapshot', () => {
    const cell = renderer.create(
      <Cell />
    ).toJSON();
    expect(cell).toMatchSnapshot();
  });

  it('should match alive snapshot', () => {
    const cell = renderer.create(
      <Cell alive/>
    ).toJSON();
    expect(cell).toMatchSnapshot();
  });
});
