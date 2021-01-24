import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section is-large">
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #4a4a4a, -0.5rem 0 0 #4a4a4a",
              backgroundColor: "#4a4a4a",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
