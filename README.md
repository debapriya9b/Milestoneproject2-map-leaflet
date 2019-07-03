   
   #### **[Live Site](https://debapriya9b.github.io/Milestoneproject2-map-leaflet/)**
   
   # Volcanoes of the World-MAP

###### Code Institute / Interactive Front-End Development

For this project, we could choose from one of the following scenarios:

- Create a single-page app that relies heavily on one or more APIs.
- Create a Memory Game similar to [Simon](https://en.wikipedia.org/wiki/Simon_(game)).
- Create a Data Dashboard.
- Create your own project with a scope similar to the examples.

I decided to combine the use of a mapping API with data  from (https://earthworks.stanford.edu/catalog/harvard-glb-volc) to show the volcanoes worldwide.This site is mainly designed for kids where the young explorers can discover some of the coolest and fun facts on Volcanoes around the world.

This datalayer is point coverage containing basic geographic and geologic information for worldwide volcanoes thought to have been active in the last 10,000 years (Holocene). The data is a collection of information by Smithsonian Institution volcanologists summarizing 1,509 volcanoes and this version of the data set was published as part of the USGS Global GIS : global coverage database.The listings are not intended to be a comprehensive bibliography of references for a particular volcano or region, but represent those references that are cited as the sources of the volcano and eruption data in the CAVW ( Smithsonian's volcano database is the "Catalog of Active Volcanoes of the World").

Currently the data from [Global GIS:volcanoes of the world;volcano basic data](https://earthworks.stanford.edu/catalog/harvard-glb-volc) is free, but it's not visually interactive to use.

I wanted to make this project open-source and fully interactive, so I have decided to use [Leaflet](https://leafletjs.com/) instead of Google Maps due to the Google pricing implementation as of 16 July 2018. The majority of the Volcano data is taken from [Global GIS], but for the current status of the listed Volcanoes [ Wikipedia ] (https://en.wikipedia.org/wiki/Lists_of_volcanoes) has been referred.

## UX

#### USER STORIES

- Advik,7 years old: "I love volcanoes!I want to become a volcano explorer.Do you know which volcanoes are active in the world?"
- Kiara,6 years old: "I want to see all the volcanoes in the world"
- Vanitia,10 years old: "I am doing one school project on Facts on Natural disaster.It will be easy if I can get all basic informations in one site"

#### FRAMEWORK & COLOR SCHEME

- Used Bootstrap 4 : To make the site responsive
- Used Bootswatch template (https://bootswatch.com/sketchy/) : To make the site visually attractive specially for young explorers

#### WIREFRAMES

I've used Microsoft Word to create my wireframe / mock-up.

* [Wireframe-small_screen](Wireframes/wireframe-mobile.JPG)
* [Wireframe-large_screen_1](Wireframes/wireframe1.JPG)
* [Wireframe-large_screen_2](Wireframes/wireframe2.JPG)
* [Wireframe-large_screen_3](Wireframes/wireframe3.JPG)

## FEATURES

#### EXISTING FEATURES

- **Modal**: A Bootstrap4 modal containing the basic informations for volcano will show up while loading the page in the beginning.If the user click the 'Cross' sign of click on the "Dig in" button the main world map will showup.
- **World Map**: Leaflet map has been used with map-tile layer
- **Data**: GeoJSON data has been used to show more than 1,510 volcanoes that have erupted in the last 10,000 years.
- **Country Search**: (in Navbar)Used Leaflet Method flyTo which sets the view of the map (geographical center and zoom) performing a smooth pan-zoom animation to search volcanoes for a specific country.
- **UI Layers: Marker**: Used to display clickable icons on the map to worldwide volcanoes.
- **Vector Layers**: Since there were more than 1,510 datapoints to show on the map,used CircleMarker to make the site visually appealing.
- **LayerGroup**: Used bindPopup binds a popup to all of the layers at once.
- **Interactive Layer**: Events like "mouseover","mouseout" added to make the map interactive.
- **Interactive Toggler button**: Button to show/hide volcano points all over the world to make the map more interactive. Other interactive buttons to show filtered data
- **GeoJSON Options**: Used "onEachFeature", "filter" options which allow you to parse GeoJSON data and display it on the map acctording to your requirement/preferences.
- **Controls:Zoom**: A basic zoom control with two buttons (zoom in and zoom out) for the map.
- **Controls:Home,Next,Previous Button**: "Home" button :Go to home map view,"Right Arrow" : Go forward in map view history,"Left Arrow" : Go back to the map view history (Ref:https://github.com/davidchouse/Leaflet.NavBar )

#### FEATURES TO BE 

- I would like to use more efficient and faster API to improve my user experience.
- Need to work on markers,specially while zooming in,markers should be more promitant.Use of Leaflet Plugins,animations can enhance the user experience.
- Add more API data to make this site more informative.

## TECHNOLOGIES USED

Brief overview of the languages, frameworks, and other tools I've used on this project:

- [HTML5](https://en.wikipedia.org/wiki/HTML5): Semantic markup language as the shell of the site.
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): Cascading Style Sheets as the design of the site.
- [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)): Allows for a responsive layout across various platforms.
- [Bootswatch](https://bootswatch.com/): Allows for a responsive layout across various platforms.
- [JavaScript](https://www.javascript.com): Primary function of the site for all user interaction.
- [jQuery](https://jquery.com/): Used to simplify some of the DOM minipulations.
- [Leaflet](https://leafletjs.com/): An open-source JavaScript library for interactive maps.
- [Leaflet Plugins](https://leafletjs.com/plugins.html): Plugins to allow better functionality of Leaflet.
- [ConvertCSV.com](http://www.convertcsv.com/csv-to-geojson.htm): Used to convert data from GeoJSON to CSV and vice versa to modify data taken from Wikipedia.
- [Favicon](https://www.favicon-generator.org/): Used for the image.

## TESTING

#### TEST MATRIX

I created a Excel sheet which outlines the various tests I made to ensure the site renders consistently across different platforms, and that each functionality behaves as intended. Jasmine testing was not essential for this particular project.
[testing matrix](https://github.com/debapriya9b/Milestoneproject2-map-leaflet/blob/master/Testing/testingfile.xlsx)


## DEPLOYMENT

This particular project does not require any local deployment.

Deployment and source control was entirely done via GitHub. My repository can be found here:

- **Repo: [https://github.com/debapriya9b/Milestoneproject2-map-leaflet](https://github.com/debapriya9b/Milestoneproject2-map-leaflet)**

I've published the source code built from the *master branch* using **GitHub Pages**.

The live site can be found here:

- **GH Pages: [https://debapriya9b.github.io/Milestoneproject2-map-leaflet/](https://debapriya9b.github.io/Milestoneproject2-map-leaflet/)**

There are no difference between the deployed version and the development version.

## CREDITS

#### CONTENT

- Global GIS : volcanoes of the world ; volcano basic data (https://earthworks.stanford.edu/catalog/harvard-glb-volc)
- National Geographic Kids (https://www.natgeokids.com/uk/discover/geography/physical-geography/volcano-facts)
- Volcano Discovery (https://www.volcanodiscovery.com/)
- Wikipedia (https://en.wikipedia.org/wiki/Volcano)

#### CODE REFERENCE

- https://leafletjs.com/
- https://www.tutorialspoint.com/leafletjs/leafletjs_getting_started.htm
- https://www.w3schools.com/
- https://stackoverflow.com/
- https://codepen.io/
- https://github.com/davidchouse/Leaflet.NavBar


#### Disclaimer

The content of this Website is for educational purposes only.




