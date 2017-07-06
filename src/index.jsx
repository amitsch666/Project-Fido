import React from 'react';
import { render } from 'react-dom';
import Template from './components/Template';
import 'bootstrap/dist/css/bootstrap.css';

render(
  <Template headline="Test Headline" />,
  document.querySelector('#react-app'),
);
