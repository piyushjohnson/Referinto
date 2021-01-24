import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="Referinto"
              style={{ width: "14em", height: "10em" }}
            />
          </div>
          <div className="content">
            <div className="columns">
              <div className="column is-4">
                <p className="footer-link-title has-text-weight-bold">
                  Explore
                </p>
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link className="navbar-item" to="/about">
                  About
                </Link>
                <Link className="navbar-item" to="/blog">
                  Latest Stories
                </Link>
                {/* <Link className="navbar-item" to="/contact/examples">
                  Form Examples
                </Link> */}
                {/* <a
                  className="navbar-item"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                </a> */}
              </div>
              <div className="column is-4">
                <p className="footer-link-title has-text-weight-bold">
                  Get in touch
                </p>
                <Link className="navbar-item" to="/contact">
                  Contact Us
                </Link> 
              </div>
              <div className="column is-4 social">
                <p className="footer-link-title has-text-weight-bold">
                  Follow Us
                </p>
                <div className="social-media">
                  <a
                    className="social-link facebook"
                    title="facebook"
                    href="https://facebook.com"
                  >
                    <div className="icon">
                      <img
                        src={facebook}
                        alt="Facebook"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </div>
                    <p>Facebook</p>
                  </a>
                  <a
                    className="social-link twitter"
                    title="twitter"
                    href="https://twitter.com"
                  >
                    <div className="icon">
                      <img
                        src={twitter}
                        alt="Twitter"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </div>
                    <p>Twitter</p>
                  </a>
                  <a
                    className="social-link instagram"
                    title="instagram"
                    href="https://instagram.com"
                  >
                    <div className="icon">
                      <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </div>
                    <p>Instagram</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{
              border: "none",
              display: "block",
              height: "2px",
              margin: "1.5rem 0",
            }}
          />
          <div className="content has-text-centered">
            <a href="/">Referinto</a>
            <span>Published with Netlify</span>
            <a href="https://bironthemes.com">Biron Themes</a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
