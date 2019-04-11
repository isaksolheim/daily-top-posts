import React from 'react';
import Button from 'react-bootstrap/Button';

class SubSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
    return(
      <div>
        r/<input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        <Button 
          /* runs clickhandler function IF there is any input. else does nothing */
          onClick={(this.state.inputValue === '') ? () => undefined : () => this.props.clickHandler(this.state.inputValue)} 
          className="btn-space">go</Button>
      </div>
    );
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
}

export default SubSelector;