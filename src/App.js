// 1) Create a box
// import React, { Component } from "react";
// import "./App.css";
// import ToDoList from "./component/ToDoList";

// class App extends Component {
//   state = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };

//   decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <ToDoList />
//       </div>
//     );
//   }
// }

// export default App;

// --------------------------------------------------------------------

// 2)
import React, { Component } from "react";
import "./App.css";
import ToDoList from "./component/ToDoList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    );
  }
}

export default App;