import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function PostsView(props) {
  return(
    <Container>
      <h1>Top posts</h1>
      <div className='gallery'>
        {props.items.map(item => (
          <div key={item.data.id} className='gallery-image border border-white bg-light'>
            <p>{item.data.title}</p>
            <a href={"https://reddit.com" + item.data.permalink}>  
              <Image alt="ree" src={item.data.url} fluid />
            </a>
            <b><p>{item.data.ups} upvotes</p></b>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PostsView;