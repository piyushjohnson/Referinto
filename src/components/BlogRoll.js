import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="column is-12-mobile is-6-tablet is-4-widescreen is-6-desktop"
              key={post.id}
            >
              <div
                className={`item post-card bottom-border ${
                  post.frontmatter.featuredpost ? "has-border" : ""
                }`}
              >
                {/** Post Card Image */}
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                {/** Post Card Title */}
                <h2 className="title item-title is-size-4 has-text-weight-extra-bold">
                  <Link className="item-link" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </h2>
                {/** Post Card Description */}
                {!post.frontmatter.featuredpost ? (
                  <div className="item-description">{post.excerpt}</div>
                ) : (
                  ""
                )}
                {/** Post Card Meta (Author, Date) */}
                <div className="level">
                  <div className="level-left">
                    <div className="item-author">
                      <a href="/author/john/">John Doe</a>
                    </div>
                  </div>
                  <div className="level-right">
                    <time dateTime={post.frontmatter.date}>
                      {post.frontmatter.date}
                    </time>
                  </div>
                </div>
                <p>
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
                <br />
              </div>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
