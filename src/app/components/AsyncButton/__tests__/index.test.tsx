import React from 'react';
import { render } from '@testing-library/react';

import { AsyncButton } from '..';

describe('<AsyncButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AsyncButton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
