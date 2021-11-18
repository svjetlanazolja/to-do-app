// import '../App.css';
// import React from 'react';
// import styles from './TodoItem.module.css';

// // const TodoItem = () => {
// //     return (
// //         <div className="todoItemContainer">
// //             <h1>This is TodoItem</h1>
// //         </div>
// //     )
// // }

// class TodoItem extends React.Component {
//   state = {
//     editing: false,
//   };

//   handleEditing = () => {
//     this.setState({
//       editing: true,
//     });
//   };

//   hendleUpdatedDone = (event) => {
//     if (event.key === 'Enter') {
//       this.setState({ editing: false });
//     }
//   };

//   componentWillUnmount() {
//     console.log('Cleaning up...');
//   }

//   render() {
//     const completedStyle = {
//       fontStyle: 'italic',
//       color: '#595959',
//       opacity: 0.4,
//       textDecoration: 'line-through',
//     };

//     let viewMode = {};
//     let editMode = {};

//     if (this.state.editing) {
//       viewMode.display = 'none';
//     } else {
//       editMode.display = 'none';
//     }

//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing} style={viewMode}>
//           <input
//             className={styles.checkbox}
//             type="checkbox"
//             checked={this.props.todoTest.completed}
//             onChange={() =>
//               this.props.handleChangeProps(this.props.todoTest.id)
//             }
//           />

//           <button
//             onClick={() => this.props.deleteTodoProps(this.props.todoTest.id)}
//           >
//             Delete
//           </button>

//           <span style={this.props.todoTest.completed ? completedStyle : null}>
//             {this.props.todoTest.title}
//           </span>
//         </div>
//         <input
//           type="text"
//           style={editMode}
//           value={this.props.todoTest.title}
//           className={styles.textInput}
//           onChange={(e) => {
//             this.props.setUpdate(e.target.value, this.props.todoTest.id);
//           }}
//           onKeyDown={this.hendleUpdatedDone}
//         />
//       </li>
//     );
//   }
// }

// export default TodoItem;

import '../App.css';
import React from 'react';
import styles from './TodoItem.module.css';
import { useState } from 'react/cjs/react.development';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const hendleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  // componentWillUnmount() {
  //   console.log('Cleaning up...');
  // }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todoTest;

  let viewMode = {};
  let editMode = {};

  // if (this.state.editing) {
  //   viewMode.display = 'none';
  // } else {
  //   editMode.display = 'none';
  // }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />

        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}> {title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          this.props.setUpdate(e.target.value, id);
        }}
        onKeyDown={hendleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
