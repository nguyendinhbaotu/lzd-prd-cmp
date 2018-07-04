require('./index.scss')
import * as React from "react";
import { Item } from "app/item.module/Item";
import { Dispatch, Action } from "redux";
import { parseUrl, PARSE_URL } from "app/item.module/action";
import { connect } from "react-redux";

export interface HomeProps {
  dispatch: Dispatch<Action<any>>;
}
export interface HomeState {}
export class Home extends React.Component<HomeProps, HomeState> {

  _parseUrl = (url: string) => {
    const { dispatch } = this.props;
    console.log(url)
    dispatch(parseUrl(url))
  }

  render() {
    
    return (
      <div>
        <Item parseUrl={this._parseUrl}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

const map

export default connect(mapStateToProps)(Home);
