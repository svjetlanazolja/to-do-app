// import React from 'react';
// import '../App.css';
// import TodoItem from './TodoItem';

// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.stavkeIzNiza.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todoTest={todo}
//             handleChangeProps={this.props.handleChangeProps}
//             deleteTodoProps={this.props.deleteTodoProps}
//             setUpdate={this.props.setUpdate}
//           />
//         ))}
//       </ul>
//     );
//   }
// }

import React from 'react';
import '../App.css';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.stavkeIzNiza.map((todo) => (
        <TodoItem
          key={todo.id}
          todoTest={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
