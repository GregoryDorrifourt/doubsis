'use strict';

/**
 * @ngdoc function
 * @name doubsisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doubsisApp
 */
angular.module('doubsisApp')
  .controller('MainCtrl', function () {
    var that = this;
    that.nbJoueurs = 44;
    that.checkMultiple = function(){
      return that.nbJoueurs % 4 === 0 && that.nbJoueurs>0;
    };

    that.generer = function(){
      if(that.checkMultiple()){
          that.nbTables = that.nbJoueurs/4;
          that.tableau = [];
          for(var i=0;i<that.nbJoueurs;i++){
            that.tableau.push(i+1);
          }
          that.tableau = shuffleArray(that.tableau);

          that.tables = [];
          for(var j=0;j<that.tableau.length;j++){
            var ct = Math.floor(j/4);
            if(j%4===0){
              that.tables[ct] = [];
            }
            that.tables[ct].push(that.tableau[j]);
          }

      }
    };

    var shuffleArray = function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
    };
  });
  
