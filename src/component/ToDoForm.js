// 1) Create a box
// import React from 'react';

// export default class ToDoForm extends React.Component {

//     state = {
//         text: ''
//     }

//     render() {
//         return <input />;
//     }
// }

// --------------------------------------------------------------------

// 2) Able to type inside the box                                   
// import React from 'react';                                       
//                                                                  
// export default class ToDoForm extends React.Component {              

//     state = {
//         text: ''
//     };

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     render() {
//         return (
//             <input
//                 name="text"
//                 value={this.state.text}
//                 onChange={this.handleChange}
//                 placeholder="enter text here" />
//         );
//     }
// }

// --------------------------------------------------------------------

// 3) Able to submit the input inside the box
// import React from 'react';
// import shortid from 'shortid';

// export default class ToDoForm extends React.Component {

//     state = {
//         text: ''
//     };

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit({
//             id: shortid.generate(),
//             text: this.state.text,
//             complete: false
//         })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     name="text"
//                     value={this.state.text}
//                     onChange={this.handleChange}
//                     placeholder="enter text here"
//                 />
//             </form>
//         );
//     }
// }

// --------------------------------------------------------------------

// 4) Submit button to submit
// import React from 'react';
// import shortid from 'shortid';

// export default class ToDoForm extends React.Component {

//     state = {
//         text: ''
//     };

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit({
//             id: shortid.generate(),
//             text: this.state.text,
//             complete: false
//         });
//         this.setState({
//             text: ""
//         });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     name="text"
//                     value={this.state.text}
//                     onChange={this.handleChange}
//                     placeholder="enter text here"
//                 />
//                 <button onClick={this.handleSubmit}>Submit</button>
//             </form>
//         );
//     }
// }

// --------------------------------------------------------------------

// 5) Display text after hit submit
// import React from 'react';
// import shortid from 'shortid';

// export default class ToDoForm extends React.Component {

//     state = {
//         text: ''
//     };

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//         this.props.onSubmit({
//             id: shortid.generate(),
//             text: this.state.text,
//             complete: false
//         });
//         this.setState({
//             text: ""
//         });
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input
//                     name="text"
//                     value={this.state.text}
//                     onChange={this.handleChange}
//                     placeholder="enter text here"
//                 />
//                 <button onClick={this.handleSubmit}>Submit</button>
//             </form>
//         );
//     }
// }

// --------------------------------------------------------------------

// )  
import React from 'react';
import shortid from 'shortid';
import "./ToDoForm.css";

export default class ToDoForm extends React.Component {

    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="words"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="enter text here"
                />
                <button className="words" onClick={this.handleSubmit}
                    disabled={this.state.text === "" ? true : false} > Submit</button>
            </form >
        );
    }
}