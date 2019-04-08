import React, { Component } from 'react';
import './App.css';
import PostsView from './components/PostsView';
import SubSelector from './components/SubSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/pics/top/.json?count=20')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json.data.children, // items from json
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <SubSelector /> 
          <PostsView items={items} />
        </div>
      );
    }
  }
}

export default App;
