import React from 'react';

import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import HelloWorld from '@src/components/HelloWorld';

const BlogExample = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('PAGE.BLOG.TITLE')}</title>
        <meta name="description" content={t('PAGE.BLOG.TITLE')} />
      </Helmet>

      {/* Markup borrowed from https://github.com/twbs/bootstrap/blob/5693f1ad863832adb01ed1ca9cd24c825fc640f4/site/content/docs/5.0/examples/blog/index.html */}
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

        <HelloWorld />

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
                <img src="https://placehold.it/200x250/55595c.jpg?text=Thumbnail" alt="Thumbnail" />
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
                <img src="https://placehold.it/200x250/55595c.jpg?text=Thumbnail" alt="Thumbnail" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>

            <article className="blog-post">
              <h2 className="blog-post-title">Sample blog post</h2>
              <p className="blog-post-meta">
                January 1, 2014 by <a href="#">Mark</a>
              </p>

              <p>
                This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic
                typography, images, and code are all supported.
              </p>
              <hr />
              <p>
                Yeah, she dances to her own beat. Oh, no. You could've been the greatest. 'Cause, baby,{' '}
                <a href="#">you're a firework</a>. Maybe a reason why all the doors are closed. Open up your heart and
                just let it begin. So très chic, yeah, she's a classic.
              </p>
              <blockquote>
                <p>
                  Bikinis, zucchinis, Martinis, no weenies. I know there will be sacrifice but that's the price.{' '}
                  <strong>This is how we do it</strong>. I'm not sticking around to watch you go down. You think you're
                  so rock and roll, but you're really just a joke. I know one spark will shock the world, yeah yeah.
                  Can't replace you with a million rings.
                </p>
              </blockquote>
              <p>
                Trying to connect the dots, don't know what to tell my boss. Before you met me I was alright but things
                were kinda heavy. You just gotta ignite the light and let it shine. Glitter all over the room{' '}
                <em>pink flamingos</em> in the pool.{' '}
              </p>
              <h2>Heading</h2>
              <p>
                Suiting up for my crowning battle. If you only knew what the future holds. Bring the beat back.
                Peach-pink lips, yeah, everybody stares.
              </p>
              <h3>Sub-heading</h3>
              <p>
                You give a hundred reasons why, and you say you're really gonna try. Straight stuntin' yeah we do it
                like that. Calling out my name. ‘Cause I, I’m capable of anything.
              </p>
              <pre>
                <code>Example code block</code>
              </pre>
              <p>
                Before you met me I was alright but things were kinda heavy. You just gotta ignite the light and let it
                shine.
              </p>
              <h3>Sub-heading</h3>
              <p>
                You got the finest architecture. Passport stamps, she's cosmopolitan. Fine, fresh, fierce, we got it on
                lock. Never planned that one day I'd be losing you. She eats your heart out.
              </p>
              <ul>
                <li>Got a motel and built a fort out of sheets.</li>
                <li>Your kiss is cosmic, every move is magic.</li>
                <li>Suiting up for my crowning battle.</li>
              </ul>
              <p>Takes you miles high, so high, 'cause she’s got that one international smile.</p>
              <ol>
                <li>Scared to rock the boat and make a mess.</li>
                <li>I could have rewrite your addiction.</li>
                <li>I know you get me so I let my walls come down.</li>
              </ol>
              <p>After a hurricane comes a rainbow.</p>
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title">Another blog post</h2>
              <p className="blog-post-meta">
                December 23, 2013 by <a href="#">Jacob</a>
              </p>

              <p>
                I am ready for the road less traveled. Already <a href="#">brushing off the dust</a>. Yeah, you're lucky
                if you're on her plane. I used to bite my tongue and hold my breath. Uh, She’s a beast. I call her Karma
                (come back). Black ray-bans, you know she's with the band. I can't sleep let's run away and don't ever
                look back, don't ever look back.
              </p>
              <blockquote>
                <p>
                  Growing fast into a <strong>bolt of lightning</strong>. Be careful Try not to lead her on
                </p>
              </blockquote>
              <p>
                I'm intrigued, for a peek, heard it's fascinating. Oh oh! Wanna be a victim ready for abduction. She's
                got that international smile, oh yeah, she's got that one international smile. Do you ever feel, feel so
                paper thin. I’m gon’ put her in a coma. Sun-kissed skin so hot we'll melt your popsicle.
              </p>
              <p>This is transcendental, on another level, boy, you're my lucky star.</p>
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title">New feature</h2>
              <p className="blog-post-meta">
                December 14, 2013 by <a href="#">Chris</a>
              </p>

              <p>
                From Tokyo to Mexico, to Rio. Yeah, you take me to utopia. I'm walking on air. We'd make out in your
                Mustang to Radiohead. I mean the ones, I mean like she's the one. Sun-kissed skin so hot we'll melt your
                popsicle. Slow cooking pancakes for my boy, still up, still fresh as a Daisy.
              </p>
              <ul>
                <li>I hope you got a healthy appetite.</li>
                <li>You're never gonna be unsatisfied.</li>
                <li>Got a motel and built a fort out of sheets.</li>
              </ul>
              <p>
                Don't need apologies. Boy, you're an alien your touch so foreign, it's <em>supernatural</em>,
                extraterrestrial. Talk about our future like we had a clue. I can feel a phoenix inside of me.
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
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me stop by? Heavy is
                the head that <em>wears the crown</em>. Yes, we make angels cry, raining down on earth from up above.
              </p>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li>
                  <a href="#">March 2014</a>
                </li>
                <li>
                  <a href="#">February 2014</a>
                </li>
                <li>
                  <a href="#">January 2014</a>
                </li>
                <li>
                  <a href="#">December 2013</a>
                </li>
                <li>
                  <a href="#">November 2013</a>
                </li>
                <li>
                  <a href="#">October 2013</a>
                </li>
                <li>
                  <a href="#">September 2013</a>
                </li>
                <li>
                  <a href="#">August 2013</a>
                </li>
                <li>
                  <a href="#">July 2013</a>
                </li>
                <li>
                  <a href="#">June 2013</a>
                </li>
                <li>
                  <a href="#">May 2013</a>
                </li>
                <li>
                  <a href="#">April 2013</a>
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
