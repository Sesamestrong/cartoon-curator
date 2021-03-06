# Endpoints

## API V2
Base url: <a href="/api/v2/">&lt;API_URL&gt;/api/v2</a>
### GET /series/:providerId/:seriesId
Returns:
Either a 404 or
```javascript
{
    name: "Name of the series",
    last: "Optional date of the most recently released comic",
    first: "Optional date of the first comic",
    description: "Optional description of the series"
}
```
### GET /comic/:providerId/:seriesId/:year/:month/:day
Returns:
Either a 404 or
```javascript
{
    url: "Image URL of the comic",
    previous: "Optional date in YYYY/MM/DD format of the previous comic",
    next: "Optional date in YYYY/MM/DD format of the next comic",
    alt: "Optional alt text for the image",
    description: "Optional description/title for the comic"
}
```
### GET /provider
Returns:
```javascript
{
    "id of one provider":["seriesId of one series provided by provider","another one",...],
    "id of another provider":["seriesId of a series provided by another provider","another one",...],
    ...
}
```
### POST /provider
Body:
```javascript
{
    password: "Optional password",
    json:{
        name:"Name of the provider",
        id:"Unique ID of the provider",
        "series-ids":["seriesId of one series served by this provider","seriesId of another"],
        "date-scrape":["An object representing one step in the scraper, see the source code for details","Another step"], // Must return a variable src; description, alt, previous and next are optional
        "extremes-scrape":{
            "last":["An object representing one step","Another"], // Can optionally return a variable first representing the date that the first comic was available
            "first":["An object representing one step","Another"], // Can optionally return a variable last representing the date of the most recent comic
        },
        "src-to-url":"Regex turning the src attribute into an image URL. Used so that src can be stored efficiently.",
        "get-name":["An object representing one step","Another"], // Must return a name variable
        "list-names":["An object representing one step","Another"], // Is optional. Can optionally return a list of seriesIds supported by this provider. Either list-names or series-ids is required. If series-ids is not defined, list-names is used to generate it. list-names is preferred for providers providing many series, such as GoComics or Comics Kingdom. series-ids is preferred for providers providing one or two series, such as xkcd or User Friendly.
        "description": "An optional description of the provider",
        "get-description":["An object representing one step","Another"] // Optional. Returns an optional variable description, which represents the description of a series.
    }
}
```
Returns:
```javascript
{
    saved:true, // Represents if the request has caused an update in the database.
    password:"The password either provided by the person or generated randomly by the server."
}
```
### GET /provider/:providerId
Body:
```javascript
{
    name:"Name of the provider",
    id:"Unique ID of the provider",
    "series-ids":["seriesId of one series served by this provider","seriesId of another"],
    "date-scrape":["An object representing one step in the scraper, see the source code for details","Another step"], // Must return a variable src; description, alt, previous and next are optional
    "extremes-scrape":{
        "last":["An object representing one step","Another"], // Can optionally return a variable first representing the date that the first comic was available
        "first":["An object representing one step","Another"], // Can optionally return a variable last representing the date of the most recent comic
    },
    "src-to-url":"Regex turning the src attribute into an image URL. Used so that src can be stored efficiently.",
    "get-name":["An object representing one step","Another"], // Must return a name variable
    "list-names":["An object representing one step","Another"], // Is optional. Can optionally return a list of seriesIds supported by this provider. Either list-names or series-ids is required. If series-ids is not defined, list-names is used to generate it. list-names is preferred for providers providing many series, such as GoComics or Comics Kingdom. series-ids is preferred for providers providing one or two series, such as xkcd or User Friendly.
    "description": "An optional description of the provider",
    "get-description":["An object representing one step","Another"] // Optional. Returns an optional variable description, which represents the description of a series.
}
```
### GET /newspaper
Returns:
```javascript
["newspaperId of a newspaper","newspaperId of another"]
```
### GET /newspaper/:newspaperId
Returns:
```javascript
{
    newsId: "newspaperId of the newspaper",
    name: "Name of the newspaper",
    seriesInfo:[{
        seriesId:"seriesId of one series in the newspaper",
        x:0,
        y:12
    }]
}
```
### POST /newspaper
Body:
```javascript
{
    newsId: "Unique id of the newspaper",
    password: "Optional password for the newspaper",
    seriesInfo: [{
        seriesId: "The seriesId of one series in the newspaper",
        x: 0, // The x value of the series, can be percentage or otherwise
        y: 0, // The y value of the series on the screen
    }]
}
```
