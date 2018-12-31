(function(){
    var app = angular.module('website', []);

    app.controller("HeaderController", function($scope){
        $scope.header = [
            {
                "name": "Home",
                "link": "index.html",
                "title": "Fortino Dental"
            }, {
                "name": "About",
                "link": "about.html",
                "title": "About us",
                "pages": [
                    {
                        "name": "Our Dentist",
                        "link": "about-our-dentist.html",
                        "title": "Dentist"
                    }, {
                        "name": "Our Periodontist",
                        "link": "about-our-periodontist.html",
                        "title": "Periodontist"
                    }, {
                        "name": "Our Team",
                        "link": "about-our-team.html",
                        "title": "Team"
                    }, {
                        "name": "Our Office",
                        "link": "about-our-office.html",
                        "title": "Office"
                    }
                ]
            }, {
                "name": "Services",
                "link": "services.html",
                "title": "Dental Services",
                "pages": [
                    {
                        "name": "Routine/Emergency Exams",
                        "link": "services-routine.html",
                        "title": "Routine/Emergency Exams"
                    }, {
                        "name": "Dental Hygiene",
                        "link": "services-dental-hygiene.html",
                        "title": "Dental Hygiene"
                    }, {
                        "name": "Dental Fillings",
                        "link": "services-dental-fillings.html",
                        "title": "Dental Fillings"
                    }, {
                        "name": "Crowns, Bridges, Veneers",
                        "link": "services-crowns-bridges-veneers.html",
                        "title": "Crowns, Bridges, Veneers"
                    }, {
                        "name": "Roots Canals",
                        "link": "services-roots-canals.html",
                        "title": "Roots Canals"
                    }, {
                        "name": "Teeth Whitening",
                        "link": "services-teeth-whitening.html",
                        "title": "Teeth Whitening"
                    }, {
                        "name": "Invisalign",
                        "link": "services-invisalign.html",
                        "title": "Invisalign"
                    }, {
                        "name": "Dental Implants",
                        "link": "services-dental-implants.html",
                        "title": "Dental Implants"
                    }, {
                        "name": "Wisdom Teeth Removal",
                        "link": "services-wisdom-teeth-removal.html",
                        "title": "Wisdom Teeth Removal"
                    }, {
                        "name": "Sedation",
                        "link": "services-sedation.html",
                        "title": "Sedation"
                    }, {
                        "name": "Partial and Complete Dentures",
                        "link": "services-dentures.html",
                        "title": "Partial and Complete Dentures"
                    }, {
                        "name": "Botox",
                        "link": "services-botox.html",
                        "title": "Botox"
                    }, {
                        "name": "Lip Fillers",
                        "link": "services-lip-fillers.html",
                        "title": "Lip Fillers"
                    }, {
                        "name": "Nightguards and Sportsguards",
                        "link": "services-nightguards-sportsguards.html",
                        "title": "Nightguards and Sportsguards"
                    }, {
                        "name": "Periodontics",
                        "link": "services-periodontics.html",
                        "title": "Periodontics"
                    }
                ]
            }, {
                "name": "Gallery",
                "link": "gallery.html",
                "title": "Gallery"
            }, {
                "name": "Patients",
                "link": "patients.html",
                "title": "Patients"
            }, {
                "name": "Contact",
                "link": "contact.html",
                "title": "Contact Us"
            }
        ];
    });

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



