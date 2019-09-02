import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import SearchBar from './components/TodoComponents/TodoSearch';

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
    this.setState({
      data: [...this.state.data, newItem],
    });
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
      <div>
        <h2>Welcome to your Todo App!</h2>
        <SearchBar showAll={this.showAll} searchBy={this.searchBy} />
        <TodoList data={this.state.data} toggleItem={this.toggleItem} />
        <TodoForm
          data={this.state.data}
          addItem={this.addItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
