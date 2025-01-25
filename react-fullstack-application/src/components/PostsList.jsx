import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
    return (
        <>
          <NewPost />
          <ul className={classes.posts}>
            <Post author="Chandan" body="React.js is awesome!" />
            <Post author="Singh" body="Check out the full demo!" />
          </ul>
        </>
      );
}

export default PostsList;