import React from 'react';

function ErrorPage(props) {
  const errorMessage = (
    <div>
      <h3>Failed to laod top posts from r/{props.currentSub}</h3>
      <p>Either the sub does not exist or there are no top posts today</p>
    </div>
  );
  
  const welcomeMessage = (
    <div>
      <h3>Enter a sub in the input field above</h3>
    </div>
  );

  return(
    <div>
      {(props.currentSub === '') ? welcomeMessage : errorMessage}
    </div>
  );
}

export default ErrorPage;