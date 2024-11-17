# HTML Page For this Project: 'Quinn's Art Gallery' Page 2 (Assignment 7 page2.html)

### Copied over Assignment 10's index.html and mainstyle.css to carry over custom classes and help unify the two pages' looks 


### Techniques Used:

* Sizing

    - Custom class 'customimg' contains the styling max-width: 100% and height: auto to maintain consistency throughout screen sizes

    - Custom class 'MyHeader' contains the styling width: 100% and height: 100% 

    - Custom class 'customBreak' has 80% width to appear smaller 

* Border

    - Custom class 'customimg' contains personalized border settings 

* Margin

    - Bootstrap uses class 'container' and 'container-fluid' to create responsive margin and padding within grids

    - Added custom class 'Lmargin' and 'Rmargin' to further customize the margin gaps left and right of the screen

    - Added margin top offset to containers to create a dynamic flow to gallery

    - Additional margin offset to image captions to imitate the original figures in Assignment 7

* Padding

    - Bootstrap's Grid system allows for in-depth padding customization:

        - Bootstrap custom class '.gy-*' creates a larger vertical gutter between the top and bottom rows of the grid

        - An additional 'p-3' class is added to each image, increasing the image padding by 1rem.

* Display

    - Navigation Bar options 'Home' and 'Gallery' are displayed inline

    - Custom class 'btn-email' set to display: block

* Dropdown

    - Navbar contains dropdown menu for 2023 Gallery

* Position

    - Set all content below header to position: relative to create a more dyanmic display with the images and to prevent overflow with the content below them.

    - Custom class 'customBreak' contains z-index: 1 to be placed within certain content

    - Navbar set to position: fixed to scroll with the page at the top

#### I'd like to ask if the different display of images successfully works; I wanted to create a display that fluidly guides the eye down hitting every image as it leads down the page while also creating a more engaging display than the previous version.