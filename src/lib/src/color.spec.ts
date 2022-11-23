import { Color } from './color';

describe('Color', () => {
  it('should create an instance', () => {
    expect(new Color()).toBeTruthy();
    console.log(Object.keys(new Color()));
  });
});
