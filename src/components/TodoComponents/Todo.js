import React from 'react';

export default function Todo(props) {
  return (
    <div>
      <p>{props.item.task}</p>
    </div>
  );
}
