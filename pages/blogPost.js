import React, { Component } from 'react';
import fetch from "isomorphic-unfetch";
import { Config } from '../config';

export default class BlogPost extends Component {

  //getInitialProps Next JS
  static async getInitialProps(context) {

    const slug = context.query.slug;

    const postRes = await fetch(`${Config.apiUrl}/wp-json/postlight/v1/post?slug=${slug}`);
    const post = await postRes.json();
    return {
      post
    };
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title.rendered}</h1>
      </div>
    )
  }
}
