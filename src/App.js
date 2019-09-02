import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchBar from './components/TodoComponents/TodoSearch';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #2d2d37;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  span {
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`;

const AppWrapper = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 5%;
  border: 2px solid gray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  h2 {
    align-self: center;
    margin-top: 0;
    text-align: center;
    font-size: 30px;
  }

  p {
    font-size: 24px;
    margin: 40px 5%;
  }

  form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    input {
      width: 100%;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      padding: 10px 2%;
    }

    button {
      flex-grow: 1;
      font-size: 18px;
      font-family: 'Roboto', sans-serif;
      padding: 10px 2%;
      border: 2px solid gray;
      border-top: none;
      background-color: #2d2d37;
      color: white;
      outline: none;

      &:hover {
        background-color: white;
        color: #2d2d37;
        opacity: 0.8;
      }
    }
  }
`;

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
    show: true,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
    show: true,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      data,
    };
  }

  componentDidMount() {
    this.setState(JSON.parse(window.localStorage.getItem('data')));
  }

  componentDidUpdate(prevState) {
    if (this.state.data !== prevState.data) {
      window.localStorage.setItem('data', JSON.stringify(this.state));
    }
  }

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
      show: true,
    };
    if (item !== '') {
      this.setState({
        data: [...this.state.data, newItem],
      });
    }
  };

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({ data: this.state.data.filter(item => !item.completed) });
  };

  showAll = () => {
    this.setState({
      data: this.state.data.map(item => {
        return { ...item, show: true };
      }),
    });
  };

  searchBy = search => {
    this.setState({
      data: this.state.data.map(item => {
        return !JSON.stringify(item)
          .toLowerCase()
          .includes(search.toLowerCase())
          ? { ...item, show: false }
          : item;
      }),
    });
  };

  render() {
    return (
      <AppWrapper>
        <GlobalStyle />
        <h2>Welcome to your Todo App!</h2>
        <SearchBar showAll={this.showAll} searchBy={this.searchBy} />
        <TodoList data={this.state.data} toggleItem={this.toggleItem} />
        <TodoForm
          data={this.state.data}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </AppWrapper>
    );
  }
}

export default App;
