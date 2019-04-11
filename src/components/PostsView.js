import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function PostsView(props) {
  return(
    <Container>
      <h2>Browsing top posts from r/{props.currentSub}</h2>
      <div className='gallery'>
        {props.items.map(item => (
          <div key={item.data.id} className='gallery-image border border-white bg-light'>
            <p>{item.data.title}</p>
            <a href={"https://reddit.com" + item.data.permalink}>  
              <Image alt="no image" src={item.data.url} fluid />
            </a>
            <b><p>{item.data.ups} upvotes</p></b>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default PostsView;