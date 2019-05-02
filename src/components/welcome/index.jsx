import React, { Component } from "react";
import Hello from '../hello';
import Clock from '../clock';

class Welcome extends React.Component{
      render() {
            return (
                  <div>
                        <Hello name={this.props.user.name} address={this.props.user.address} />
                        <h2 className="text-center"> Welcome to {this.props.company} </h2>
                        <Clock />
                  </div>
            )
      }
}

export default Welcome;
