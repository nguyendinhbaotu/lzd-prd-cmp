import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { parseUrl } from 'app/item.module/action';
import { connect } from 'react-redux';

export interface ItemProps {
  // dispatch: Dispatch<Action<any>>;
  // dispatch: Dispatch<Action<any>>;
  parseUrl: (url: string) => void;
}

export interface ItemState {
  url: string;
}

export class Item extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps, context?: any) {
    super(props, context);
    this.state = { url: '' };
  }

  onChange = (e: any) => {
    console.log(this.state.url);
    this.setState({ url: e.target.value });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    this.props.parseUrl(this.state.url)
    // this.props.dispatch(parseUrl(this.state.url));
  };

  render() {
    return (
      <div>
        <div>
          This is Item template
          <input type="text" value={this.state.url} onChange={this.onChange} />
          <button onSubmit={this.onSubmit} type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
