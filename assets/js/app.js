(function(){
    var app = angular.module('website', ['header-menu', 'footer-section']);

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

})();
