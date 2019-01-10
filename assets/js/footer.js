(function(){
    var app = angular.module('footer-section', []);

    app.directive('footerSection', function(){
        return {
            restrict: 'C',
            template:
                '<div>'+
                '<section class="container">' +
                '<h2>Make an Appointment</h2>' +

                /** Form start **/
                '<form action="appointment.php" method="post" name="appointmentForm" id="appointmentForm">' +
                '<div class="row">' +

                /** Name **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="firstName" class="sr-only">First Name</label>' +
                '<input id="firstName" name="firstName" type="text" placeholder="First Name" class="form-control input-md" title="Your first name is required" required>' +
                '</div>' +
                '</div>' +
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="lastName" class="sr-only">Last Name</label>' +
                '<input id="lastName" name="lastName" type="text" placeholder="Last Name" class="form-control input-md" title="Your last name is required" required>' +
                '</div>' +
                '</div>' +

                /** Phone **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="phone" class="sr-only">Phone number</label>' +
                '<input id="phone" name="phone" type="tel" placeholder="Phone number" class="form-control input-md" required>' +
                '</div>' +
                '</div>' +

                /** Email **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="email" class="sr-only">Email address</label>' +
                '<input id="email" name="email" type="email" placeholder="E-Mail" class="form-control input-md" required>' +
                '</div>' +
                '</div>' +

                /** Preferred Day **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="day" class="sr-only">Preferred Day</label>' +
                '<select id="day" name="day" class="form-control" required>' +
                '<option value="" disabled selected>Preferred Day</option>' +
                '<option value="Monday">Monday</option>' +
                '<option value="Tuesday">Tuesday</option>' +
                '<option value="Wednesday">Wednesday</option>' +
                '<option value="Thursday">Thursday</option>' +
                '<option value="Friday">Friday</option>' +
                '</select>' +
                '</div>' +
                '</div>' +

                /** Preferred Time **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="preferred-time" class="sr-only">Preferred Time</label>' +
                '<input id="preferred-time" name="preferred-time" type="text" placeholder="Preferred Time" class="form-control input-md" title="Your preferred time is required" required>' +
                '</div>' +
                '</div>' +

                /** Patient **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="patient" class="sr-only">Are you..</label>' +
                '<select id="patient" name="patient" class="form-control" required>' +
                '<option value="" disabled selected>Are you..</option>' +
                '<option value="New Patient">A New Patient</option>' +
                '<option value="Existing Patient">An Existing Patient</option>' +
                '</select>' +
                '</div>' +
                '</div>' +

                /** Hear from **/
                '<div class="col-md-6">' +
                '<div class="form-group">' +
                '<label for="hearFrom" class="sr-only">How did you hear about us?</label>' +
                '<input id="hearFrom" name="hearFrom" type="text" placeholder="How did you hear about us?" class="form-control" title="How did you hear about us?" required>' +
                '</div>' +
                '</div>' +

                /**  Message **/
                '<div class="col-md-12">' +
                '<div class="form-group">' +
                '<label for="message" class="sr-only">Message</label>' +
                '<textarea id="message" name="message" placeholder="Message" rows="5" class="form-control" title="Your message is required" required></textarea>' +
                '</div>' +
                '</div>' +

                '<div class="col-md-12 form-group">' +
                '<div class="g-recaptcha" data-sitekey="6Lf-I3wUAAAAAGJkiOYrFddE57Jf2ftBVVzVGKvw"></div>' +
                '</div>' +

                /**  Submit Button **/
                '<div class="col-md-12 form-group">' +
                '<button id="submit-button" name="submit-button" class="btn btn-alt">Submit</button>' +
                '</div>' +
                '</div>' +
                '</form>' +
                /**  form end **/
                '</section>' +

                '<section class="container">' +
                '<div class="row" id="footer-header">' +
                '<div class="col-md-4">' +
                '<a href="index.html" title="Fortino Dental logo" class="logo">' +
                '<img alt="Fortino Dental logo" src="assets/img/logo-fortino-badge.png">' +
                '</a>' +
                '</div>' +

                '<div class="col-md-4">' +
                '<a href="tel:19053041000" title="Call Fortino Dental" class="phone">905-304-1000</a>' +
                '<a href="mailto:info@fortinodental.com" title="Fortino Dental Email">info@fortinodental.com</a>' +
                '<a href="http://bit.ly/2O2joKK" title="Google map" target="_blank" class="loc">385 Wilson Street East, Suite 1,<br> Ancaster, Ontario L9G 2C1 </a>' +
                '<div class="social">' +
                '<a href="https://www.instagram.com/fortinodental/" title="instagram" class="ig" target="_blank">' +
                '<span>Follow us <small>on instagram</small></span>' +
                '<i class="icon-instagramm"></i>' +
                '</a>' +
                '<a href="https://www.facebook.com/FortinoDental" title="facebook"  class="fb" target="_blank">' +
                '<span>like us <small>on facebook</small></span>' +
                '<i class="icon-facebook"></i>' +
                '</a>' +
                '<a href="https://www.google.com/maps/place/Fortino+Dental/@43.2281938,-79.9780848,17z/data=!3m1!4b1!4m7!3m6!1s0x882c85b02e6d0515:0x55ad74eec24782dc!8m2!3d43.2281938!4d-79.9758961!9m1!1b1"' +
                'title="Google" class="gp" target="_blank">' +
                '<span>review us <small>on google+</small></span>' +
                '<i class="icon-gplus"></i>' +
                '</a>' +
                '</div>' +
                '</div>' +

                '<div class="col-md-4">' +
                '<h3>Office Hours</h3>' +
                '<p data-ng-controller="ScheduleController" class="hours">' +
                '<label>Monday</label> {{schedule.Monday}}<br/>' +
                '<label>Tuesday</label> {{schedule.Tuesday}}<br/>' +
                '<label>Wednesday</label> {{schedule.Wednesday}}<br/>' +
                '<label>Thursday</label> {{schedule.Thursday}}<br/>' +
                '<label>Friday</label> {{schedule.Friday}}<br/>' +
                '<label>Saturday</label> {{schedule.Saturday}}<br/>' +
                '<label>Saturday</label> {{schedule.SaturdayNote}}<br/>' +
                '<label>Sunday</label> {{schedule.Sunday}}' +
                '</p>' +
                '</div>' +
                '</div>' +

                '<div class="row copyright">' +
                '<div class="col-xs-12">' +
                '<p>Copyright © <span id="year"> </span> Fortino Dental. <span class="break">All rights reserved.</span></p>' +
                '</div>' +
                '</div>' +
                '</section>' +
                '</div>'
        };
    });

})();
