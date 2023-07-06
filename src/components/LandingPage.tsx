import React from 'react';
import Section from './Section';
import Animation from './Animation';
import ResponsiveDesign from './ResponsiveDesign';
import '../styles/landingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div id="landingPage" className="responsiveDesign">
      <header>
        <h1>ImGeX</h1>
        <p>A free placeholder image service</p>
      </header>
      <main>
        <Section>
          <Animation>
            <h2>How it works</h2>
            <p>
              Set an img tag "src" attribute to "https://imgex.ai/?h=100&w=100&p=human%20face" and that will return a 100px by 100px image.
            </p>
          </Animation>
        </Section>
        <Section>
          <Animation>
            <h2>Image Generation</h2>
            <p>
              The service initially checks a cache for an existing hit on the query parameters "h","w", "p". If it exists, it returns that image. If it does not exist it returns a default placeholder of the correct size. It also queues an asynchronous job to generate an image with the prompt given in the "p" parameter using OpenAI's image generation API. When that completes it uploads that image to the CloudFlare R2 backend and links the cache to that link.
            </p>
          </Animation>
        </Section>
      </main>
    </div>
  );
};

export default LandingPage;