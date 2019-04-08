import React from 'react';

function PostsView(props) {
  return(
    <div>
      {props.items.map(item => (
        <div key={item.data.id}>
          <p>{item.data.title}</p>
          <img alt="ree" src={item.data.thumbnail} />
        </div>
      ))}
    </div>
  );
}

export default PostsView;