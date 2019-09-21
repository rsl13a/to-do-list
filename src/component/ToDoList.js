// 1) Create a box
// import React from 'react';
// import ToDoForm from './ToDoForm'

// export default class ToDoList extends React.Component {

//     render() {
//         return (
//             <div>
//                 <ToDoForm />
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 3) Able to submit the input inside the box
// import React from 'react';
// import ToDoForm from './ToDoForm'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: []
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {JSON.stringify(this.state.todos)}
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 5) Display text after hit submit
// import React from 'react';
// import ToDoForm from './ToDoForm'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: []
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {this.state.todos.map(todo => (
//                     <div key={todo.id}>{todo.text}</div>))}
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 6) Delete the submitted words
// import React from 'react';
// import ToDoForm from './ToDoForm'
// import ToDo from './ToDo'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: []
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     toggleComplete = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         id: todo.id,
//                         text: todo.text,
//                         complete: !todo.complete
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {this.state.todos.map(todo => (
//                     <ToDo key={todo.id}
//                         toggleComplete={() => this.toggleComplete(todo.id)}
//                         todo={todo} />
//                 ))}
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 7) Cross off the to do's
// import React from 'react';
// import ToDoForm from './ToDoForm'
// import ToDo from './ToDo'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: []
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     toggleComplete = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         id: todo.id,
//                         text: todo.text,
//                         complete: !todo.complete
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {this.state.todos.map(todo => (
//                     <ToDo key={todo.id}
//                         toggleComplete={() => this.toggleComplete(todo.id)}
//                         todo={todo} />
//                 ))}
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 8) Show number of active To Do's
// import React from 'react';
// import ToDoForm from './ToDoForm'
// import ToDo from './ToDo'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: []
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     toggleComplete = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         id: todo.id,
//                         text: todo.text,
//                         complete: !todo.complete
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {this.state.todos.map(todo => (
//                     <ToDo key={todo.id}
//                         toggleComplete={() => this.toggleComplete(todo.id)}
//                         todo={todo} />
//                 ))}
//                 <div>To Do's left: {this.state.todos.filter(todo => !todo.complete).length}</div>
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 9) Filter all, active and complete
// import React from 'react';
// import ToDoForm from './ToDoForm'
// import ToDo from './ToDo'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: [],
//         todoToShow: 'all'
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     toggleComplete = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         id: todo.id,
//                         text: todo.text,
//                         complete: !todo.complete
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         });
//     };

//     updateTodoToShow = (s) => {
//         this.setState({
//             todoToShow: s
//         })
//     }

//     render() {
//         let todos = [];

//         if (this.state.todoToShow === "all") {
//             todos = this.state.todos;
//         }

//         else if (this.state.todoToShow === "active") {
//             todos = this.state.todos.filter(todo => !todo.complete);
//         }

//         else if (this.state.todoToShow === "complete") {
//             todos = this.state.todos.filter(todo => !todo.complete);
//         }


//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {todos.map(todo => (
//                     <ToDo key={todo.id}
//                         toggleComplete={() => this.toggleComplete(todo.id)}
//                         todo={todo} />
//                 ))}
//                 <div>
//                     To Do's left: {this.state.todos.filter(todo => !todo.complete).length}
//                 </div>
//                 <div>
//                     <button onClick={() => this.updateTodoToShow("all")} >All</button>
//                     <button onClick={() => this.updateTodoToShow("active")} >Active</button>
//                     <button onClick={() => this.updateTodoToShow("complete")} >Complete</button>
//                 </div>
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 10) Permanently delete To Do
// import React from 'react';
// import ToDoForm from './ToDoForm'
// import ToDo from './ToDo'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: [],
//         todoToShow: 'all'
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     toggleComplete = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         id: todo.id,
//                         text: todo.text,
//                         complete: !todo.complete
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         });
//     };

//     updateTodoToShow = (s) => {
//         this.setState({
//             todoToShow: s
//         });
//     };

//     handleDeleteTodo = id => {
//         this.setState({
//             todos: this.state.todos.filter(todo => todo.id !== id)
//         });
//     };

//     render() {
//         let todos = [];

//         if (this.state.todoToShow === "all") {
//             todos = this.state.todos;
//         }

//         else if (this.state.todoToShow === "active") {
//             todos = this.state.todos.filter(todo => !todo.complete);
//         }

//         else if (this.state.todoToShow === "complete") {
//             todos = this.state.todos.filter(todo => !todo.complete);
//         }


//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {todos.map(todo => (
//                     <ToDo key={todo.id}
//                         toggleComplete={() => this.toggleComplete(todo.id)}
//                         onDelete={() => this.handleDeleteTodo(todo.id)}
//                         todo={todo} />
//                 ))}
//                 <div>
//                     To Do's left: {this.state.todos.filter(todo => !todo.complete).length}
//                 </div>
//                 <div>
//                     <button onClick={() => this.updateTodoToShow("all")} >All</button>
//                     <button onClick={() => this.updateTodoToShow("active")} >Active</button>
//                     <button onClick={() => this.updateTodoToShow("complete")} >Complete</button>
//                 </div>
//             </div>
//         )
//     }
// }

// // --------------------------------------------------------------------

// // 11) Delete the complete button permanently. 
// //     Delete completely button show up after trying to deleted something
// import React from 'react';
// import ToDoForm from './ToDoForm'
// import ToDo from './ToDo'

// export default class ToDoList extends React.Component {

//     state = {
//         todos: [],
//         todoToShow: 'all'
//     };

//     addToDo = (todo) => {
//         this.setState({
//             todos: [todo, ...this.state.todos]
//         });
//     };

//     toggleComplete = (id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         id: todo.id,
//                         text: todo.text,
//                         complete: !todo.complete
//                     };
//                 } else {
//                     return todo;
//                 }
//             })
//         });
//     };

//     updateTodoToShow = (s) => {
//         this.setState({
//             todoToShow: s
//         });
//     };

//     handleDeleteTodo = id => {
//         this.setState({
//             todos: this.state.todos.filter(todo => todo.id !== id)
//         });
//     };

//     removeAllTodosThatAreComplete = () => {
//         this.setState({
//             todos: this.state.todos.filter(todo => !todo.complete)
//         });
//     };

//     render() {
//         let todos = [];

//         if (this.state.todoToShow === "all") {
//             todos = this.state.todos;
//         }

//         else if (this.state.todoToShow === "active") {
//             todos = this.state.todos.filter(todo => !todo.complete);
//         }

//         else if (this.state.todoToShow === "complete") {
//             todos = this.state.todos.filter(todo => !todo.complete);
//         }


//         return (
//             <div>
//                 <ToDoForm onSubmit={this.addToDo} />
//                 {todos.map(todo => (
//                     <ToDo key={todo.id}
//                         toggleComplete={() => this.toggleComplete(todo.id)}
//                         onDelete={() => this.handleDeleteTodo(todo.id)}
//                         todo={todo} />
//                 ))}
//                 <div>
//                     To Do's left: {this.state.todos.filter(todo => !todo.complete).length}
//                 </div>
//                 <div>
//                     <button onClick={() => this.updateTodoToShow("all")} >All</button>
//                     <button onClick={() => this.updateTodoToShow("active")} >Active</button>
//                     <button onClick={() => this.updateTodoToShow("complete")} >Complete</button>
//                 </div>
//                 {this.state.todos.some(todo => todo.complete).length ? (
//                     <div>
//                         <button onClick={this.removeAllTodosThatAreComplete}>
//                             Remove the completed tasks
//                     </button>
//                     </div>
//                 ) : null}
//             </div>
//         )
//     }
// }

// --------------------------------------------------------------------

// 12) Button to toggle all on or off
import React from 'react';
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'
import "./ToDoForm.css"

export default class ToDoList extends React.Component {

    state = {
        todos: [],
        todoToShow: 'all',
        toggleAllComplete: true
    };

    addToDo = todo => {
        this.setState(state => ({
            // this.setState({

            todos: [todo, ...state.todos]
            // todos: [todo, ...this.state.todos]
        }));
    };

    toggleComplete = id => {
        this.setState(state => ({
            // this.setState({

            todos: state.todos.map(todo => {
                // todos: this.state.todos.map(todo => {

                if (todo.id === id) {
                    return {
                        ...todo,
                        // id: todo.id,
                        // text: todo.text,
                        complete: !todo.complete
                    };
                } else {
                    return todo;
                }
            })
        }));
    };

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        });
    };

    handleDeleteTodo = id => {
        this.setState(state => ({
            // this.setState({

            todos: state.todos.filter(todo => todo.id !== id)
            // todos: this.state.todos.filter(todo => todo.id !== id)
        }));
    };

    removeAllTodosThatAreComplete = () => {
        this.setState(state => ({
            // this.setState({

            todos: state.todos.filter(todo => !todo.complete)
            // todos: this.state.todos.filter(todo => !todo.complete)
        }));
    };

    render() {
        let todos = [];

        if (this.state.todoToShow === "all") {
            todos = this.state.todos;
        }

        else if (this.state.todoToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete);
        }

        else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
        }


        return (
            <div>
                <ToDoForm onSubmit={this.addToDo} />
                {todos.map(todo => (
                    <ToDo key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete={() => this.handleDeleteTodo(todo.id)}
                        todo={todo} />
                ))}
                <div className="words">
                    To Do's left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <br></br>
                <div>
                    <button className="words" onClick={() => this.updateTodoToShow("all")} >All Tasks</button>
                    <button className="words" onClick={() => this.updateTodoToShow("active")} >Incomplete Tasks</button>
                    <button className="words" onClick={() => this.updateTodoToShow("complete")} >Completed Tasks</button>
                </div>
                {this.state.todos.some(todo => todo.complete).length ? (
                    <div>
                        <button onClick={this.removeAllTodosThatAreComplete}>
                            Remove the completed tasks
                    </button>
                    </div>
                ) : null}
                <div>
                    <button className="words"
                        onClick={() =>
                            this.setState((state) => ({
                                // this.setState({

                                todos: state.todos.map(todo => ({
                                    // todos: this.state.todos.map(todo => ({
                                    ...todo,

                                    complete: state.toggleAllComplete
                                    // complete: this.state.toggleAllComplete
                                })),

                                toggleAllComplete: !state.toggleAllComplete
                                // toggleAllComplete: !this.state.toggleAllComplete
                            }))
                        }
                    >
                        Delete all: {`${this.state.toggleAllComplete}`}
                    </button>
                </div>
            </div >
        )
    }
}
