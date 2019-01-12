(function(){
    var app = angular.module('header-menu', []);

    app.directive('menuBar', function(){
        return {
            restrict: 'C',
            template:
                '<div class="place-nav">' +
                    '<a title="Fortino logo" class="logo" href="http://www.fortinodental.com/">' +
                        '<img alt="Fortino Dental logo" src="assets/img/logo-fortino-dental2.jpg"/>' +
                    '</a>' +

                    '<nav id="desktop-nav">' +
                        '<ul>' +
                            '<li data-ng-repeat="menu in menu">' +
                                '<a href="{{menu.link}}" title="{{menu.name}}">{{menu.name}}</a>' +
                                '<ul>' +
                                    '<li data-ng-repeat="page in menu.pages">' +
                                        '<a href="{{page.link}}" title="{{page.name}}">{{page.name}}</a>' +
                                    '</li>' +
                                '</ul>' +
                            '</li>' +
                        '</ul>' +
                    '</nav>' +
                '</div>',
            controller: ['$scope', '$http', function(scope, http){
                http.get('data/menu.json').success(function(data){
                    scope.menu = data;
                });
            }],
            controllerAs: 'menu'

        };
    });

})();



