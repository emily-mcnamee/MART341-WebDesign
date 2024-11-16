# HTML Page For this Project: 'Quinn's Art Gallery' Page 2 (Assignment 7 page2.html)

### Copied over Assignment 10's index.html and mainstyle.css to carry over custom classes and help unify the two pages' looks 


### Techniques Used:
* Sizing
    - custom class 'customimg' contains the styling max-width: 100% and height: auto to maintain consistency throughout screen sizes
    - custom class 'MyHeader' contains the styling width: 100% and height: 100% 

* Overflow
    - the 'container-fluid' containing the gallery images has the bootstrap 'overflow-hidden' class, since the container is set to be the full-width of the webpage. 

* Border
    - custom class 'customimg' contains personalized border settings 

* Margin
    - Bootstrap uses class 'container' and 'container-fluid' to create responsive margin and padding within grids
    - Added custom class 'Lmargin' and 'Rmargin' to further customize the margin gaps

* Padding
    - Bootstrap's Grid system allows for in-depth padding customization:
        - Bootstrap custom class '.gy-*' creates a larger vertical gutter between the top and bottom rows of the grid
        - An additional 'p-3' class is added to each image, increasing the image padding by 1rem.

* Display
    - Navigation Bar options 'Home' and 'Gallery' are displayed inline

* Dropdown – Create a dropdown menu for navigation or content organization.
    - navbar contains dropdown menu for 2023 Gallery

* Position – Control the placement of elements with properties like absolute, relative, or fixed.
    - custom class 'customBreak' contains position: relative and z-index: 1
