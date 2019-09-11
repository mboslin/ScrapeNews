# ScrapeNews

ScrapeNews is an application that lets users scrape news articles from eetimes.com. Users can then view and leave comments on saved articles. This app uses Cheerio to scrape news from eetimes.com and stores them in MongoDB using Mongoose.

Deployed on: `Heroku` [link](https://lit-basin-49640.herokuapp.com/)

## Technologies

| Frontend  | Backend |
| ------------- | ------------- |
| HTML | Nodejs |
| CSS (SASS) | Express |
| Javascript (jQuery) | MongoDB (Mongoose)|
| Materialize | Cheerio (Web Scrapper) |
|Handlebars (Templating Engine)|


`request`: Enables `cheerio` to get access to front-end code of https://www.eetimes.com

`cheerio`: Scrapes front-end code from https://www.eetimes.com

`mongoose`: In charge of database of `scrap`

`express`: Builds server-side routes and functions

`morgan`: Logs server-side requests, helping debugging

`express-handlebars`: A powerful front-end builder without requiring multiple html pages


## Requirements
- Web Browser
- Nodejs
- Mongo DB

