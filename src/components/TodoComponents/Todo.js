import React from 'react';

export default function Todo(props) {
  return (
    <div>
      <p
        style={{
          textDecoration: `${props.item.completed ? 'line-through' : 'none'}`,
        }}
        onClick={() => props.toggleItem(props.item.id)}>
        {props.item.task}
      </p>
    </div>
  );
}
