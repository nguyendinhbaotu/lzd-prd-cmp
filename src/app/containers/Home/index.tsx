require('./index.scss')
import * as React from "react";
import { Item } from "app/item.module/Item";
import { Dispatch, Action } from "redux";
import { parseUrl } from "app/item.module/action";

export interface HomeProps {
  dispatch: Dispatch<Action<any>>;
}
export interface HomeState {}
export class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <Item
          parseUrl={(t) => this.props.dispatch(parseUrl(t))}
        />
      </div>
    );
  }
}
