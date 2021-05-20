import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Joseph Rewald's personal website. Mechanical engineer and technology enthusiast. "}
    // + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my site</Link></h2>
          <p>
            A place to share things about me, my background, my skills and,
            most importantly, my dreams for the future!
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source for this website available <a href="https://github.com/josephrewald/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
