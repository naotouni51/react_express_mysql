import React from "react";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch("http://localhost:4000/posts")
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>This is your todo list!</h1>
        <ul>
          {this.state.posts.map(post => (
            <li>
              <h2>{post.title}</h2>
              <p>{post.comment}</p>
              <p>{post.created_at}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}