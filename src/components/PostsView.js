import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function PostsView(props) {
  return(
    <Container>
    <div className='gallery'>
      {props.items.map(item => (
        <div key={item.data.id} className='gallery-image border border-white bg-light'>
          <p>{item.data.title}</p>
          <a href={"https://reddit.com" + item.data.permalink} target="_blank">  
            <Image alt="ree" src={item.data.url} fluid />
          </a>
          <p>{item.data.ups} upvotes</p>
        </div>
      ))}
    </div>
    </Container>
  );
}

export default PostsView;