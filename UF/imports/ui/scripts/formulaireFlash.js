import { Template } from 'meteor/templating';


import '../templates/formulaireFlash.html'

<img src="http://maps.googleapis.com/maps/api/js?sensor=false"></img>

function initCarte(){
// création de la carte
var oMap = new google.maps.Map( document.getElementById( 'div_carte'),{
'center' : new google.maps.LatLng( 46.5210896,6.5714059),
'zoom' : 12,
'mapTypeId' : google.maps.MapTypeId.ROADMAP
});
}
// init lorsque la page est chargée
google.maps.event.addDomListener( window, 'load', initCarte);
