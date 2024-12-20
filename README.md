# Solving Stress

## By Alice Hallahan

### Project Brief 4: Mental Health Awareness

### Table of Contents

1. Introduction/Overview
2. UX Design
3. Development Considerations
4. Testing
5. Future Features
6. Project Deployment
7. Known Bugs
8. Repository and Project Board
9. Credits

## Introduction

Welcome to Solving Stress, a website designed to provide beginner-friendly information on mental health, including how to recognise the signs and impact of stress, as well as view practical tips and information on how to manage stress more effectively, presented in a supportive and organised layout for the user.

The website provides a section outlining feelings associated with stress, physical symptoms, the behaviours associated with stress and an outline of what can cause it.

![Screens showing responsiveness](/assets/images/Responsiveness_1.png)

## UX Design

Solving Stress is designed to be intuitive to use, with information presented in a clear and easy-to-read way. A navigation bar is placed at the top to help the user to move around the site. The footer can be found at the bottom providing contact information and links to social media pages.

The hero image is used at the start of the page to provide an insight into the themes that will be explored in the site and to inspire a feeling of calm.

The "What are the signs of stress?" has been presented in a card layout, with four cards displaying key information in bullet point format. The cards are responsive and shrink when viewed on smaller screens.

The banner with sliding information was designed using Javascript and is there to provide a more interactive focus for key information, providing practical details for the user on how to combat stress.

There is a section on the home page which provides practical tips on how to manage stress with an image of someone practicing yoga to tie into the advice section.

Finally, the footer provides contact information and links to social media sites.

### Development Considerations

Upon deciding to choose mental health awareness with stress as the focal point, I considered the key features of the site and designed basic wireframes and mockup sites to help refine the design process.

I used a brainstorming process to consider the user goals, key features, potential ideas and key components. An image of my brainstorm is shown below:

![Brainstorm for solving stress site](/assets/images/Brainstorm_solving_stress.png)

I created user-stories to provide a solid foundation on who might use the site and for what purpose. Key users included busy professionals, parents, wellbeing managers, health conscious individuals and employees - the site needed to provide clear and concise information on stress, as well as practical tips that could be used to help manage it on a day to basis.

| User Stories |
| ----------- |
| As an employee with a busy schedule I want to understand what the signs of stress are so that I can recognise and act on them quickly|
| As a busy professional with lots of project deadlines I want to be able to easily access advice online on how to manage stress so that I can feel more relaxed in and outside of work |
| As a colleague I would like to know what organisations exist to help me so that I can access the right resources when I need them |
| As a health conscious individual I would like to find out what has worked for other people so that I can consider and implement practical tips that might work for  |
| As a new parent returning to work I want to find resources on how to manage my time more effectively so that I can disconnect at the end of the working day and create a better work-life balance |
|As a person who is affected by stress I would like to find out about techniques I can use at work so that I can manage anxiety better |
| As a wellbeing manager I would like a site that I can direct my colleagues to a user-friendly, clear website where they can learn more about their mental health and stress management and receive access to regular resources |

### Wireframes

Wireframe designs were used in the early stage of development to help refine the style and layout for mobiles and larger screens:  

![Wireframe Mobile](/assets/images/Wireframe_Mobile.png)

![Wireframe Mobile](/assets/images/Wireframe_website.png)

The images on the site were separated into two categories, one was linked to feelings of calm and meditation. The second category of images were used for the card section and were selected because they helped to represent the categories topics more visually/creatively.  

### Style

A colour palette focusing on different shades of green as well as some contrasting darker colours (English violet and Rosy brown) from Coolers was used to provide a consistent colour theme throughout the site.

![alt text](assets/images/Solving_Stress_Website_Coolers.png)

A font called "Darker Grotesque" from Google Fonts was used throughout the site, chosen for its simple yet unique design which complimented the site's goals and purpose.

## Testing

The website was tested in the following ways before finalisation:

- W3 validation - this highlighted that some images were saved with spaces in the name which were fixed
- W3 CSS validation - the site passed CSS validation checks
- User testing - use of Chrome DevTools to check responsiveness. Images were fixed to work better across devices of different screen sizes. External links were also checked to ensure that they were working correctly.
- Deployment - upon deployment CSS links and the hero image link did not work, this was fixed by reviewing and altering the file path
- Lighthouse report - towards the end of the project I initialised a lighthouse report as part of testing to check performance, SEO and accessbility scores. The initial results showed that some of the image sizes were large (affecting the performance of the site), as well as meta descriptions missing on the html pages.

Initial Lighthouse Report Scores
![Initial Lighthouse Report](/assets/images/Initial_lighthouse_report_solving_stress.png)

I reduced the hero image size and the yoga image on the main page. Additionally I added meta descriptions to the home page and resources page to improve SEO optimisation. Accessibility: testing also checked that images had alt text added and aria-labels were included where necessary to support accessible use.

![Repeated Lighthouse Report](/assets/images/Repeated_lighthouse_test_solving_stress.png)

### Known Bugs

Videos on the resources page should increase further in size on larger screens

## Future Features

Moving forward the user experience could be enhanced by incorporating the following elements:

- Adding additional pages to the site, linking via the navbar, which provide further insight into the causes of stress and more information on tools to support people
- Adding an option to sign-up to a newsletter to provide a regular content for the delivery of key information  
- Further user testing with wider groups to ensure image and text sizing works effectively
- Add favicons

## Website Deployment

The site was deployed using GitHub pages.

The website can be found here: <https://ahalla-ma.github.io/solving-stress/>

## Credits

### Images

All images used throughout the site are sourced from Canva <https://www.canva.com>

### Content

The information on stress was sourced from:

- Mind.Org <https://www.mind.org.uk>
- Harvard Medical School <https://www.health.harvard.edu/staying-healthy/exercising-to-relax>
- Mental Health Foundation <https://www.mentalhealth.org.uk/explore-mental-health/publications/how-manage-and-reduce-stress>

Videos sourced from Youtube:

- Yoga with Adrienne <https://www.yogawithadriene.com>
- Calm meditation <https://www.youtube.com/@calm>

## Technologies Used

The following technologies were used in the development of this site:

- VS Copilot for coding queries
- Bootstrap components - navbar, cards
- MS Copilot - assisted with Javascript code for slides
- Fontawesome - used for bullet point links on cards and social media links
- Google fonts
