import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/layout/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import SubjectsPage from './components/course/SubjectsPage';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="subjects" component={SubjectsPage} />
  </Route>
);
