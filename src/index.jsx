import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/fido.scss';
import Template from './components/Template';

render(
  <Template headline="Test Headline" />,
  document.querySelector('#react-app'),
);
