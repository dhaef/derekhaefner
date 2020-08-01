import Layout from '../components/layout'
import styles from './projects.module.css'

export default function Projects() {
    return (
        <Layout>
            <h1
                // style={{ textAlign: 'center' }}
                className={styles.title}
            >Projects</h1>
            <div className={styles.container}>
                <a href="https://www.xploreplaces.com/"><img src="/xploreplaces.png" className={styles.pic} /></a>
                <p className={styles.name}>XplorePlaces</p>
                <p><span>Description:</span> XplorePlaces is a tool that calculates the best metro areas and counties in the U.S. using data collected from government databases. This data includes population, population growth, GDP growth, GDP diversity, job growth, unemployment, and severe weather damage. Each place is scored off of all of these data points and then totaled to calculate the overall score. Each place has it’s page where the user can explore historical data for that place.</p>
                <p><span>Tools used:</span> React, Node/Express, CSS, PostgreSQL, Chart.js</p>
            </div>
            <div className={styles.container}>
                <a href="https://www.vizlyte.com/"><img src="/vizlyte.png" className={styles.pic} /></a>
                <p className={styles.name}>Vizlyte</p>
                <p><span>Description:</span> Vizlyte is a tool that takes data from MRI-Simmons consumer profiling software and creates a heat map based on areas that the target consumer indexes highly or that a large percentage of the target lives in. MRI offers two studies, Market-By-Market (DMA) & Doublebase (State), that have location based qualifiers and Vizlyte allows users to visualize their target by both DMAs or states.</p>
                <p><span>Tools used:</span> JavaScript, HTML, CSS, D3.js, Node/Express</p>
            </div>
            <div className={styles.container}>
                <a href="http://www.discoverfields.com/"><img src="/discoverfields.png" className={styles.pic} /></a>
                <p className={styles.name}>Discover Fields</p>
                <p><span>Description:</span> Discover fields is a tool that allows users to add markers to a Google Map to mark where sports fields are located in their local area. These markers display the sport with the mark and offer information about whether they are public or private fields and a small description.</p>
                <p><span>Tools used:</span> JavaScript, HTML, CSS, Google Maps API</p>
            </div>
            <div className={styles.container}>
                <a href="https://github.com/dhaef/ecom-sample"><img src="/react-ecom.png" className={styles.pic} /></a>
                <p className={styles.name}>React Ecommerce</p>
                <p><span>Description:</span> React Ecommerce is an example online clothing store that offers the basic functionality of an ecommerce store. This was the first app that I created when I started learning react. I also used it as an opportunity to get familiar with the CSS framework bootstrap.</p>
                <p><span>Tools used:</span> React, Bootstrap</p>
            </div>
        </Layout>
    )
}