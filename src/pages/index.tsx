import React from 'react';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import Section from '../components/Section';
import Animation from '../components/Animation';
import ResponsiveDesign from '../components/ResponsiveDesign';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ImGeX</title>
        <meta name="description" content="Free placeholder image service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage />
        <Section id="section1">
          <Animation id="animation1" />
          <ResponsiveDesign />
        </Section>
        <Section id="section2">
          <Animation id="animation2" />
          <ResponsiveDesign />
        </Section>
      </main>
    </div>
  );
};

export default Home;