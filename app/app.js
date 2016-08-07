import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';

import tia from './modules/tia';

let App = angular.module('app', [
  'ui.router',
  'firebase',

  'nms.tia'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
