import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      console.log(items[0].data);
      return (
        <div className="App">
          <h1>Top Pics</h1>
          {items.map(item => (
            <div key={item.data.id}>
              <p>{item.data.title}</p>
              <img src={item.data.thumbnail} />
            </div>
          ))};
        </div>
      );
    }
  }
}

export default App;
