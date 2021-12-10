/* eslint-disable react/jsx-no-literals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Helmet } from 'react-helmet';

import { useTranslations } from '@src/components/Intl';

const BlogExample = () => {
  const t = useTranslations();

  return (
    <>
      <Helmet>
        <title>{t('PAGE.BLOG.TITLE')}</title>
        <meta name="description" content={t('PAGE.BLOG.DESCRIPTION')} />
      </Helmet>
      {/* Markup borrowed from https://raw.githubusercontent.com/twbs/bootstrap/f20fece3a8cdd0e76a42c2737524b7652bf54d26/site/content/docs/5.1/examples/blog/index.html */}
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <a className="blog-header-logo text-dark" href="#">
                Large
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 link-secondary" href="#">
              World
            </a>
            <a className="p-2 link-secondary" href="#">
              U.S.
            </a>
            <a className="p-2 link-secondary" href="#">
              Technology
            </a>
            <a className="p-2 link-secondary" href="#">
              Design
            </a>
            <a className="p-2 link-secondary" href="#">
              Culture
            </a>
            <a className="p-2 link-secondary" href="#">
              Business
            </a>
            <a className="p-2 link-secondary" href="#">
              Politics
            </a>
            <a className="p-2 link-secondary" href="#">
              Opinion
            </a>
            <a className="p-2 link-secondary" href="#">
              Science
            </a>
            <a className="p-2 link-secondary" href="#">
              Health
            </a>
            <a className="p-2 link-secondary" href="#">
              Style
            </a>
            <a className="p-2 link-secondary" href="#">
              Travel
            </a>
          </nav>
        </div>
      </div>
      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most
              interesting in this post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://via.placeholder.com/200x250" alt="placeholder" width="200" height="250" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">Post title</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">
                  This is a wider card with supporting text below as a natural lead-in to additional content.
                </p>
                <a href="#" className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img src="https://via.placeholder.com/200x250" alt="placeholder" width="200" height="250" />
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>

            <article className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">
                January 1, 2021 by <a href="#">Mark</a>
              </p>

              <p>
                This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic
                typography, lists, tables, images, code, and more are all supported as expected.
              </p>
              <hr />
              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <h2>Blockquotes</h2>
              <p>This is an example blockquote in action:</p>
              <blockquote className="blockquote">
                <p>Quoted text goes here.</p>
              </blockquote>
              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <h3>Example lists</h3>
              <p>
                This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                highly repetitive body text used throughout. This is an example unordered list:
              </p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>And this is an ordered list:</p>
              <ol>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ol>
              <p>And this is a definiton list:</p>
              <dl>
                <dt>HyperText Markup Language (HTML)</dt>
                <dd>The language used to describe and define the content of a Web page</dd>
                <dt>Cascading Style Sheets (CSS)</dt>
                <dd>Used to describe the appearance of Web content</dd>
                <dt>JavaScript (JS)</dt>
                <dd>The programming language used to build advanced Web sites and applications</dd>
              </dl>
              <h2>Inline HTML elements</h2>
              <p>
                HTML defines a long list of available inline tags, a complete list of which can be found on the{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.
              </p>
              <ul>
                <li>
                  <strong>To bold text</strong>, use{' '}
                  <code className="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.
                </li>
                <li>
                  <em>To italicize text</em>, use{' '}
                  <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
                </li>
                <li>
                  Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use{' '}
                  <code className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional{' '}
                  <code className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.
                </li>
                <li>
                  Citations, like <cite>— Mark Otto</cite>, should use{' '}
                  <code className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.
                </li>
                <li>
                  <del>Deleted</del> text should use{' '}
                  <code className="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text
                  should use <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.
                </li>
                <li>
                  Superscript <sup>text</sup> uses{' '}
                  <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript{' '}
                  <sub>text</sub> uses <code className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
                </li>
              </ul>
              <p>Most of these elements are styled by browsers with few modifications on our part.</p>
              <h2>Heading</h2>
              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <h3>Sub-heading</h3>
              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <pre>
                <code>Example code block</code>
              </pre>
              <p>
                This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                highly repetitive body text used throughout.
              </p>
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title">Another blog post</h2>
              <p className="blog-post-meta">
                December 23, 2020 by <a href="#">Jacob</a>
              </p>

              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <blockquote>
                <p>
                  Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.
                </p>
              </blockquote>
              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <h3>Example table</h3>
              <p>And don't forget about tables in these posts:</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Upvotes</th>
                    <th>Downvotes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice</td>
                    <td>10</td>
                    <td>11</td>
                  </tr>
                  <tr>
                    <td>Bob</td>
                    <td>4</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>Charlie</td>
                    <td>7</td>
                    <td>9</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Totals</td>
                    <td>21</td>
                    <td>23</td>
                  </tr>
                </tfoot>
              </table>

              <p>
                This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                highly repetitive body text used throughout.
              </p>
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title">New feature</h2>
              <p className="blog-post-meta">
                December 14, 2020 by <a href="#">Chris</a>
              </p>

              <p>
                This is some additional paragraph placeholder content. It has been written to fill the available space
                and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
                demonstration flowing, so be on the lookout for this exact same string of text.
              </p>
              <ul>
                <li>First list item</li>
                <li>Second list item with a longer description</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>
                This is some additional paragraph placeholder content. It's a slightly shorter version of the other
                highly repetitive body text used throughout.
              </p>
            </article>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#">
                Older
              </a>
              <a className="btn btn-outline-secondary disabled" href="#" tabIndex={-1} aria-disabled="true">
                Newer
              </a>
            </nav>
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '2rem' }}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit about your publication, writers, content, or
                  something else entirely. Totally up to you.
                </p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="#">March 2021</a>
                  </li>
                  <li>
                    <a href="#">February 2021</a>
                  </li>
                  <li>
                    <a href="#">January 2021</a>
                  </li>
                  <li>
                    <a href="#">December 2020</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">October 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2020</a>
                  </li>
                  <li>
                    <a href="#">August 2020</a>
                  </li>
                  <li>
                    <a href="#">July 2020</a>
                  </li>
                  <li>
                    <a href="#">June 2020</a>
                  </li>
                  <li>
                    <a href="#">May 2020</a>
                  </li>
                  <li>
                    <a href="#">April 2020</a>
                  </li>
                </ol>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="blog-footer">
        <p>
          Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by{' '}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );
};

export default BlogExample;
