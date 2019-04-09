import React from 'react';
import Button from 'react-bootstrap/Button';

function SubSelector(props) {
  var subs = ["pics", "earthporn", "2007scape"]; // array with all subs
  return(
    <div>
      <h4>Select subreddit:</h4>
      { /* Loop through all subs and create button for it */}
      {subs.map(sub => (
        <Button onClick={() => props.clickHandler(sub)} key={sub} className="btn-space">
          r/{sub}
        </Button>
      ))}
    </div>
  );
}

export default SubSelector;