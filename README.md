# GitSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.


   ## How Application Works
   Application have two routes first is for search git user and another is to see git user details.
   
    1. search user ('\')
    2. user details ('details\:username')
    
   To search git user auto-complete element is used and it sync with live git API that provides list of users.

   when user clicks on searched user it will takes you to user details page where you can find basic details of user, repositories and followers list.
   
   On user details page 3 APIs get call to get user details(Basic details, repo, followers), if you modify url with username params(last perameter of url) it will takes details too and if no details found app will show appropriate message alert.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Make Production Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
