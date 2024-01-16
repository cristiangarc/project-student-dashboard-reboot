# React Student Dashboard Reboot Project

<img src="./instruction-assets/computer.png" alt="computer" width="400" height="400">

The instructors in your school need a dashboard in order to track the data of each student. Many cohorts of students are represented in the data so you will have your work cut out for you displaying each cohort by Season and Year. You and your team will create an SPA (Single Page Application) using ReactJS to create this Dashboard.

## Project Tools & Skills:

-   React Hooks
-   React Router 6a.2.1
-   Forms
-   Controlled Inputs
-   Event Handlers
-   Fetch API
-   Promises
-   Data Manipulation & Parsing
-   Helper Functions
-   HTML, CSS, JS
-   Bootstrap (optional)
-   CSS Grid (optional)
-   Flexbox (optional)
-   Render.com backend deployment
-   Netlify.com frontend deployment
-   Self learning

## Group Dynamic

As a group you should reference [Group Norms & Teamwork](https://github.com/10-3-pursuit/unit-react/tree/main/group-norms-and-teamwork) and [Working In Groups](https://github.com/10-3-pursuit/unit-react/blob/main/group-norms-and-teamwork/working-in-groups.md) in order to make a list that establishes your group dynamic.

## Day 1 Deliverables

Read these instructions carefully independently and as a group. Also,
take time to read the [Planning Requirements](./project-prep.md) Document where you will establish group norms as well as view other expectations and requirements

### Planning Documents

Planning documents for this project are due by **_End of Day on the First Day of the Project_**

Refer to [Planning and Workflow](https://github.com/10-3-pursuit/unit-react/tree/main/project-workflow) if you need a reminder on how to use Trello and or what Daily Standups are.

**Planning Documents and Deliverables include:**

-   Name of Your Team - (we will make team channels)
-   Group Dynamic List
-   Trello Board - only 3 columns - `To Do`, `Doing`, `Done`
-   Wireframes
-   Github Repo Address

**Submit relevant links to JD & Dan in one `Slack` thread**

## Project Setup

-   **Backend API**: Use [react-student-dashboard-reboot-server](https://github.com/10-3-pursuit/project-student-dashboard-reboot-server).
-   **Frontend Repository**: Your team lead or someone on your team should`Fork` and `clone` this _React Student Dashboard Reboot Project_ repo.

## Completion Requirements

There are a minimum of 5 Views for this SPA (Single Page Application), as well as other requirements for this project. For views, complete as many views as you can in the given order. Points will be based on completion, code quality, appearance and team work dynamic. Each person must contribute to the planning and codebase for the app.

## CSS

Responsive CSS is expected. You may use Bootstrap, Grid, and/or Flex to create your layout and design.

## Deployment

-   You will deploy your front end application to Netlify.com - [DEMO VIDEOS](https://github.com/10-3-pursuit/10-3-resources/blob/main/netlify-deployment.md)

-   You will deploy your backend server to Render.com - [DEMO VIDEOS](https://github.com/10-3-pursuit/10-3-resources/blob/main/render-deployment.md)

### Documentation

Include `readme.md` with setup instructions for front and back ends of your application. In order to create your readme...

-   create a file called `instructions.md`
-   copy and paste these project instructions into that file
-   create your instructions in the actual `readme.md` file

### ReactJS View & Feature Specifications

You can reference the [Visual Examples](#view) for each view below to get an idea of what is required.

#### Part 1: Static Views

1. A Header should show the title of Student Dashboard in an `h1` tag.

1. An `About` link should be on the application. This link will lead the user to a view that displays, at minumum, each team member's name, Github, and a fun fact

#### Part 2: Index View

1. A **Student list count** should be included either in the `Aside` or the `Main` portion of the application. It displays the number of students in the displayed cohort

1. Your SPA should always show a `Header` with title, an `Aside` that will display a list of seasonal cohorts, and a `Main` section where student data is displayed.

1. **Student list.** The `Home` page should show a list of all students. Each student should be shown with the following details listed:
    - Full Name:
        - Each first letter of the student's name should be uppercase.
        - All of the following letters in the name should be lowercase.
    - Email address,
      user readable birthday, showing month name, day, year, (e.g. November 7, 2022), and profile photo.
    - **On-track status.** Each student should also be marked as either "On Track" or "Off Track." A student is "On Track" if **ALL** of the following is true about them:
        1. The student has a resume certification (e.g. `certifications.resume` is `true`).
        1. The student has a LinkedIn certification (e.g. `certifications.linkedin` is `true`).
        1. The student has a GitHub certification (e.g. `certifications.github` is `true`).
        1. The student has a mock interview certification (e.g. `certifications.mockInterview` is `true`).
        1. The student has a current CodeWars score that is over 850.

#### Part 3: Show View

**Additional Student Details Section**

A User can click on a student card and they will be routed to a detailed view of the single student. This feature should include the following detailed information which you will pull and manipulate from the data:

1. A user still sees all of the original information that was displayed in the Index Card for the student. Details listed above.

1. **Codewars Stats Heading**

    - A user can see the current total
    - A user can see last week's total
    - A user can see the goal total
    - A user can see the `Percent of Goal Achieved` using properly formatted percentages

1. **Scores Heading**

    - A user can see properly formatted percentages for assignments
    - A user can see properly formatted percentages for projects
    - A user can see properly formatted percentages for assessments

1. **Certifications Heading**

-   Includes whether or not the student has received certain certifications.
-   Instead of showing "true" or "false" for certifications, show an emoji or icon depending on the certification status.

#### PART 4: 1-on-1 Notes Section - Form

Create a section on the single student details view that contains information about a student's 1-on-1 with an instructor. To complete this feature, the following should be true:

-   The section should include a title. (e.g. "1-on-1 Notes".)
-   The section should include a form which includes:
    -   input for instructor's name
    -   input for instructor's note
    -   a label for each input for accessibility
    -   a submit button
-   The form can be filled out and submitted.
-   On submit, the inputs are cleared.
-   The section should show a list of all notes that have been added.
-   The notes can be saved locally in the component and do not need to persist when refreshing the application.

#### PART 5: Aside View - List of Cohorts

1. The **Aside List** should continuously be shown in the page view
1. **Unique list of cohorts.** The Aside should include a unique list of cohorts on the page. This list of cohorts should be human-readable (e.g. "Winter 2026" instead of "Winter2026") and ordered by both year and season combined.
1. **Clickable cohorts.** When one of the cohorts is clicked from the cohort list, the students shown on the page should change so that only those students in the cohort are displayed.
1. **Cohort title change.** When one of the cohorts is clicked from the cohort list, a heading on the page should change to display what cohort is being shown. (i.e. 'All Students' title should change to 'Winter 2025' title when that title is clicked)
1. The **Student list count** should also update to reflect the number of students in the chosen cohort.
1. Create a button and the functionality to sort the Aside View List 'Ascending' & 'Descending'

#### PART 6: Stretch Goals

This section of the project measures your group's ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, _make sure to include a description of any stretch goals you implemented._ You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project.

-   Create a button in the single student details view where you can `Unenroll` a student (`DELETE`). Add functionality to delete that student from your backend server.
-   Filter students based on a category of your choosing (i.e. "LinkedIn Certification", "Codewars Score" or even harder "On Track Status")
-   Create search functionality to search for students based on first or last name.
-   Include a count for the number of notes added to each student, which is updated when a new note is added.
-   Allow for the user to click a button and the view of students changes to be just a list of names, or just a grid of profile images.
-   Implement a "dark mode" version of the website, which changes the CSS on click.
-   Add color-coding or segmentation to the cohort list, so that each year is visually distinct from one another.
-   _(medium difficulty)_ save notes to localStorage and have them persist on refresh.
-   _(challenging)_ Create a form that allows you to update a student's details. Use `PATCH` to update the username, name, cohort or date of birth.
-   _(very challenging)_ Use `PATCH` to update the notes key in the data when adding a note for the student. In the server data, each note has a `comment` key and a `commenter` key. (super challenging, self research)

Points will be allocated in this section at the discretion of the instructor.

GOOD LUCK!

## <a name="view">Visual Examples</a>

The following is an example of the application. These images show the application completed at different stages of the project and highlights different parts of the project to make it clear what is being discussed. While proper CSS is expected, you are not required to replicate this layout and look.

### Landing page

![landing page - All Students](./instruction-assets/index.png)

### Cohort list by Season and Year

#### Summer 2025 Index

![summer interactive cohort list](./instruction-assets/index-chosen-by-summer.png)

#### Winter 2025 Index

![winter interactive cohort list](./instruction-assets/index-chosen-by-winter.png)

### Student Details Show Section

#### Student Details - Aside view and Header view always be viewable. This is only the Show view

![student details](./instruction-assets/show.png)

#### Student Details with Notes - Aside view and Header view should always be viewable. This is only the Show view

![show details with comments](./instruction-assets/show-with-comments.png)

### Cohort Lists

#### Sorted Ascending

![sorted ascending](./instruction-assets/list-sorted-ascending.png)

#### Sorted Descending

![sorted descending](./instruction-assets/list-sorted-descending.png)
