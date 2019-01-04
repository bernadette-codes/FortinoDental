(function(){
    var app = angular.module('website', []);

    app.controller('MenuController', ['$scope', '$http', function(scope, http){

        http.get('data/menu.json').success(function(data){
            scope.menu = data;
        });

    }]);

    // Home Page Featured Services
    app.controller("PanelController", function(){
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };

    });

})();
