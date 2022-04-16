Pet project is a clone of the social network Instagram.

The project is under development, it was created to consolidate the learned material in practice, and simulate the
workflow on a real project. I used a board with tasks, with assigned tasks, progress and a solved task, a stripped-down
analogue of jira, link (https://trello.com/b/tfEgzBj8/ig-jedi-project).

Every day there was a call with the mentor @Candyn, and tasks were set.

At the end of the task, a PR was made, The code was produced by the reviewer @Candyn after which the PR was merged into
the develop branch.

The project uses a technology stack: React ,Typescript , Redux-tolkit, Material-ui, Mock Service Worker, Socet-io, Low
db, Emoji-picker-react, ESlint, Pretier, React-router-dom v6, Faker-js.

Implemented in the project at the moment: User authorization User Registration Infinite slider on login page Application
navigation Messages layout completed Added Emoji Loading random posts Adaptive layout

Registration and authorization is implemented using RTK Query and Mock Service Worker,

Posts implemented using RTK Query , Mock Service Worker, randomly generated posts using faker-js

Emoji are implemented using the npm package Emoji-picker-react

Application navigation implemented using React-router-dom

The infinite slider has been implemented like this:
by timeout, certain styles are thrown onto the pictures, thereby one begins to fade and the second appears, thus a
smooth transition is realized.

Messages between users will be implemented using low db, RTK Query, socket-io.