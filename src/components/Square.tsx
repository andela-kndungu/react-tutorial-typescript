import React from 'react';

interface SquareProps {
  value: string;
  onClick: () => any;
}

interface SquareState {
  value: string;
}

class Square extends React.Component< SquareProps, SquareState > {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={
          () => (
            this.setState({ value: 'X' })
          )
        }
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
