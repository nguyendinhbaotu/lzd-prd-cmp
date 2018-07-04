import * as React from 'react';

export interface HelloWorldProps {
  userName: string
  url: string
}
// export const HelloWorldComponent = (props : HelloWorldProps) => {
//   return (
//     <div>
//       <h2>Hello Mr. {props.userName} !</h2>
//       <h2>Here your url: {props.url} </h2>
//     </div>
//   );
// }

export class HelloWorldComponent extends React.Component<HelloWorldProps> {
  render() {
    return (
      <div>
        <h2>Hello Mr. {this.props.userName} !</h2>
        <h2>Here your url: {this.props.url} </h2>
      </div>
    );
  }
}