import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

function ReactBase(props) {
  return (
    <div>
      <Task1/>
      <Task2/>
    </div>
  );
}

class Task1 extends React.Component {
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

class Task2 extends React.Component {
  n = 0;

  render() {
    return (
      <div>
        <button>Show Users</button>
        <div>Total: {this.n} users</div>
        <div>Checked: {this.n} users</div>
        <table>
          <tr>
            <td><input type="checkbox"/></td>
            <td>date</td>
            <td>name</td>
            <td>email</td>
            <td>desc</td>
          </tr>
        </table>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ReactBase/>,
  document.getElementById('root')
);