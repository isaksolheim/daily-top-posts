import React from 'react';
import Button from 'react-bootstrap/Button';

function SubSelector(props) {
  return(
    <div>
      <Button onClick={props.clickHandler}>
        r/earthporn
      </Button>
      <Button onClick={props.clickHandler}>
        r/pics
      </Button>
    </div>
  );
}

export default SubSelector;