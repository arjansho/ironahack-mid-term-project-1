# ironahack-mid-term-project-1
Instructions will follow.
Learning outcomes
By the end of this lesson, you will be able to:

    Build a responsive website using HTML, CSS & JavaScript
    Use different layout properties like Flexbox and positioning when needed
    Deploy a live website to Netlify using Git

Find below the general guidelines. Please check in with your instructor to confirm their specific requirements (if they have any). Good luck!
Introduction to the Project 1
In this project, you’re going to be building and deploying your first fully responsive website using the technologies you’ve learned so far: HTML, CSS & JavaScript.
Technical Requirements
For this project, you’ll have to recreate a pre-existing design using your HTML & CSS skills. You’ll also have to create a few interactions with the DOM, using what you’ve learned about JavaScript so far.
Finally, you’ll have to deploy this project to Netlify, using the Git CLI to do so. When you’re finished, you’ll have your first website live and ready for anyone to interact with it!
At a minimum, you should meet the following technical requirements:

    Your website should be rendered in a browser
    Include separate HTML / CSS / JavaScript files
    Have a repo on GitHub
    Have at least 1 commit per day that you worked on it
    Be deployed online using Netlify so that anybody can access it
    Stick with KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles
    Replicate the pages where the design files have been supplied using HTML and CSS
    Ensure your website is responsive
    Implement any functionality on your website using JavaScript
    Create a README file that covers all of the application’s features, configuration and specifications
    BONUS: For extra credits, add some additional functionality to your website beyond the scope of this brief. e.g. a working 404 page

Tips for success :rocket:

    Be careful not to duplicate your code in any other language. E.g. if you create functionality in JavaScript, don’t duplicate this in HTML/CSS
    Write clean, modular and efficient code following best practices
    Name your folders and files clearly and consistently
    Apply indentation conventions to your sources code and name your functions and variables logically
    Remove any unused code from your source code
    Use separate git branches for development and deployment


Deliverables

    The URL of the GitHub repository for your project
    The URL of the live website on the Internet
    The URL of the slides for your project presentation
    You must present your project during the Project 1 presentations


Project assets
For this project, you’ll have access to the following assets:

    A Figma design that you will have to turn into a live, responsive website. This design also includes a few specifications regarding fonts and colors
    A folder with all the images you will need for this project.


You can download all assets from the following project assets Google Drive folder.

Project description
You’ll be building a website for a fictional web design company. This includes a few pages:

    a home page
    a project page and
    a contact page with a form.

Some of the challenges you’ll have to complete will be the following:

    Adding navigation between the pages
    Making all the fields in the contact form required before being able to submit it
    (Bonus) Adding animations to different sections, like the “recent projects” cards


JavaScript functionality
You’ll need to use JavaScript to implement some of the functionality on the website. Here are some basic instructions:

    Using this endpoint, fetch the first three projects of the API to display on the website in the expected position. This API returns the projects in descending order, so you can assume the first item of the array is the last project.
        Create a folder named projects with a file named 1.html inside.
        Inside this file, you should fetch the API using the onload event. Use MDN - Window: load event if you need help
        Filter the project with uuid 1 and print the name, description, content, image and completed_on in the expected position of the page.
        Other projects should be other projects of the API. For example, if you are filtering the project with uuid 1, other projects must be others.
        BONUS: Take three other projects randomly. If the project does not exist in the API, you should alert the user.

    Validate the form using JavaScript (in addition to the required and type of the input) by showing an alert if the name is equal to ironhack. E.g. “You cannot be Ironhack, because I am Ironhack.” In addition, you can create more filters such as incorrect email, required fields not set, etc.

    You can refer to W3 Schools - JS Validation for help with this.

    BONUS: Create a responsive menu. When clicked, toggle the menu.

Setup
Besides your usual IDE, you will need to create a Figma account in order to open up the design that you’re going to replicate. Creating an account is completely free.
We recommend you download the desktop Figma app for this project. Once you’ve created your account and downloaded the software, you just need to import the .fig file you’ll see inside the Assets folder and you’ll be set.
To review the basics of Figma, you can watch this introductory video.
Quick summary on how to use Figma
During a real-world web development project, most of the time you’ll have to use the design file you get in order to build a website. Here are some of the tasks you’ll have to do in most of your projects:

    Export the assets you’re going to use.
    Review styles (sizes, margins, fonts, colors, etc.).

Before starting the project, you should review the basics of Figma just so you know exactly how to use it in order to create your first responsive website.

Web responsiveness
As is the case with most professional projects, for this task you’ve received a design prepared for a desktop screen. However, as you know by now, you always need to keep mobile devices in mind.
One of the main challenges of this project is to adapt the existing design to all screen sizes. You are free to modify any aspect of the website as you see fit in order to make it compatible with mobile devices.

Deployment

The last task of this project is to actually deploy your website once it’s completed. For this particular project, we’ll be using Netlify, a static web page hosting service.
Deploying to Netlify is pretty simple: you just need to create an account, connect it to your GitHub repository, enter a few commands in your CLI and you’re good to go.
Here’s a guide showing you how to deploy a static website using this service that you can follow once your project is completed.

Rubrics
In order to assess your project and ensure all requirements are met, a rubric will be used. This rubric is used to evaluate your project by your teaching staff but also to communicate what constitutes incomplete, acceptable and excellent performance across each of the learning outcomes for this project. Take some time to review the rubric and ask your lead teacher any questions about it if necessary.
