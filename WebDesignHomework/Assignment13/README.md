Website: Quinn's Art Gallery

### The Four Pages (+design updates not related to A13):

* Home (index.html Assignment 12)

* Contact Me (contact.html Assignment 7)

    - Design overhaul for the discussion this week (check custom 'formstyle.css' linked to contact.html)

* Gallery 2023 (page2.html Assignment 12)

* Gallery 2024 (page3.html Assignment 8)

    - Design updated to fit Assignment 12 2023 Gallery

* Multi-media Projects (mmediaProjects.html Assignment 8)
    - Received small upadates to email form and navigation bar but was not the main focus of this assignment - showed responsiveness to smaller screen ratios

### Responsive Design

* Website has been edited to responsively size and position itself best to fit the screen size of the viewer 
(check mainstyle.css for custom class editing)

#### Key Problems noticed about Website:

   - Navigation Bar is not functional on smaller screens

   - 2024 Gallery's design is poorly responsive to smaller screens

   - Assignment 12 2023 Gallery design responds incorrectly to smaller screens, minimizing the size of the webpage instead of making it more visible

   - About Me Page's "Programs Used" section overflows on smaller screens
 
### Media Queries

* Bootstrap CSS is formatted with mobile-viewing in the forefront, and their <b>container</b> div classes used to implement bootstrap coding is also formatted with mobile viewing in mind. Here are the changes I made to the containers themselves so that they fit for three different screen sizes (desktop, mobile, and tablet):

    - mmediaProjects.html video ratio changed from 16x9 to 4x3

    - Assigment 12 Gallery 2023 updated to add missing metadata and viewport sizes

    - All gallery images added class 'img-fluid' so they respond correctly to mobile screens

    - Both page2/page3 given media query to remove custom margin spacing when on smaller screens:
       <br> @media only screen and (max-width: 600px){
       <br>  .containermove
       <br>  {top: 0rem;}
       <br>.containermovefirst
       <br>{top: 0rem;}
       <br> .containermove2
       <br>{top: 0rem;}
       <br>.containermove3
       <br>{top: 0rem;}
       <br>.containermove4
       <br>{top: 0rem;}
        <br>}

* <b>Index.html's</b> <i>Programs Used</i> container classes changed to 'list-group-horizontal-md flex-md-row flex-column' :

    - list-group-horizontal-md: Makes the list horizontal starting at medium (desktop) breakpoints.

    - flex-md-row flex-column: Ensures items are in a row on larger screens and stack vertically on smaller screens.

### Navigation Menu:

* Fixed Navigation Bar coding so that it's responsive on mobile (created hamburger menu for all items)

    - The problem was multiple nested 'collapse nav-collapse' classes that confused the webpage into not responding

    - Navigation coding changed from 'navbar-expand-lg' to 'navbar-expand-md' so that the navigation bar only displayed horizontally on medium to large screens (desktop and screens &le;800px)

### Dropdown Menu:

* As I've already implemented a Dropdown option for the Galleries, I've simply added the Multi-media page to the dropdown and ensured that the dropdown was still responsive to smaller screens
