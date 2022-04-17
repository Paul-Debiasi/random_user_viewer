# DEMICON's Task

## Random User Viewer

Please implement a small application to view data from the Randomuser API service. This
application should render User information with the following specifications:

1. On page load, load data from https://randomuser.me/api - gender, name, location,
email
    - Documentation of API - https://randomuser.me/documentation

2. Render Table with gender, name, location, email
    - The table should be filterable by Country

3. Implement Details View with a Map which has marked the location of the user (You
can use any Mapping Service e.g. https://wiki.openstreetmap.org/wiki/API_v0.6)

4. Required Data from https://randomuser.me/api


## Execution 

- To achieved the result I used the following:
    - Create react app to manipulate the DOM
    - React-table to populate the Table with the data. The UI is self made
    - The build in fetch to fetch the data from random user API server
    - The MAP is render base on the Location of the user and realized using OpenstreetMap. Be aware, the Locations are randomly generated. Means that Location and Address do not coincide.

- UI :
    - Scss for the style.
    - React icons for the icons
    - The UI is inspired by DEMICON official web page. I used company color the create continuity in the page, in the same way, font-family, company Logo, and animations.

- Routing :
    - React router dom 5.3

## Instructions

- Clone the gitHub repo in to your local machine
- Run 'npm i' in the terminal to install the dependencies
- Run 'npm start' to run the project




