import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredImage,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      <section
        className="hero background-img is-large"
        style={
          featuredImage !== null
            ? {
                backgroundImage: `url(${
                  !!featuredImage.childImageSharp
                    ? featuredImage.childImageSharp.fluid.src
                    : featuredImage
                })`,
              }
            : {}
        }
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title has-text-white is-size-1 has-text-weight-bold">
              {title}
            </h1>
            <a href="/author/john/" className="has-text-light is-size-4">
              John Doe
            </a>
          </div>
        </div>
      </section>
      <section className="posts content">
        {helmet || ""}
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }} className="post-tags">
                  {tags.map((tag) => (
                    <Link
                      key={tag + `tag`}
                      className={`button tag-${tag} is-rounded`}
                      title={tag}
                      aria-label={tag}
                      to={`/tags/${kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  featuredImage: PropTypes.object,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  console.log(post);
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredImage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        tags
      }
    }
  }
`;
