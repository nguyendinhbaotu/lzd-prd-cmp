import * as React from 'react';
import './app.scss';
import {
  HelloWorldContainer,
  NameEditContainer,
  UrlInputContainer,
  ItemInformationContainer
} from './components';

export const App = () => {
  return (
    // <div>
    //     <HelloWorldContainer />
    //     <br />
    //     <NameEditContainer />
    //     <br />
    //     <UrlInputContainer />
    //     <br />
    //     <ItemInformationContainer />
    // </div>
    // <div></div>
    <div className="flx-ctn-col flx-100">
      <div className="flx-itm url-section">
        <div className="flx-itm spec-key-container" />
        <div className="flx-itm-6-12 flx-ctn-col phone-container p-20">
            <div className="flx-itm">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-link"></i></span>
                    </div>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="flx-itm-grow phone-image-container phone-1"></div>
        </div>
        <div className="flx-itm-6-12 flx-ctn-col phone-container p-20">
            <div className="flx-itm">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-link"></i></span>
                    </div>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div className="flx-itm-grow phone-image-container phone-2"></div>
        </div>
      </div>
      <div className="flx-itm flx-ctn-row spec-section">

      </div>
      {/* <div className="flx-itm spec-key-container" />
      <div className="flx-itm-6-12 phone-container" />
      <div className="flx-itm-6-12 phone-container" /> */}
    </div>
  );
};
