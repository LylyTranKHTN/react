import React from 'react'

function Hello (props) {
      return (
            <div>
                  <h1>Hello, {props.name}</h1>
                  <p>From, {props.address}</p>
            </div>
      )
}

export default Hello;
