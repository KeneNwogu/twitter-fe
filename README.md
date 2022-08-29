# twitter
Twitter Clone. Built with Vue.

## Project setup
Install dependencies for the project with:
```
npm install
```

### Compiles and hot-reloads for development
Creates development server
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Contributing
To contribute, follow these steps:

 1. Fork the repository
 2. Clone repository to local system
 3. Check the issues tab for open issues (tasks)
 4. Create new branch and push changes to new branch
 5. Create a pull request to the main repository "KeneNwogu/twitter"
 
### Project Structure
All source code is in the **src** folder, this is divided into sub folders. The important ones are:

 1. **components**: This folder contains the html and css for individual components like the NavBar, MainComponent, SideBar and etc. Component names should be multi-word like the names just shown and is named with PascalCase convention.
 2. **views**: This contains the html and css for individual pages like RegisterView for registering users, HomeView for the index page of the site. Each view can contain sub-components in it that make up the page. View names should have the word View appended to it and is named with PascalCase convention.
 3. **router**: This contains the vue-router logic for creating new routes that links to pages. For more on routing, check the [docs](https://router.vuejs.org/guide) or send me a message.
 4. **css**: Any new css file can be added here, although the style tags in the scope of a component might be enough.
 5. **store**: This contains the vuex logic for state management.
 6. **assets**: Images or static files can be added here.
 7. **composables**: Contains re-usable Javascript logic.


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
