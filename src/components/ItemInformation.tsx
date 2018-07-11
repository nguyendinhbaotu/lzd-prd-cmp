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
    specs: any[]
}

export class ItemInformationComponent extends React.Component<ItemInformationProps, ItemInformationState> {
    constructor(props) {
        super(props)

        this.state = {
            specs: [
                {
                    "title": "Brand",
                    "value": "Apple"
                },
                {
                    "title": "SKU",
                    "value": "AP564ELAAZW952SGAMZ-75496373"
                },
                {
                    "title": "RAM Memory",
                    "value": "2GB"
                },
                {
                    "title": "Operating System",
                    "value": "iOS"
                },
                {
                    "title": "Type of battery",
                    "value": "Built-in Rechargeable Battery"
                },
                {
                    "title": "Battery Capacity",
                    "value": "2000 - 2999 mAh"
                },
                {
                    "title": "Condition",
                    "value": "New"
                },
                {
                    "title": "Number of SIM Slots",
                    "value": "Single"
                },
                {
                    "title": "Camera Front (Megapixels)",
                    "value": "7 MP and up"
                },
                {
                    "title": "Camera Back (Megapixels)",
                    "value": "11-15MP"
                },
                {
                    "title": "Screen Type",
                    "value": "IPS LCD"
                },
                {
                    "title": "Video Resolution",
                    "value": "2160p"
                },
                {
                    "title": "Processor Type",
                    "value": "Hexa-core"
                },
                {
                    "title": "Screen Size (inches)",
                    "value": "4.7"
                },
                {
                    "title": "PPI",
                    "value": "300-400 PPI"
                },
                {
                    "title": "Phone Features",
                    "value": "Dustproof / Waterproof,Fingerprint Sensor,Touchscreen,GPS,WiFi"
                },
                {
                    "title": "Model",
                    "value": "iPhone 8"
                },
                {
                    "title": "Network Connections",
                    "value": "2G,3G,4G"
                }
            ]
        }
    }

    render() {
        return (
            this.state.specs.map(spec => this.renderSpecRow(spec.title, spec.value, spec.value))
            // <div>
            //     <h1>Title: {this.props.item ? this.props.item.title : ''}</h1>
            //     <h1>Price: {this.props.item ? this.props.item.price : ''}</h1>
            // </div>
        )
    }

    renderSpecRow(key, value1, value2) {
        return (
            <div className="flx-itm spec-section">
                <div className="flx-itm flx-ctn-row-reverse spec-key-container">
                    <h3 className="flx-itm-center spec-key-title p-10">{key}</h3>
                </div>
                <div className="flx-itm-6-12 flx-ctn-row spec-value-container p-l-20">
                    <span className="flx-itm-center spec-key-value">{value1}</span>
                </div>
                <div className="flx-itm-6-12 flx-ctn-row spec-value-container p-l-20">
                    <span className="flx-itm-center spec-key-value">{value2}</span>
                </div>
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