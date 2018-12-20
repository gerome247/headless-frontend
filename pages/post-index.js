
import React, { Component } from 'react'
import Layout from '../components/Layout.js';
import PostIndex from '../components/PostIndex'
import fetch from "isomorphic-unfetch";
import PageWrapper from "../components/PageWrapper.js";
import { Config } from '../config';

class PostIndexPage extends Component {
  //getInitialProps Next JS
  static async getInitialProps() {
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const posts = await postsRes.json();
    return {
      posts
    };
  }

  render() {
    const { posts } = this.props;
    return (
      <Layout
      index={false}
      {...this.props}
      >

        <h1>Post Index</h1>
        <PostIndex limit={20}/>
      </Layout>
    )
  }
}

export default PageWrapper(PostIndexPage);