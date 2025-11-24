import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import styles from '../story.module.css';
import { marked } from 'marked';

export default function Blogs() {
  const router = useRouter()
  console.log(router.query.slug)
  const htmlContent = marked.parse(`I’m a self-proclaimed, but more importantly, self-taught developer. The journey towards building my professional identity started in the summer of 2019 as a recent college grad. Once I was faced with the world outside of the academic bubble, I knew I had some serious reflection. Although I was an academically strong student, I never felt at ease or challenged in my classes. To my surprise, I began to thrive once the rigid academic structure subsided. I finally understood the concept that educational systems preach and often fall short on implementing the learning-by-doing theory. My most recent project is called XplorePlaces, but before I get ahead of myself, let's rewind.<br>
My professional identity starts at my current job, where I developed a brainstormed idea into mapping software and eventually a full-stack website, called Vizlyte. One of my daily tasks consists of compiling consumer information that is given to our sales team. These comprehensive presentations aim to educate the media services team or the client on who the consumer is. I thought the mapping software would provide an easier to understand and more complete picture of the data that was sent to clients. Through many hours of brainstorming, I devised a plan to create my own software that would build a heat map to show where the consumers we pulled were heavily concentrated. The heat map would be composed of the data that we already provide to clients but would provide a visually appealing and easy-to-read display. As with most things in life, high aspirations come with significant challenges. One of which being that I had minimal experience piecing together HTML, CSS, JavaScript, & PHP. As I spent most of my spare time researching these languages and developing my idea, I discovered D3.js, which is a JS library for mapping geojson data. Honestly, the struggle to construct my software seemed never-ending. As I pieced together information, it seemed as if I took two steps backward for every 1 step forward. I usually don’t condone blame-shifting, but for this instance only, I blame Promises. I realized the attempt to create such a vast and intricate software might have been an ambitious first move. Therefore, I redirected my study to learn the basics of JavaScript. After a few months, I felt confident in my JavaScript abilities to code the heat map, and before I knew it, it was working! Like any victory speech, I would like to thank async, await, and my friends & family.<br>
Although coworkers gave me a strange look when I explained that I enjoyed using my Thursday nights and Saturday mornings to develop software for work, I was excited that I established a new passion. I subsequently turned the software into a full-stack application to be used by my team members. To do this, I used vanilla JS, Node, Express, HTML, CSS, and MongoDB and called it Vizlyte. The heatmap is used in ~80% of our consumer reports, and on average, 75% of my team members use the application daily.<br>
Due to my Vizlyte dedication, I mistakenly deprived myself of the most crucial part of my identity, soccer. Once I moved to Chicago, I realized that I no longer had access to the suburban soccer fields that I, along with local little league soccer players, treasured. To my dismay, finding a publicly accessible soccer field was harder than finding a regular ice cream parlor in the city. Using my newly developed tech skills, I created a simple web application that allows users to add markers to indicate accessible sports fields. This application uses GoogleMaps and a variety of symbols to designate the field type. You can check out DiscoverFields here and add your favorite spot!<br>
As stated before, I learn best by doing, so that is exactly what I continue to do. At this point in my professional development, I knew that I had found a passion for developing software. More importantly, I had invoked a curiosity for learning that is not controlled by a GPA. As I began brainstorming my next project, I read about React, and wanted to check it out. To practice my skills, I created a React E-commerce website that includes all of the essential functions. While it is no fullstack Nike ecommerce store, I am incredibly proud of how fast I acquired this skillset.<br>
Returning to suburbia as the COVID-19 lockdown ramped up, I began thinking about what a person would prioritize as they settled into a permanent home. Additionally, as scientific information filled my television, I realized that public data is everywhere, but without a streamlined system for an average consumer to utilize it, it is fundamentally useless. These thoughts prompted my latest project, called XplorePlaces. This web application ranks U.S. metro areas and counties in order for a person to find their ideal community in a way that is user friendly. XplorePlaces uses public data to rank communities in 6-7 (and growing) data points. The application is built using React, CSS, Node, Express, Chartjs, and Postgresql. As a personal challenge, each project I begin, I add two new software types to advance my knowledge in the endlessly evolving tech world.<br>
Currently, I am searching for opportunities to develop my passion into my career by looking for an entry level position with a company that supports the growth of their employees. I have endless potential to offer as a hardworking, curious life-long learner.<br>
On a more personal note, I do enjoy numerous things outside of tech development as well! As stated, watching and playing soccer has always been my favorite form of exercise and socializing. I consider myself an ice cream connoisseur and love trying new foods. After 23 years, I finally made it out of the country and found an endless love of travel. I spent this past Christmas in Central Europe and Spain, attempting to find the best dessert Europe has to offer.`,
    { gfm: true, breaks: true })

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>“Hello World!” I’m Derek,</h1>
          <div className={styles.body}>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
