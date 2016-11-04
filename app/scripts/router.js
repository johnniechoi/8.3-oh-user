var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')

var LoginContainer = require('./components/login.jsx').LoginContainer;
var RecipeApp = require('./components/app.jsx').RecipeApp;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login/': 'login',
  },

  //Execute is check if there is a user logged in. If not, it will boot them out.

  // execute: function(callback, args, name){
  //   var user = User.current();
  //   if (!user){
  //     this.navigate('login/')
  //   }
  // },
  //Coffee List View
  index: function(){
    ReactDOM.render(
      React.createElement(RecipeApp),
      document.getElementById('app')
    )
  },
  login: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
  );
}
});

var router = new AppRouter();

module.exports = {
  router
}
