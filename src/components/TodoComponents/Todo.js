import React from 'react';

export default function Todo(props) {
  return (
    <div>
      {props.item.show && (
        <p
          style={{
            textDecoration: `${props.item.completed ? 'line-through' : 'none'}`,
            color: `${props.item.completed ? 'gray' : 'white'}`,
            fontStyle: `${props.item.completed ? 'italic' : 'normal'}`,
          }}
          onClick={() => props.toggleItem(props.item.id)}>
          {props.item.task}
        </p>
      )}
    </div>
  );
}
