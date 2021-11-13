import Layout from '../components/layout';
import styles from './projects.module.css';
import Image from 'next/image';

export default function Projects() {
  return (
    <Layout>
      <h1
        // style={{ textAlign: 'center' }}
        className={styles.title}
      >
        Projects
      </h1>
      <div className={styles.container}>
        <a href="https://www.qrcontacttracer.com/">
          <Image
            src="/qr-contact-tracer.png"
            width={1000}
            height={500}
            className={styles.pic}
          />
        </a>
        {/* <a href="https://www.qrcontacttracer.com/"><img src="/qr-contact-tracer.png" loading="lazy" className={styles.pic} /></a> */}
        <p className={styles.name}>QR Contact Tracer</p>
        <p>
          <span>Description:</span> QR Contact Tracer is a web application that
          allows businesses to safely and easily collect customer contact info
          through QR codes to slow the spread of COVID-19.
        </p>
        <p>
          <span>Tools used:</span> React, Node/Express, CSS, PostgreSQL, Stripe
        </p>
      </div>
      <div className={styles.container}>
        <a href="https://github.com/dhaef/discover_rei">
          <Image
            src="/xploreplaces.png"
            width={1000}
            height={500}
            className={styles.pic}
          />
        </a>
        <p className={styles.name}>XplorePlaces</p>
        <p>
          <span>Description:</span> XplorePlaces is a tool that calculates the
          best metro areas and counties in the U.S. using data collected from
          government databases. This data includes population, population
          growth, GDP growth, GDP diversity, job growth, unemployment, and
          severe weather damage. Each place is scored off of all of these data
          points and then totaled to calculate the overall score. Each place has
          it’s page where the user can explore historical data for that place.
        </p>
        <p>
          <span>Tools used:</span> React, Node/Express, CSS, PostgreSQL,
          Chart.js
        </p>
      </div>
      <div className={styles.container}>
        <a href="https://www.vizlyte.com/">
          <Image
            src="/vizlyte.png"
            width={1000}
            height={500}
            className={styles.pic}
          />
        </a>
        <p className={styles.name}>Vizlyte</p>
        <p>
          <span>Description:</span> Vizlyte is a tool that takes data from
          MRI-Simmons consumer profiling software and creates a heat map based
          on areas that the target consumer indexes highly or that a large
          percentage of the target lives in. MRI offers two studies,
          Market-By-Market (DMA) & Doublebase (State), that have location based
          qualifiers and Vizlyte allows users to visualize their target by both
          DMAs or states.
        </p>
        <p>
          <span>Tools used:</span> JavaScript, HTML, CSS, D3.js, Node/Express
        </p>
      </div>
      <div className={styles.container}>
        <a href="https://github.com/dhaef/battleship">
          <Image
            src="/battleship.png"
            width={1000}
            height={500}
            className={styles.pic}
          />
        </a>
        <p className={styles.name}>Battleship</p>
        <p>
          <span>Description:</span> Recreated the well known game of battleship
          using test driven development and factory functions
        </p>
        <p>
          <span>Tools used:</span> JavaScript, React, CSS
        </p>
      </div>
      <div className={styles.container}>
        <a href="http://www.discoverfields.com/">
          <Image
            src="/discoverfields.png"
            width={1000}
            height={500}
            className={styles.pic}
          />
        </a>
        <p className={styles.name}>Discover Fields</p>
        <p>
          <span>Description:</span> Discover fields is a tool that allows users
          to add markers to a Google Map to mark where sports fields are located
          in their local area. These markers display the sport with the mark and
          offer information about whether they are public or private fields and
          a small description.
        </p>
        <p>
          <span>Tools used:</span> JavaScript, HTML, CSS, Google Maps API
        </p>
      </div>
      <div className={styles.container}>
        <a href="https://github.com/dhaef/ecom-sample">
          <Image
            src="/react-ecom.png"
            width={1000}
            height={500}
            className={styles.pic}
          />
        </a>
        <p className={styles.name}>React Ecommerce</p>
        <p>
          <span>Description:</span> React Ecommerce is an example online
          clothing store that offers the basic functionality of an ecommerce
          store. This was the first app that I created when I started learning
          react. I also used it as an opportunity to get familiar with the CSS
          framework bootstrap.
        </p>
        <p>
          <span>Tools used:</span> React, Bootstrap
        </p>
      </div>
    </Layout>
  );
}
