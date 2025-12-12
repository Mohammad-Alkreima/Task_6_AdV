
import { type BlogPost } from "../types/index";
const blogData: BlogPost[] = [
    {
        id: "1",
        title: "Grid system for better Design User Interface",
        author: "Emma",
        date: "01 Nov 2024",
        image: "/assets/images/Image0.png",
        preview:
            "How do you create compelling presentations that wow your colleagues and impress your managers?",
        tags: ["Layout", "Interface", "Strategy"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "2",
        title: "Common Grid Structures in Websites and Interfaces",
        author: "John",
        date: "02 Nov 2024",
        image: "/assets/images/Image1.png",
        preview: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        tags: ["Accessibility", "UX"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "3",
        title: "Exploring Climate Change Scenarios",
        author: "Sarah",
        date: "03 Nov 2024",
        image: "/assets/images/Image2.png",
        preview: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        tags: ["Interface", "Research", "Strategy"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "4",
        title: "UK review presentations",
        author: "Robert",
        date: "04 Nov 2024",
        image: "/assets/images/Image3.png",
        preview: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        tags: ["Presentation", "Accessibility"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "5",
        title: "Bill Watan's leadership lessons",
        author: "David",
        date: "05 Nov 2024",
        image: "/assets/images/Image4.png",
        preview: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        tags: ["Layout", "Design", "Presentation"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "6",
        title: "FM mental models",
        author: "Sarah",
        date: "06 Nov 2024",
        image: "/assets/images/Image5.png",
        preview: "Mental models are simple expressions of complex processes or relationships.",
        tags: ["Layout", "Presentation"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "7",
        title: "What is Wireframing?",
        author: "Sarah",
        date: "07 Nov 2024",
        image: "/assets/images/Image6.png",
        preview: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        tags: ["Design", "Strategy", "Research"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "8",
        title: "How collaboration makes US better designers",
        author: "John",
        date: "08 Nov 2024",
        image: "/assets/images/Image7.png",
        preview: "Collaboration can make our teams stronger, and our individual designs better.",
        tags: ["Interface", "Presentation"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "9",
        title: "Podcast: Creating a better UX community",
        author: "John",
        date: "09 Nov 2024",
        image: "/assets/images/Image8.png",
        preview: "JavaScript frameworks make development easy with extensive features and functionalities.",
        tags: ["Research", "Design", "Strategy"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "10",
        title: "Designing with Grids in the Digital Age",
        author: "Susan",
        date: "10 Nov 2024",
        image: "/assets/images/Image9.png",
        preview: "Starting a community doesn’t need to be complicated, but how do you get started?",
        tags: ["Strategy", "Layout", "Research"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "11",
        title: "Modular Layout Techniques",
        author: "Susan",
        date: "11 Nov 2024",
        image: "/assets/images/Image0.png",
        preview: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        tags: ["UX", "Layout", "Accessibility"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "12",
        title: "Typography and Grid Systems",
        author: "Olivia",
        date: "12 Nov 2024",
        image: "/assets/images/Image1.png",
        preview: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        tags: ["Research", "Accessibility"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "13",
        title: "Effective Visual Hierarchies",
        author: "John",
        date: "13 Nov 2024",
        image: "/assets/images/Image2.png",
        preview: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        tags: ["Interface", "Accessibility", "Strategy"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "14",
        title: "Designing Interfaces for Readability",
        author: "David",
        date: "14 Nov 2024",
        image: "/assets/images/Image3.png",
        preview: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        tags: ["UX", "Accessibility"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "15",
        title: "The Future of UI Design",
        author: "Robert",
        date: "15 Nov 2024",
        image: "/assets/images/Image4.png",
        preview: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        tags: ["Presentation", "Interface", "Layout"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "16",
        title: "Emotion and Color in UX",
        author: "John",
        date: "16 Nov 2024",
        image: "/assets/images/Image5.png",
        preview: "Mental models are simple expressions of complex processes or relationships.",
        tags: ["Design", "Strategy"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "17",
        title: "UX Patterns in Modern Design",
        author: "Michael",
        date: "17 Nov 2024",
        image: "/assets/images/Image6.png",
        preview: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        tags: ["UX", "Accessibility", "Design"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "18",
        title: "UX Research Methods",
        author: "Robert",
        date: "18 Nov 2024",
        image: "/assets/images/Image7.png",
        preview: "Collaboration can make our teams stronger, and our individual designs better.",
        tags: ["Presentation", "Accessibility", "Strategy"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "19",
        title: "Creative Prototyping Strategies",
        author: "Michael",
        date: "19 Nov 2024",
        image: "/assets/images/Image8.png",
        preview: "JavaScript frameworks make development easy with extensive features and functionalities.",
        tags: ["Accessibility", "Design"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
    {
        id: "20",
        title: "Designing for Accessibility",
        author: "Michael",
        date: "20 Nov 2024",
        image: "/assets/images/Image9.png",
        preview: "Starting a community doesn’t need to be complicated, but how do you get started?",
        tags: ["Interface", "Presentation", "Accessibility"],
        sections: [
            {
                id: "1",
                content: [
                    {
                        h1: "Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.",
                        p: `There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                            Column grid involves dividing a page into vertical columns. UI elements and content are then aligned to these columns.
                            Modular grid extends the column grid further by adding rows to it. This intersection of columns and rows make up modules to which elements and content are aligned. Modular grids are great for ecommerce and listing pages, as rows are repeatable to accommodate browsing.
                            Hierarchical grid: Content is organized by importance using columns, rows, and modules. The most important elements and pieces of content take up the biggest pieces of the grid.
                            Breaking Down the Grid
                            Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                            Columns: Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                            Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.`,
                    },
                ],
                image: "/assets/images/Image10.png",
            },
            {
                id: "2",
                content: [
                    {
                        h1: "Three elements make up any grid: (1) columns, (2) gutters, and (3) margins.",
                        p: `Examples of Grids in Use
                            Example 1: Hierarchical Grid
                            Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.`,
                    },
                ],
                image: "/assets/images/Image11.png",
            },
            {
                id: "3",
                content: [
                    {
                        h1: "The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 2: Column Grid
                            Our second example is from Ritual.com, a vitamin company. This design uses a column grid to create an attractive visual experience. At this screen size, four consistently sized columns make up the grid structure and elements are aligned to and within these columns. The gutters, the spaces in between the columns, are also consistently sized and help the user visually separate the different products. The margins are independently sized and are the same between the left and right sides.`,
                    },
                ],
                image: "/assets/images/Image12.png",
            },
            {
                id: "4",
                content: [
                    {
                        h1: "Ritual's four-column grid makes scanning products easy. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 3: Modular Grid
                            Our third example is from Behance, a design library. The site’s design uses a modular grid to create a pleasant browsing experience. At desktop size, rows are made up of 4 consistently sized modules. Horizontal gutters are slightly thicker than vertical gutters and the margins are consistently sized on the left and right of the design. Like in previous example, the gutters visually separate each element.`,
                    },
                ],
                image: "/assets/images/Image13.png",
            },
            {
                id: "5",
                content: [
                    {
                        h1: "Behance's design uses a modular grid, which allows users to easily browse. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Example 4: Breaking the Grid
                            Our last example is Shrine from Google's Material Studies. This design uses a column grid, as we can see based on the left navigation, which is 2 columns wide. Look closely and you will see that some product images settle to the margins, while others do not. Breaking the grid like this makes it challenging to focus or quickly scan product images and calls more attention to some products over others. It is okay to break the grid every so often, as long as you have a valid reason for it.`,
                    },
                ],
                image: "/assets/images/Image14.png",
            },
            {
                id: "6",
                content: [
                    {
                        h1: "Breaking the grid produces a chaotic browsing experience for users. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)",
                        p: `Benefits of the Grid
                            Using a grid benefits both end users and the designers alike:
                            Designers can quickly put together well-aligned interfaces.
                            Users can easily scan predictable grid-based interfaces.
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.`,
                    },
                ],
                image: "/assets/images/Image15.png",
            },
            {
                id: "7",
                content: [
                    {
                        h1: "At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).",
                        p: `Even more importantly, the grid is not a throw-away concept. It is used by both designers and developers alike. Be sure to communicate with your developers the grid structure used when creating the design, so they can implement it accordingly.
                            Choosing and Setting Up Your Grid
                            How you use and set up a grid is fundamental to creating well thought out layouts and experiences for your user.
                            Choose the right grid for your needs. Take time to think through what type of grid ­— column, modular, or hierarchical — best suits your needs. A hierarchical grid may be the best fit if one item on your page will always be more important than the surrounding elements. For example, hierarchical grids are great for online news platforms. If the content you need to display is highly variable, consider using a basic column or modular grid, as these provide lots of flexibility when designing. For example, elements and content can span across multiple columns or modules or just one to fit design needs.
                            Spend time setting up your grid. Once you have figured out what type of grid will work well for your needs, start setting it up. Determine the number of columns and the margin and gutter sizes relative to your screen sizes. You will most likely want to prepare for mobile, tablet, and desktop screens. A 12-column grid at laptop or desktop size is generally flexible enough for most design needs. The number of columns will decrease as your device size decreases. Wireframing tools like Sketch and Figma have quick and easy ways to set up and edit your grid, even after you have started designing.`,
                    },
                ],
                image: "/assets/images/Image16.png",
            },
            {
                id: "8",
                content: [
                    {
                        h1: "Easily set the number of columns, the gutter size, and margin size in Figma.",
                        p: `Always place content within columns, not gutters. The gutters should remain empty as you place elements on the grid in order to clearly separate and align content and elements.`,
                    },
                ],
                image: "/assets/images/Image17.png",
            },
            {
                id: "9",
                content: [
                    {
                        h1: "Content or elements should be placed within and across columns, not gutters.",
                        p: `Consider using an 8px grid system. For most common devices, the screen size in pixels is a multiple of 8. Keeping grid-component values at a multiple of 8 will generally make it easier to scale and implement a grid.
                            Conclusion
                            Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.`,
                    },
                ],
                image: "/assets/images/Image18.png",
            },
        ],
    },
];

export default blogData;
