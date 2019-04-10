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
      currentSub: '',
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

  clickHandler(sub) {
    // formats new json url, changes state and mounts again
    var url = 'https://www.reddit.com/r/' + sub + '/top/.json?count=20';
    this.setState({
      fetchUrl: url,
      isLoaded: false,
      currentSub: sub,
    }, function () {
      this.componentDidMount();
    });
  }

    render() {
    var { isLoaded, items, currentSub } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App">
          <SubSelector clickHandler={this.clickHandler} currentSub={currentSub} /> 
          <br />
          <PostsView items={items} />
        </div>
      );
    }
  }
}

export default App;
