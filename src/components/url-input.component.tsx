import * as React from "react";
import { RootState } from "../reducers";
import { parseUrl } from "../actions/parseUrl";
import { connect } from "react-redux";

interface UrlInputProps {
  dispatchParseUrlAction: (url: string) => void;
}

interface UrlInputState {
  url: string
}

export class UrlInputComponent extends React.Component<UrlInputProps, UrlInputState> {
  constructor(props) {
    super(props);

    this.state = {
      url: ""
    };
  }

  onChange = (e) => {
    console.log(this.state.url);
    this.setState({ url: e.target.value });
  }

  onClick = (e) => {
    console.log('onClick')
    this.props.dispatchParseUrlAction(this.state.url)
  }


  render() {
    return (
      <div>
        <label>Input Url Here:</label>
        <input value={this.state.url} onChange={this.onChange} />
        <button type="button" onClick={this.onClick}> Parse Url </button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    url: state.itemInformationReducer.url
  };
};

const mapDispatchToProps = dispatch => {
  let props = {
    dispatchParseUrlAction: (url: string) => dispatch(parseUrl(url))
  };
  debugger
  return props
};

export const UrlInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UrlInputComponent);