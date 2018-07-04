import {connect} from 'react-redux';
import {HelloWorldComponent} from './helloWorld';
import { RootState } from '../../reducers';

const mapStateToProps = (state: RootState) => {
  return {
    userName: state.userProfileReducer.firstname,
    url: state.itemInformationReducer.url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldComponent);
