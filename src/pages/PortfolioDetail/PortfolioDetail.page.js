import React from 'react';

export default class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section>
          <h1>Portfolio Detail Page: id => {this.props.match.params.id}</h1>
        </section>
    );
  }
}
