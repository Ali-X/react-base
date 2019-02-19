import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <div className="counter">
        <button className="counter__btn"
                onClick={() => {
                  this.setState({
                    counter: this.state.counter - 1,
                  })
                }}
        >-
        </button>
        {this.createNumber(this.state.counter)}
        <button className="counter__btn"
                onClick={() => {
                  this.setState({
                    counter: this.state.counter + 1,
                  })
                }}
        >+
        </button>
      </div>
    );
  }

  createNumber(counter) {
    let color;
    if (counter < 0) {
      color = "red";
    } else if (counter > 0) {
      color = "green";
    } else {
      color = "black";
    }
    return <span className={"counter__num " + color}>{this.state.counter}</span>;
  }
}

// ========================================

ReactDOM.render(
  <Counter value="0"/>,
  document.getElementById('root')
);