import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Amir Vera, Eric Levenson and Nouran Salahieh, CNN",
      title:
        "Saskatchewan mass stabbing suspect underwent 'medical distress' and died after his arrest, police say - CNN",
      description:
        'Myles Sanderson, the suspect in the mass stabbing in Canada, died Wednesday after going into "medical distress" after his arrest, according to Royal Canadian Mounted Police Assistant Commissioner Rhonda Blackmore.',
      url: "https://www.cnn.com/2022/09/07/us/saskatchewan-canada-stabbing-wednesday/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220907225706-07-myles-sanderson-arrest-super-tease.jpg",
      publishedAt: "2022-09-08T04:19:00Z",
      content:
        '(CNN)Myles Sanderson, the suspect in the mass stabbing in Canada, died Wednesday after going into "medical distress" after his arrest, according to Royal Canadian Mounted Police Assistant Commissione… [+7870 chars]',
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title:
        'Suspect wanted for "multiple shootings" in Memphis captured following manhunt - CBS News',
      description:
        'The 19-year-old suspect was "recording his actions on Facebook," police said.',
      url: "https://www.cbsnews.com/news/ezekiel-kelly-memphis-shooting-suspect-arrested/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2022/09/08/c6c26032-c934-462e-a503-5e36089d339a/thumbnail/1200x630/7d81e95e7a38d2ca8fd31057b98a7cf9/my-project-1.jpg",
      publishedAt: "2022-09-08T04:08:00Z",
      content:
        "Police in Memphis, Tennessee, said a man who drove around the city shooting at people during an hours-long rampage that forced frightened people to shelter in place Wednesday has been arrested. \r\nMem… [+2132 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Imad Khan, Patrick Holland",
      title:
        "iPhone 14 Pro and 14 Pro Max Hands-on: No Notch, Dynamic Island, 48MP Camera - CNET",
      description:
        "Apple packed its Pro iPhone models with a bunch of significant updates.",
      url: "https://www.cnet.com/tech/mobile/iphone-14-pro-and-14-pro-max-hands-on-no-notch-dynamic-island-48mp-camera/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/599b001fd8f6f57b213a1e7effce57b4fe5e4469/2022/09/07/db442b8b-9da2-422d-9b80-5550401cbfcd/apple-event-090722-iphone-14-pro-14-pro-max-7244.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-09-08T03:10:00Z",
      content:
        "This story is part of Focal Point iPhone 2022, CNET's collection of news, tips and advice around Apple's most popular product. \r\nApple unveiled a new line of iPhones at its \"Far Out\" event on Wednesd… [+11262 chars]",
    },
    {
      source: {
        id: null,
        name: "Variety",
      },
      author: "Ellise Shafer",
      title:
        "Harry Styles Jokes He Went to ‘Venice to Spit on Chris Pine’ During Return to Madison Square Garden - Variety",
      description:
        "During his return to Madison Square Garden on Wednesday night, Harry Styles took a moment to address internet speculation that he spat on Chris Pine during the premiere of “Don’t Worry Darling” at Venice Film Festival. “This is our tenth show at Madison Squar…",
      url: "https://variety.com/2022/music/news/harry-styles-chris-pine-spit-joke-madison-square-garden-1235364010/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/08/GettyImages-1409482128.jpg?w=1024",
      publishedAt: "2022-09-08T02:05:00Z",
      content:
        "During his return to Madison Square Garden on Wednesday night, Harry Styles took a moment to address internet speculation that he spat on Chris Pine during the premiere of “Don’t Worry Darling” at Ve… [+1697 chars]",
    },
    {
      source: {
        id: null,
        name: "FOX5 Las Vegas",
      },
      author: "FOX5 Staff",
      title:
        "LVMPD: Robert Telles is in custody in connection with stabbing death of journalist - Fox 5 Las Vegas",
      description:
        "The Las Vegas Metropolitan Police Department has taken Clark County Administrator Robert Telles into custody following a search warrant earlier Wednesday morning.",
      url: "https://www.fox5vegas.com/2022/09/08/sources-robert-telles-is-custody-connection-with-stabbing-death-journalist/",
      urlToImage:
        "https://gray-kvvu-prod.cdn.arcpublishing.com/resizer/X3CQ739Xf8whFMqvStK_673ilGI=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/EIGY2IR6PVAETID7V2ADEKB2XY.jpg",
      publishedAt: "2022-09-08T01:44:00Z",
      content:
        "LAS VEGAS, Nev. (FOX5) - The Las Vegas Metropolitan Police Department has taken Clark County Administrator Robert Telles into custody following a search warrant earlier Wednesday morning.\r\nPolice spe… [+1107 chars]",
    },
    {
      source: {
        id: null,
        name: "Football.London",
      },
      author: "Daniel Childs",
      title:
        "Tammy Abraham return, Pulisic resurgence: Chelsea players who could benefit from Tuchel sacking - Football.London",
      description:
        "Thomas Tuchel's dismissal will send shockwaves around Stamford Bridge, potentially giving a route back for some players",
      url: "https://www.football.london/chelsea-fc/news/tammy-abraham-pulisic-chelsea-tuchel-24956222",
      urlToImage:
        "https://i2-prod.football.london/incoming/article24956831.ece/ALTERNATES/s1200/0_GettyImages-1421025204.jpg",
      publishedAt: "2022-09-08T01:00:00Z",
      content:
        "In the aftermath of Frank Lampard's sacking, one of Thomas Tuchel's first jobs was to reengage and offer clean slates to players who had fallen out of favour before his arrival.\r\nCesar Azpilicueta, A… [+3411 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Mark Serrels",
      title:
        "'Don't Worry Darling': The Harry Styles and Olivia Wilde Cast Drama Explained - CNET",
      description: "The drama behind this movie is setting the internet off.",
      url: "https://www.cnet.com/culture/internet/dont-worry-darling-the-harry-styles-and-olivia-wilde-cast-drama-explained/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/2ee06da38986088f0625f672f321b502c7a19173/2022/09/06/852284e1-c9e3-4c68-aa3d-2bf61e14ee06/gettyimages-1421108717.jpg?auto=webp&fit=crop&height=630&precrop=3222,1810,x0,y145&width=1200",
      publishedAt: "2022-09-08T00:46:00Z",
      content:
        "Don't Worry Darling, the movie from acclaimed Booksmart director Olivia Wilde, made its debut at the Venice Film Festival on Monday.\r\nIt's a movie mired in controversy, making headlines for the wrong… [+5695 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title: "FBI sought to interview 31-year-old Trump aide: NYT - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiZ2h0dHBzOi8vdGhlaGlsbC5jb20vaG9tZW5ld3MvYWRtaW5pc3RyYXRpb24vMzYzMzEzNy1mYmktc291Z2h0LXRvLWludGVydmlldy0zMS15ZWFyLW9sZC10cnVtcC1haWRlLW55dC_SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-09-08T00:05:00Z",
      content: null,
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Christine Fernando, USA TODAY",
      title:
        "California heat wave: No rolling blackouts but thousands without power - USA TODAY",
      description:
        "As a historic heat wave hits the West, shattering records and straining California's electricity grid, thousands were left without power Wednesday.",
      url: "https://www.usatoday.com/story/news/nation/2022/09/07/california-heat-wave-blackout-power-outages/8009244001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/09/06/USAT/c5e4faaf-f40c-43b6-bfd4-a147a9557900-AP_California_Wildfires_2.jpg?auto=webp&crop=5281,2971,x0,y230&format=pjpg&width=1200",
      publishedAt: "2022-09-08T00:00:00Z",
      content:
        "As a historic heat wave hits the West, shattering records and straining California's electricity grid, thousands of people were left without power Wednesday.\r\nTuesday, the state narrowly avoided roll… [+5844 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Sarah E. Needleman",
      title:
        "Elon Musk Allowed to Amend Twitter Countersuit to Add Whistleblower Claims - The Wall Street Journal",
      description:
        "The judge in the lawsuit over Twitter and Elon Musk’s stalled $44 billion takeover said the billionaire can amend his countersuit to include allegations of mismanagement by the social-media platform’s former head of security.",
      url: "https://www.wsj.com/articles/elon-musk-allowed-to-amend-twitter-countersuit-to-add-whistleblower-claims-11662558676",
      urlToImage: "https://images.wsj.net/im-617935/social",
      publishedAt: "2022-09-07T23:58:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Vulture",
      },
      author: "Bethy Squires",
      title: "Ricky Martin Is Suing His Nephew for $20 Million - Vulture",
      description:
        "Sanchez claimed in July that Martin had been physically abusive while the two engaged in a sexual relationship, claims Martin denied and Sanchez later withdrew.",
      url: "http://www.vulture.com/2022/09/ricky-martin-is-suing-his-nephew-for-usd20-million.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/1f4/94c/768ffbec7cc2db30a555a5f3465c7a43a8-ricky-martin.1x.rsocial.w1200.jpg",
      publishedAt: "2022-09-07T23:55:17Z",
      content:
        "Ricky Martin is suing the nephew who accused him of domestic abuse and of having an affair with him, a claim that was later recanted. According to TMZ,Martins lawsuit alleges that Dennis Yadiel Sanch… [+885 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Eugene Scott, Mariana Alfaro",
      title:
        "At portrait unveiling, Michelle Obama's broad-brush comments touch on Trump - The Washington Post",
      description:
        '“Our democracy is so much stronger than our differences,«  the former first lady said.  »And this little girl from the South Side is blessed beyond measure to have felt the truth of that fuller story."',
      url: "https://www.washingtonpost.com/politics/2022/09/07/michelle-obama-white-house-democracy/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-07-2022/t_0ea6fa6727ba46f6a259e797d229d001_name_michelle.jpg&w=1440",
      publishedAt: "2022-09-07T23:44:00Z",
      content:
        "In her first White House visit since the end of Barack Obamas presidency, Michelle Obama spoke to the importance of honoring long-held traditions including upholding a democracy during the historic u… [+4042 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Teddy Grant",
      title:
        "Cancers in adults below 50 have 'dramatically increased': Report - ABC News",
      description:
        "The study found that incidences are partially attributable to early screenings.",
      url: "https://abcnews.go.com/Health/cancers-adults-50-dramatically-increased-report/story?id=89475807",
      urlToImage:
        "https://s.abcnews.com/images/US/cancer-treatment-gty-jt-220907_1662584242583_hpMain_16x9_992.jpg",
      publishedAt: "2022-09-07T23:43:34Z",
      content:
        'Early onset cancers defined as cancers discovered in adults younger than 50 years old, have "dramatically increased" around the world over the last few decades, according to a new report by researche… [+2079 chars]',
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Lori Bashian",
      title:
        "‘Ticket to Paradise’ star Julia Roberts pays tribute to her family at movie premiere with sentimental dress - Fox News",
      description:
        'Julia Roberts hit the "Ticket to Paradise" premiere red carpet in a dress which paid tribute to her family. She walked the carpet with her friend and co-star George Clooney.',
      url: "https://www.foxnews.com/entertainment/julia-roberts-pays-tribute-family-ticket-paradise-premiere-dress",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/Julia-Roberts-1.jpg",
      publishedAt: "2022-09-07T23:18:23Z",
      content:
        'Julia Roberts made a statement at the "Ticket to Paradise" London premiere on Wednesday, wearing a dress with designs meaningful to her and her family. \r\nThe actress wore a black Alexander McQueen dr… [+3279 chars]',
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Antonio Olivo",
      title:
        "From border town to 'border town,' bused migrants seek new lives in D.C. area - The Washington Post",
      description:
        "For many of the migrants who have accepted the rides, any political gamesmanship has been irrelevant. The buses have turned into a welcomed way to get to their final destinations.",
      url: "https://www.washingtonpost.com/dc-md-va/2022/09/07/migrants-dc-buses-texas/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7URMG2BFLEI63JZPDZYUSBZPXQ.jpg&w=1440",
      publishedAt: "2022-09-07T22:51:00Z",
      content:
        "DEL RIO, Tex. They marched in caravans for weeks, past dead bodies while dodging kidnappers and thieves and now, some of the migrants crowded inside a tiny stucco building just past the Rio Grande we… [+15780 chars]",
    },
    {
      source: {
        id: null,
        name: "Arrowhead Pride",
      },
      author: "John Dixon",
      title:
        "In Chiefs’ new-look offense, Mahomes says receivers will come from ‘everywhere’ - Arrowhead Pride",
      description:
        "Starting on Sunday, we’ll finally get to see what the Kansas City offense will now be like.",
      url: "https://www.arrowheadpride.com/2022/9/7/23341758/in-chiefs-new-look-offense-mahomes-says-receivers-will-come-from-everywhere",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/l5SVvaRPIAoGc5gdy7VN3hvNnqY=/939x413:3442x1723/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24003787/1242622360.jpg",
      publishedAt: "2022-09-07T22:50:25Z",
      content:
        "Throughout the 2022 offseason, its been difficult to consume any Kansas City Chiefs news without mention of departed wide receiver Tyreek Hill. How will the quarterback Patrick Mahomes continue to pr… [+5755 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Sandee LaMotte, CNN",
      title:
        "Vitamin D won't protect you from Covid or respiratory infections, studies say - CNN",
      description:
        "Boosting vitamin D levels in adults during the pandemic was not associated with protection against Covid-19 or respiratory tract infections such as colds or the flu, according to two large clinical trials.",
      url: "https://www.cnn.com/2022/09/07/health/vitamin-d-covid-protection-study-wellness/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220907115911-01-vitamin-d-covid-protection-wellness-vitamin-d-super-tease.jpg",
      publishedAt: "2022-09-07T22:30:00Z",
      content:
        "(CNN)Vitamin D supplements aren't likely to prevent an infection from Covid-19 or respiratory infections like colds or flu, even if your current levels of the vitamin are low, according to two new, l… [+6904 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Putin says Russia has ‘not lost a thing’ from war in Ukraine - The Hill",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMibGh0dHBzOi8vdGhlaGlsbC5jb20vcG9saWN5L2ludGVybmF0aW9uYWwvMzYzMjkwNS1wdXRpbi1zYXlzLXJ1c3NpYS1oYXMtbm90LWxvc3QtYS10aGluZy1mcm9tLXdhci1pbi11a3JhaW5lL9IBAA?oc=5",
      urlToImage: null,
      publishedAt: "2022-09-07T22:19:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "San Francisco Chronicle",
      },
      author: "Aidin Vaziri, Anna Buchmann",
      title:
        "COVID in California: Anxiety and depression may raise odds of long COVID - San Francisco Chronicle",
      description:
        "Psychological stressors may play a greater role than physical ailments in a patient’s...",
      url: "https://www.sfchronicle.com/health/article/COVID-in-California-live-updates-17422946.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/14/56/36/20113288/19/rawImage.jpg",
      publishedAt: "2022-09-07T21:56:15Z",
      content:
        "Anxiety and depression may raise odds of long COVID, study finds\r\nPsychological stressors may play a greater role than physical ailments in a patients likelihood of experiencing symptoms of long COVI… [+9743 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Sami Fathi",
      title: "New AirPods Pro Do Not Support Lossless Apple Music - MacRumors",
      description:
        "The new AirPods Pro, despite featuring an all-new H2 chip and improved audio quality, do not appear to include support for lossless Apple Music...",
      url: "https://www.macrumors.com/2022/09/07/airpods-pro-2-no-lossless-audio/",
      urlToImage:
        "https://images.macrumors.com/t/M_haQlFKiTwwTYOkqiIEPK_csv4=/1920x/article-new/2022/09/airpods-pro-2.jpg",
      publishedAt: "2022-09-07T21:31:47Z",
      content:
        "The new AirPods Pro, despite featuring an all-new H2 chip and improved audio quality, do not appear to include support for lossless Apple Music audio.\r\nThe H2 chip is the successor to the previous H1… [+1031 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hello i am constructor.");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">

            {this.state.articles.map((element)=>{
              return <NewsItem
              newsUrl="Todo"
              title="mytitle"
              description="My Descripton"
              imageUrl="https://cdn.cnn.com/cnnnext/dam/assets/220907225706-07-myles-sanderson-arrest-super-tease.jpg"
            />;
            })}
            
          </div>
        </div>
      </div>
    );
  }
}

export default News;
