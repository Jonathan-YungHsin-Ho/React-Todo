import React from 'react';

export default function Todo(props) {
  return (
    <div>
      {props.item.show && (
        <p
          style={{
            textDecoration: `${props.item.completed ? 'line-through' : 'none'}`,
            color: `${props.item.completed ? 'gray' : 'white'}`,
          }}
          onClick={() => props.toggleItem(props.item.id)}>
          {!props.item.completed && (
            <span
              style={{
                height: '12px',
                width: '12px',
                border: '2px solid white',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '2%',
              }}></span>
          )}
          {props.item.completed && (
            <span
              style={{
                height: '12px',
                width: '12px',
                border: '2px solid gray',
                backgroundColor: 'gray',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '2%',
              }}></span>
          )}
          {props.item.task}
        </p>
      )}
    </div>
  );
}
