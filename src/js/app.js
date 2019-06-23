import React from 'react';
import ReactDOM from 'react-dom';

import '../css/style.css';
import reactLogo from '../assets/react-icon.png';

export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <img src={ reactLogo } alt="React" />
        <h1>Hello</h1>
      </div>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('app'));