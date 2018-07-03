import * as React from 'react';

export interface ItemProps {
}

export interface ItemState {
  url: string
}

export class Item extends React.Component<ItemProps, ItemState> {
  constructor(props: ItemProps, context?: any) {
    super(props, context);
    this.state = { url: '' }
  }

  onChange = (e: any) => {
    console.log(this.state.url)
    this.setState({ url: e.target.value })
  }

  onSubmit = (e: any) => {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <div>
          This is Item template
          <input type="text" value={this.state.url} onChange={this.onChange} />
          <button onSubmit={this.onSubmit} type="submit">Submit</button>
        </div>
      </div>
    );
  }
}
