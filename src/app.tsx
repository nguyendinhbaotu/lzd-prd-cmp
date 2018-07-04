import * as React from 'react';
import {HelloWorldContainer, NameEditContainer} from './components';
import { UrlInputContainer } from './components/url-input.component';
// import { UrlInputContainer } from './components/url-input.component';

export const App = () => {
  return (
    <div>
      <HelloWorldContainer/>
      <br/>
      <NameEditContainer/>
      <br/>
      <UrlInputContainer/>
    </div>
  );
}
