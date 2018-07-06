import * as React from "react";
import { RootState } from "../reducers";
import { parseUrl } from "../actions/parseUrl";
import { connect } from "react-redux";
import { ItemInformation } from "../common/models";

interface ItemInformationProps {
    url: string,
    item: ItemInformation,
    dispatchParseUrlAction: (url: string) => void
}

interface ItemInformationState {
}

export class ItemInformationComponent extends React.Component<ItemInformationProps, ItemInformationState> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Title: {this.props.item ? this.props.item.title : ''}</h1>
                <h1>Price: {this.props.item ? this.props.item.price : ''}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        url: state.itemInformationReducer.url,
        item: state.itemInformationReducer.item
    };
};

const mapDispatchToProps = dispatch => {
    let props = {
        dispatchParseUrlAction: (url: string) => dispatch(parseUrl(url))
    };
    return props
};

export const ItemInformationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemInformationComponent);