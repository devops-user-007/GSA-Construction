$(document).ready(function() {
                        $("#lnk_home").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#header-container").offset().top
                            }, 2000);
                        });

                        $("#lnk_whoarewe").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#section-whoweare").offset().top
                            }, 2000);
                        });

                        $("#lnk_projectgallery").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#section-projects").offset().top
                            }, 2000);
                        });

                        $("#lnk_reviews").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#section-reviews").offset().top
                            }, 2000);
                        });

                        $("#lnk_contact").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#contactus-container").offset().top
                            }, 2000);
                        });

                        $("#whoarewe-scroll").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#whoarewe-container").offset().top
                            }, 2000);
                        });

                        $("#projectgallery-scroll").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#projectgallery-container").offset().top
                            }, 2000);
                        });



                        function initialize() {
                            var myLatlng = new google.maps.LatLng(49.0643980, -122.3334560);
                            var mapOptions = {
                              zoom: 15,
                              center: myLatlng,
                              mapTypeId: google.maps.MapTypeId.ROADMAP
                            }
                                var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                            var marker = new google.maps.Marker({
                              position: myLatlng,
                              map: map,
                              title: 'Contact'
                            }
                                                               );
                          }
                          google.maps.event.addDomListener(window, 'load', initialize);
});