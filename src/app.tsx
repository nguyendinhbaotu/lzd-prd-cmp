import * as React from 'react';
import './app.scss';
import { HelloWorldContainer, NameEditContainer, UrlInputContainer, ItemInformationContainer } from './components';

export const App = () => {
    return (
        <div>
            <HelloWorldContainer />
            <br />
            <NameEditContainer />
            <br />
            <UrlInputContainer />
            <br />
            <ItemInformationContainer />
        </div>
    );
}
