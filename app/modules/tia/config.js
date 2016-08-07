
function config($stateProvider) {
  $stateProvider
  .state('tia', {
    url: '/',
    controller: 'TiaController as tiaCtrl',
    template: require('./view.html')
  })
}
 export default config;
