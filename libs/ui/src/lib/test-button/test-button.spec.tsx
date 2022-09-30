import { render } from '@testing-library/react';

import TestButton from './test-button';

describe('TestButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestButton />);
    expect(baseElement).toBeTruthy();
  });
});
