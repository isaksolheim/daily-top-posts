import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function SubSelector(props) {
  var subs = ["pics", "earthporn", "2007scape"]; // array with all subs
  return(
    <div>
      { /* Loop through all subs and create button for it */}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Subreddit</InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Append>
          <Button variant="outline-secondary">Go</Button>
        </InputGroup.Append>
        <FormControl
          placeholder="pics"
          aria-label="pics"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      {subs.map(sub => (
        <Button onClick={() => props.clickHandler(sub)} key={sub} className="btn-space">
          r/{sub}
        </Button>
      ))}
    </div>
  );
}

export default SubSelector;