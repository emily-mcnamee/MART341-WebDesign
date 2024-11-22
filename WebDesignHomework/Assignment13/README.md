Website: Quinn's Art Gallery

### The Four Pages:

* Home
* Contact Me
* Gallery 2023
* Gallery 2024
* Multi-media page 
    - received small adjustments but was not the main focus of this assignment

### Responsive Design
* Website has been edited to responsively size and position itself best to fit the screen size of the viewer 
(check mainstyle.css for custom class editing)
 
### Media Queries

* Bootstrap CSS is formatted with mobile-viewing in the forefront, and their <b>container</b> div classes used to implement bootstrap coding is also formatted with mobile viewing in mind. Here are the changes I made to the containers themselves so that they fit for three different screen sizes (desktop, mobile, and tablet):

    - CSS class <b>container-sm</b> will keep the media inside 100% width until a minimum breakpoint, or screen pixel size, is reached. 

    - I set all of the media to container-small over bootstrap's other container size customizations to ensure that the same galleries can be viewed relatively the same way no matter the size of the screen. 

    - Email buttons' size have been increased to maximize mobile accessibility

    - Multi-media video ratio's changed from 16x9 to 4x3

### Navigation Menu:
* Art Gallery's Navigation bar has been edited to be more user-friendly

    - Switched position to <b>sticky</b> over fixed

    - Enlarged the text of the navigation bar

### Dropdown Menu

* As I've already implemented a Dropdown option for the Galleries, I've simply added the Multi-media page to the dropdown and a disabled *2025* Gallery as an additional dropdown item.