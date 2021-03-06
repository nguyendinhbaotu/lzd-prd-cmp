import { connect } from 'react-redux';
import { NameEditComponent } from './nameEdit';
import {updateUserProfileName} from '../../actions/updateUserProfilename';
import { RootState } from '../../reducers'

const mapStateToProps = (state : RootState) => {
  return {
    userName: state.userProfileReducer.firstname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name : string) => dispatch(updateUserProfileName(name))
  }
}

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameEditComponent);
