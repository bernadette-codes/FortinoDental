(function(){
    var app = angular.module('website', []);

    // Office Hours
    app.controller('ScheduleController', ['$scope', '$http', function(scope, http){
        http.get('data/office-hours.json').success(function(data){
            scope.schedule = data;
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

    // Team Page
    app.controller('TeamController', ['$scope', '$http', function(scope, http){
        http.get('data/about-Team.json').success(function(data){
            scope.photos = data;
        });
    }]);

    // Gallery Page
    app.controller('GalleryController', ['$scope', '$http', function(scope, http){
        http.get('data/galleryPage-Photos.json').success(function(data){
            scope.photos = data;
        });
    }]);

    // Patients Page Forms
    app.controller('PatientFormsController', ['$scope', '$http', function(scope, http){
        http.get('data/patientsPage-Forms.json').success(function(data){
            scope.forms = data;
        });
    }]);

    app.directive('menuBar', function(){
        return {
            restrict: 'A',
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



