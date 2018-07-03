require('./index.scss')
import * as React from "react";
import { Item } from "app/components/Item";

export interface IHomeProps {}
export interface IHomeState {}
export class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    return (
      <div>
        <Item/>
      </div>
    );
  }
}
