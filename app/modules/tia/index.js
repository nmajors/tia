
import angular from 'angular';

import config from './config';

import tiaController from './controller';

let tia = angular.module('nms.tia', []);

tia.config(config);
tia.controller('TiaController', tiaController);

export default tia;
