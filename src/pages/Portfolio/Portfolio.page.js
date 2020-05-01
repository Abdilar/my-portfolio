import React from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Portfolio Page</h1>
        <nav>
          <ul>
            <li><Link to="/portfolio/121">item 121</Link></li>
            <li><Link to="/portfolio/132">item 132</Link></li>
            <li><Link to="/portfolio/156">item 156</Link></li>
            <li><Link to="/portfolio/198">item 198</Link></li>
          </ul>
        </nav>
      </section>
    );
  }
}
