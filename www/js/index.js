
// GUI

(function($){
  $(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs({"swipeable":true});
  }); // end of document ready
})(jQuery); // end of jQuery name space



// Cordova

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

