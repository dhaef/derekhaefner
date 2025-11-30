import Layout from '../components/layout';
import styles from './projects.module.css';
import Image from 'next/image';
import Head from 'next/head';

function Project({ link, img, title, description, tools }) {
  return (
    <div className={styles.container}>
      <a href={link}>
        <Image src={img} width={1000} height={500} className={styles.pic} />
      </a>
      <p className={styles.name}>{title}</p>
      <p>
        <span>Description:</span> {description}
      </p>
      <p>
        <span>Tools:</span> {tools}
      </p>
    </div>
  );
}

const projects = [
  {
    link: 'https://www.apiretriever.com/',
    img: '/apiretriever.png',
    title: 'APIRetriever',
    description: `Easily import data into a SmartSheet sheet from any API request. Automate importing data using scheduled requests.`,
    tools:
      'React, styled-components, Node/Express, Typescript, Supabase, Docker, DigitalOcean',
  },
  {
    link: 'https://www.pass.derekhaefner.com/',
    img: '/my_pass.png',
    title: 'My Pass',
    description: `Custom password manager`,
    tools: 'Ruby on Rails, Docker, DigitalOcean',
  },
  {
    link: 'https://www.dmaheatmap.com/',
    img: '/dma_heat_map.png',
    title: 'DMA Heat Map',
    description: `DMA Heat Map is a tool that takes data from
    MRI-Simmons consumer profiling software and creates a heat map based
    on areas that the target consumer indexes highly or that a large
    percentage of the target lives in. MRI offers two studies,
    Market-By-Market (DMA) & Doublebase (State), that have location
    based qualifiers and DMA Heat Map allows users to visualize their target
    by both DMAs or states.`,
    tools: 'JavaScript, HTML, CSS, D3.js, Node/Express, Docker, DigitalOcean',
  },
  {
    link: 'https://github.com/dhaef/stay-in-touch',
    img: '/keep-in-touch.png',
    title: 'Keep In Touch',
    description: `Keep In Touch allows users to create a system to be reminded to stay in touch with their friends and family.`,
    tools:
      'React, Node/Express, Antd, Styled-Components, Dynamodb, Cognito, Lambda, Stripe',
  },
  {
    link: 'https://github.com/dhaef/fin-report',
    img: '/financial-snapshot.png',
    title: 'Financial Snapshot',
    description: `Financial Snapshot connects all your financial accounts into a weekly, monthly, and quarterly email report.`,
    tools:
      'React, Node/Express, Antd, Styled-Components, Dynamodb, Cognito, Lambda, Stripe, Plaid',
  },
  {
    link: 'https://github.com/dhaef/discover_rei',
    img: '/xploreplaces.png',
    title: 'XplorePlaces',
    description: `XplorePlaces is a tool that calculates the
    best metro areas and counties in the U.S. using data collected from
    government databases. This data includes population, population
    growth, GDP growth, GDP diversity, job growth, unemployment, and
    severe weather damage. Each place is scored off of all of these data
    points and then totaled to calculate the overall score. Each place
    has it’s page where the user can explore historical data for that
    place.`,
    tools: 'React, Node/Express, CSS, PostgreSQL, Chart.js',
  },
  {
    link: 'https://github.com/dhaef/battleship',
    img: '/battleship.png',
    title: 'Battleship',
    description: `Recreated the well known game of
    battleship using test driven development and factory functions`,
    tools: 'JavaScript, React, CSS',
  },
  {
    link: 'https://github.com/dhaef/field_app',
    img: '/discoverfields.png',
    title: 'Discover Fields',
    description: `Discover fields is a tool that allows
    users to add markers to a Google Map to mark where sports fields are
    located in their local area. These markers display the sport with
    the mark and offer information about whether they are public or
    private fields and a small description.`,
    tools: 'JavaScript, HTML, CSS, Google Maps API',
  },
];

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.wrapper}>
        {projects.map((p, i) => (
          <Project
            key={i}
            title={p.title}
            link={p.link}
            img={p.img}
            description={p.description}
            tools={p.tools}
          />
        ))}
      </div>
    </Layout>
  );
}
