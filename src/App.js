import React, { Component } from 'react';
import './App.css';
import PostsView from './components/PostsView';
import SubSelector from './components/SubSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      fetchUrl: 'https://www.reddit.com/r/pics/top/.json?count=20',
      isLoaded: false,
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    fetch(this.state.fetchUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json.data.children, // items from json
          isLoaded: true,
        })
      });
  }

  clickHandler() {
    this.setState({
      items: [],
      fetchUrl: 'https://www.reddit.com/r/earthporn/top/.json?count=20',
      isLoaded: false,
    })
    this.componentDidMount();
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <SubSelector clickHandler={this.clickHandler} /> 
          <PostsView items={items} />
        </div>
      );
    }
  }
}

export default App;
