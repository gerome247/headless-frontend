
import React, { Component } from 'react'
import Link from 'next/link';
import fetch from "isomorphic-unfetch";
import { Config } from '../config';

export default class PostIndex extends Component {
  static defaultProps ={
    limit: 5
  }

  state = {
      posts: []
  }

  //getInitialProps Next JS
  async componentWillMount() {
    const { limit } = this.props;
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?per_page=${limit}`);
    const posts = await postsRes.json();
    this.setState({
      posts
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <section>

        <h1>Archive</h1>
        <ol>
        {posts.map(post => (
          <li key={post.id}>
            <Link
            href={`/post?slug=${post.slug}&apiRoute=post`}
            as={`/post/${post.slug}`}><a>{post.title.rendered}</a></Link>
          </li>
        ))}
        </ol>
      </section>
    )
  }
}
