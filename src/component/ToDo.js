// 6) Delete the submitted words

// import React from "react";

// export default props => (
//     <div style={{
//         textDecoration: props.todo.complete ?
//             "line-through" : ""
//     }}
//         onClick={props.toggleComplete}>
//         {props.todo.text}</div>
// );

// --------------------------------------------------------------------

// 10) Permanently delete To Do

// import React from "react";

// export default props => (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//         <div style={{
//             textDecoration: props.todo.complete ?
//                 "line-through" : ""
//         }}
//             onClick={props.toggleComplete}>
//             {props.todo.text}
//         </div>
//         <button onClick={props.onDelete}>Delete</button>
//     </div>
// );

// --------------------------------------------------------------------

// 10) Permanently delete To Do

import React from "react";
import "./ToDoForm.css"

export default props => (
    <div style={{ display: "flex", justifyContent: "space-between", width: '30%', margin: '0 auto' }}>
        <div style={{ width: '50%', textAlign: 'center' }}>
            <div style={{
                textDecoration: props.todo.complete ?
                    "line-through" : ""
            }}
                className="words" onClick={props.toggleComplete}>
                {props.todo.text}
            </div>

        </div>
        <button className="words" onClick={props.onDelete}>Delete</button>

    </div>
);