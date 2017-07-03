import React from 'react';
import { render } from 'react-dom';
import Template from './components/Template';

render(
  <Template headline="Test Headline" count={1234} showCount />,
  document.querySelector('#react-app'),
);
