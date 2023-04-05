import React, { Component } from 'react'

import NewsItem from './NewsItem'
import { Spinner } from './Spinner'




export default class News extends Component {
    articles = [

        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katelyn Polantz, Paula Reid, Zachary Cohen, Devan Cole, Tierney Sneed",
            "title": "Mike Pence must testify about conversations he had with Donald Trump leading up to January 6, judge rules - CNN",
            "description": "A federal judge has decided that former Vice President Mike Pence must testify to a grand jury about conversations he had with Donald Trump leading up to January 6, 2021, according to multiple sources familiar with a recent federal court ruling.",
            "url": "https://www.cnn.com/2023/03/28/politics/mike-pence-grand-jury-testimony/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230124171849-file-pence-nov-2022.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-28T18:25:00Z",
            "content": "A federal judge has decided that former Vice President Mike Pence must testify to a grand jury about conversations he had with Donald Trump leading up to January 6, 2021, according to multiple source… [+4509 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": "Leila Abboud, Adrienne Klasa, Sarah White",
            "title": "Smaller crowds turn out at French pension reform protests - Financial Times",
            "description": "Universities and tourist sites closed as government rejects unions’ idea of mediation to alleviate crisis",
            "url": "https://www.ft.com/content/83879c75-74ed-43ed-9c40-6be968cc9788",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F2e4043d0-f4a9-447a-bc38-c8f698230789.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2023-03-28T18:22:42Z",
            "content": "Smaller crowds turned out across France in the tenth nationwide protest held by labour unions against President Emmanuel Macrons unpopular plan to raise the retirement age, while strikes disrupted tr… [+4539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Christina Wilkie, Chelsey Cox",
            "title": "SVB hearing live updates: Senators grill Fed, FDIC and Treasury over bank failures - CNBC",
            "description": "This is CNBC's live blog tracking Tuesday's hearing on the collapse of Silicon Valley Bank and other lenders before the Senate Banking Committee.",
            "url": "https://www.cnbc.com/2023/03/28/silicon-valley-bank-hearing-live-updates-fdic-treasury-and-fed-officials-testify-before-senate-panel.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107215661-1679931638988-gettyimages-1249578774-raa-siliconv230327_np8LW.jpeg?v=1680010096&w=1920&h=1080",
            "publishedAt": "2023-03-28T18:00:00Z",
            "content": "The nation's top bank regulators faced tough questions from Congress for the first time Tuesday about how Silicon Valley Bank and Signature Bank collapsed practically overnight earlier this month.\r\nM… [+3031 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Daniel Kaplan, Ben Standig",
            "title": "Bid to buy Washington Commanders from Dan Snyder submitted by group that includes Magic Johnson: Source - The Athletic",
            "description": "Harris' portfolio includes the NBA’s 76ers, the NHL’s Devils and a minority stake in Premier League's Crystal Palace.",
            "url": "https://theathletic.com/4344643/2023/03/28/nfl-league-meetings-washington-commanders/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2022/11/02184151/Commanders-1024x777.jpg",
            "publishedAt": "2023-03-28T17:41:43Z",
            "content": "A bid to purchase the Washington Commanders from Dan Snyder by a group that includes former NBA star Magic Johnson and is led by businessman and investor Josh Harris has been officially submitted, a … [+5817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Stop Moving\": Body Cam Video Shows How US Cops Took Down School Shooter - NDTV",
            "description": "An unnerving chase through school halls as sirens of varying decibels blared in the background ended under a large cathedral-like window at Nashville's Covenant School on Monday.",
            "url": "https://www.ndtv.com/world-news/video-cops-body-cam-footage-shows-how-they-took-down-us-school-shooter-3901315",
            "urlToImage": "https://c.ndtvimg.com/2023-03/d702sm4o_us-cop-body-cam-footage_625x300_28_March_23.jpg",
            "publishedAt": "2023-03-28T17:41:00Z",
            "content": "Nine shots later, Hale is on the floor of her former school.\r\nAn unnerving chase through school halls as sirens of varying decibels blared in the background ended under a large cathedral-like window … [+1863 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Elizabeth Wagmeister",
            "title": "‘The Bachelor’ Creator Mike Fleiss Parting Ways With Franchise After More Than Two Decades - Variety",
            "description": "“The Bachelor” creator Mike Fleiss is parting ways with the franchise he launched more than two decades ago, Variety has learned. Fleiss will be replaced by new showrunners Claire Freel…",
            "url": "https://variety.com/2023/tv/news/the-bachelor-creator-mike-fleiss-leaving-franchise-1235566819/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/03/Mike-Fleiss.jpg?w=1000&h=562&crop=1",
            "publishedAt": "2023-03-28T17:35:00Z",
            "content": "“The Bachelor” creator Mike Fleiss is parting ways with the franchise he launched more than two decades ago, Variety has learned.\r\nFleiss will be replaced by new showrunners Claire Freeland, Jason Eh… [+3105 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "Ryan Bort",
            "title": "Republican Honestly States GOP Plan for School Shootings: ‘We’re Not Going to Fix It’ - Rolling Stone",
            "description": "Gun-loving Tennessee Rep. Tim Burchett acknowledged the reality about children dying as long as Americans can own high-powered rifles",
            "url": "https://www.rollingstone.com/politics/politics-news/tim-burchett-gop-nashville-shooting-1234704788/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/03/tim-burchett.jpg?crop=0px%2C25px%2C1800px%2C1014px&resize=1600%2C900",
            "publishedAt": "2023-03-28T16:43:57Z",
            "content": "The Republican Party refuses to support meaningful gun control measures, which means they’re forced to trot out what seem like increasingly ridiculous solutions to the nation’s epidemic of school sho… [+2008 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Brett Molina",
            "title": "Apple iOS 16.4: The new emoji you can use on iPhone - USA TODAY",
            "description": "Apple rolled out the newest update for iPhones, iOS 16.4, which includes several features and security enhancements, plus a fresh batch of emojis.",
            "url": "https://www.usatoday.com/story/tech/2023/03/28/ios-update-emoji-apple/11555381002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/02/18/USAT/6dfc4a72-382a-4b57-b301-b922440eba37-Apple_new_emojis_2023_handout.jpg?crop=939,529,x0,y0&width=939&height=529&format=pjpg&auto=webp",
            "publishedAt": "2023-03-28T16:38:30Z",
            "content": "Own an iPhone? It's time for another update.\r\nApple rolled out the newest update for iPhones, iOS 16.4, which includes several features and security enhancements, along with a fresh batch of emojis.\r… [+1985 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Francesca Bacardi",
            "title": "Tom Sandoval reveals if he regrets cheating on Ariana Madix with Raquel Leviss - Page Six",
            "description": "“Hindsight’s always 20/20, man. It’s like when you look back at a situation, you think of all the things [you] should’ve, would’ve, could’ve done,” he said…",
            "url": "https://pagesix.com/2023/03/28/tom-sandoval-regrets-cheating-on-ariana-madix-with-raquel-leviss/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2023/03/NYPICHPDPICT000008894574.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2023-03-28T16:32:00Z",
            "content": "Tom Sandoval admits he “could’ve handled” his affair with Raquel Leviss and the subsequent fallout “way better.”\r\nOn the heels of the explosive “Vanderpump Rules” reunion taping, Sandoval told a papa… [+2214 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Brad Dress",
            "title": "Defense chief slams Tuberville’s hold on Pentagon nominees over abortion policy - The Hill",
            "description": "Defense Secretary Lloyd Austin on Tuesday said there will be “powerful effects” on military readiness if Sen. Tommy Tuberville (R-Ala.) continues to hold up more than 150 Pentagon nominees over an abortion policy in the Defense Department. Austin told the Sen…",
            "url": "https://thehill.com/policy/defense/3921774-defense-chief-slams-tubervilles-hold-on-pentagon-nominees-over-abortion-policy/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/11/tubervilletommy_111622gn_w.jpg?w=1280",
            "publishedAt": "2023-03-28T16:12:00Z",
            "content": "Skip to content\r\nDefense Secretary Lloyd Austin on Tuesday said there will be “powerful effects” on military readiness if Sen. Tommy Tuberville (R-Ala.) continues to hold up more than 150 Pentagon no… [+3121 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Microsoft.com"
            },
            "author": null,
            "title": "With Security Copilot, Microsoft brings the power of AI to cyberdefense - Stories - Microsoft",
            "description": "Trained across security and networking disciplines and armed with trillions of data signals, Security Copilot dramatically increases the reach, speed and effectiveness of any security team REDMOND, Wash. — March 28, 2023 — Microsoft Corp. on Tuesday announced…",
            "url": "https://news.microsoft.com/2023/03/28/with-security-copilot-microsoft-brings-the-power-of-ai-to-cyberdefense/",
            "urlToImage": null,
            "publishedAt": "2023-03-28T15:39:20Z",
            "content": "Trained across security and networking disciplines and armed with trillions of data signals, Security Copilot dramatically increases the reach, speed and effectiveness of any security team\r\nREDMOND, … [+5360 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "Marcia Dunn",
            "title": "New source of water found in moon samples from China mission - The Associated Press",
            "description": "CAPE CANAVERAL, Fla. (AP) — Scientists have discovered a new and renewable source of water on the moon for future explorers in lunar samples from a Chinese mission.  Water was embedded in tiny glass beads in the lunar dirt where meteorite impacts occur.",
            "url": "https://apnews.com/article/water-moon-glass-beads-china-sample-return-28447e31610ad93a78c140ef518086ac",
            "urlToImage": "https://storage.googleapis.com/afs-prod/media/103228d7c6de4b319cb39467755098dc/3000.webp",
            "publishedAt": "2023-03-28T15:35:54Z",
            "content": "CAPE CANAVERAL, Fla. (AP) Scientists have discovered a new and renewable source of water on the moon for future explorers in lunar samples from a Chinese mission. \r\nWater was embedded in tiny glass b… [+2029 chars]"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "John Timmer",
            "title": "Did we already observe our first “blitzar”? - Ars Technica",
            "description": "Radio burst may come from a neutron star that's too big to live.",
            "url": "https://arstechnica.com/science/2023/03/fast-radio-burst-may-point-to-the-first-blitzar-weve-observed/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2020/11/CHIME-Telescope-2.image-jpeg-760x380.jpeg",
            "publishedAt": "2023-03-28T15:34:40Z",
            "content": "Enlarge/ The CHIME telescope has proven adept at picking up fast radio bursts.\r\n15 with \r\nBy combing through a collection of data, researchers may have discovered evidence that we've already observed… [+2587 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Allison Morrow",
            "title": "FTX founder Sam Bankman-Fried tried to bribe Chinese officials, prosecutors say - CNN",
            "description": "Federal prosecutors tacked on a 13th criminal charge against Sam Bankman-Fried, accusing the FTX co-founder of bribing \"one or more\" Chinese government officials with $40 million.",
            "url": "https://www.cnn.com/2023/03/28/business/sbf-bribery-indictment/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328093622-11-sam-bankman-fried-0216-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-03-28T15:31:00Z",
            "content": "Federal prosecutors tacked on a 13th criminal charge against Sam Bankman-Fried, accusing the FTX co-founder of bribing one or more Chinese government officials with $40 million. \r\nThe new indictment … [+2656 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Adrian J. Permal",
            "title": "Is Binance in hot water? CZ sued by the CFTC — Watch The Market Report - Cointelegraph",
            "description": "On this week’s episode of The Market Report, Cointelegraph’s resident expert explains what exactly is going on with Binance, Changpeng Zhao and the CFTC.",
            "url": "https://cointelegraph.com/news/is-binance-in-hot-water-cz-sued-by-the-cftc-watch-the-market-report",
            "urlToImage": "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1200/https://s3.cointelegraph.com/uploads/2023-03/870ee668-7bcc-4a5a-926f-f7bfe69e7274.jpg",
            "publishedAt": "2023-03-28T15:30:00Z",
            "content": "This week on The Market Report, our beloved host, Joe Hall, and insightful expert Sam Bourgi, unfortunately, could not make it, but dont worry because Marcel Pechman is here to breakdown everything t… [+1743 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": "Bucky Brooks",
            "title": "Bucky Brooks 2023 NFL mock draft 3.0: Colts pass on quarterback; Will Levis falls out of first round - NFL.com",
            "description": "In Bucky Brooks' latest mock of Round 1 of the 2023 NFL Draft, he sees the Colts passing on a quarterback at No. 4 overall. Check out his projection for each pick.",
            "url": "https://www.nfl.com/news/bucky-brooks-2023-nfl-mock-draft-3-0-colts-pass-on-quarterback-will-levis-falls-",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/v00zhxxjkbok0fkxcdfo",
            "publishedAt": "2023-03-28T15:10:00Z",
            "content": "After a wild opening wave of free agency -- with signings, releases and trades reshaping rosters across the league -- it's time to assess the impact on the 2023 NFL Draft. Here's my updated forecast … [+390 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": null,
            "title": "Fantasy baseball 2023 rankings, cheat sheets: C, 1B, 2B, SS, 3B, OF, RP, SP picks, ADP tiers, draft advice - CBS Sports",
            "description": "SportsLine simulated the entire MLB season and identified 2023 Fantasy baseball positional ranking tiers",
            "url": "https://www.cbssports.com/fantasy/baseball/news/fantasy-baseball-2023-rankings-cheat-sheets-c-1b-2b-ss-3b-of-rp-sp-picks-adp-tiers-draft-advice/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/01/0206a719-4e1d-4e95-9867-258aff9c35dc/thumbnail/1200x675/5a34aa965a4fb28c9d5161253081074e/usatsi-mookie-betts-dodgers.jpg",
            "publishedAt": "2023-03-28T15:05:51Z",
            "content": "The beginning of the 2023 MLB season is just two days away, with the first games starting on Thursday afternoon. There is not much time left to prepare a winning 2023 Fantasy baseball strategy before… [+5712 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Emma Kinery",
            "title": "As McCarthy laments 'no progress,' here's where U.S. debt ceiling talks stand - CNBC",
            "description": "House Speaker Kevin McCarthy told CNBC's \"Squawk Box\" there has been \"no progress\" in debt ceiling negotiations between House Republicans and the White House.",
            "url": "https://www.cnbc.com/2023/03/28/debt-ceiling-news-mccarthy-says-talks-with-biden-have-made-no-progress.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107216244-1680009945523-gettyimages-1249274887-parents_bill795_032423.jpeg?v=1680014274&w=1920&h=1080",
            "publishedAt": "2023-03-28T14:37:54Z",
            "content": "House Speaker Kevin McCarthy said Tuesday that there has been \"no progress\" in debt ceiling negotiations between House Republicans and the White House, as the U.S. inches closer to risking a first-ev… [+3453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GMA"
            },
            "author": "Carson Blackwelder, George Costantino",
            "title": "'Bachelor' star Zach Shallcross, Kaity Biggar talk moving in together, wedding plans - GMA",
            "description": "",
            "url": "https://www.goodmorningamerica.com/culture/story/bachelor-zach-shallcross-kaity-biggar-moving-together-wedding-plans-98178575",
            "urlToImage": "https://s.abcnews.com/images/GMA/Kaity-Biggar-and-Zach-Shallcross-2-abc-bb-230328_1680011321459_hpMain_16x9_608.jpg",
            "publishedAt": "2023-03-28T14:37:00Z",
            "content": "\"Bachelor\" star Zach Shallcross and fiancee Kaitlyn \"Kaity\" Biggar are opening up about their engagement in the season 27 finale.\r\nThe couple appeared Tuesday on \"Good Morning America\" and Shallcross… [+2261 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Earth.com"
            },
            "author": null,
            "title": "Heart health benefits of weight loss persist for years - Earth.com",
            "description": "Heart health benefits of weight loss persist for years • Earth.com",
            "url": "https://www.earth.com/news/heart-health-benefits-of-weight-loss-persist-for-years/",
            "urlToImage": "https://cff2.earth.com/uploads/2023/03/28082810/Heart-health-2-scaled.jpg",
            "publishedAt": "2023-03-28T14:29:11Z",
            "content": "Overweight or obese people are at increased risk for cardiovascular disease and type 2 diabetes. This problem is often addressed through behavioral weight loss programs, which encourage lifestyle cha… [+2701 chars]"
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,

        }
        document.title = `${this.capitalize(this.props.category)} | Daily Pulse`
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    updateNews = async () => {
        this.props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6671321bc7f34f94b61d93703e2d7b9e&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(70)
        let parsedData = await data.json();
        
        this.setState({
            articles: parsedData.articles,
            loading: false
        })
        this.props.setProgress(100)
        
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }


    async componentDidMount() {
        
        this.updateNews();

    }

    handlenextClick = async () => {


        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();

    }

    handleprevClick = async () => {

        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();

    }


    render() {
        return(

            <div className='container' style={{marginTop: '75px'}}>
                <div className="">
                    <img className='img-fluid' src='https://images-cdn.brightedge.com/f00000000036389/videos.brightedge.com/assets/website/product/daily_pulse/asset-daily-pulse-logo.png' alt='logo' style={{ width: '300px' }}/>
                </div>
                {/* <h1 className='text-center' style={{ margin: '35px' }}>Daily Pulse - "News to Start Your Day"</h1> */}
                {this.state.loading && <Spinner />}
                {/* // when this.state.loading is true then the spinner will excecute, then this syntax is used */}


                <div className="row mt-4">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 65) : ""} description={element.description ? element.description.slice(0, 65) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </div>


                    })}


                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextClick}>Next &rarr;</button>

                </div>

            </div>

        )
    }
}