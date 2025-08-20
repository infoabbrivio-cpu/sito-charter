function setLang(lang){localStorage.setItem('lang',lang);applyLang(lang);}
function applyLang(lang){document.querySelectorAll('[data-i18n]').forEach(el=>{if(translations[lang][el.dataset.i18n])el.textContent=translations[lang][el.dataset.i18n];});}
let userLang=(localStorage.getItem('lang'))||(navigator.language.startsWith('it')?'it':'en');applyLang(userLang);
document.getElementById('year').textContent=new Date().getFullYear();

// translations
const translations={
 it:{'nav.home':'Home','nav.fleet':'Flotta','nav.services':'Servizi','nav.about':'Chi siamo','nav.booking':'Prenota','nav.faq':'FAQ','nav.reviews':'Recensioni',
 'hero.title':'Qualità, sicurezza e coccole in mare','hero.sub':'Escursioni in gommone da Terracina: Ponza, Palmarola e Circeo.','hero.cta1':'Prenota ora','hero.cta2':'Vedi servizi',
 'fleet.title':'La nostra flotta','fleet.sacs':'Gommone spazioso, ideale per escursioni giornaliere.','fleet.master':'Agile e comodo, perfetto per piccole avventure.',
 'services.title':'Servizi','services.ponza':'Escursione in gommone di una giornata a Ponza e Palmarola da Terracina con brindisi','services.circeo':'Escursione in gommone di mezza giornata lungo il promontorio del Circeo','services.tramonto':'Tour in gommone al tramonto con brindisi','services.stagionali':'Noleggi stagionali','services.giornalieri':'Noleggi giornalieri',
 'about.title':'Chi siamo','about.text':'Abbrivio nasce dalla passione per il mare e dalla voglia di offrire esperienze autentiche e sicure.',
 'booking.title':'Prenota','booking.submit':'Invia','faq.q1':'Serve patente nautica?','faq.a1':'No, i nostri skipper pensano a tutto.','faq.q2':'Cosa devo portare?','faq.a2':'Costume, crema solare e voglia di divertirti!','reviews.title':'Recensioni'},
 en:{'nav.home':'Home','nav.fleet':'Fleet','nav.services':'Services','nav.about':'About','nav.booking':'Book','nav.faq':'FAQ','nav.reviews':'Reviews',
 'hero.title':'Quality, safety and pampering at sea','hero.sub':'Boat excursions from Terracina: Ponza, Palmarola and Circeo.','hero.cta1':'Book now','hero.cta2':'See services',
 'fleet.title':'Our fleet','fleet.sacs':'Spacious RIB, perfect for day trips.','fleet.master':'Agile and comfortable, ideal for small adventures.',
 'services.title':'Services','services.ponza':'Full-day boat trip to Ponza and Palmarola from Terracina with toast','services.circeo':'Half-day boat trip along Circeo promontory','services.tramonto':'Sunset boat tour with toast','services.stagionali':'Seasonal rentals','services.giornalieri':'Daily rentals',
 'about.title':'About us','about.text':'Abbrivio was born from a passion for the sea and the desire to offer authentic, safe experiences.',
 'booking.title':'Book','booking.submit':'Send','faq.q1':'Do I need a boating license?','faq.a1':'No, our skippers take care of everything.','faq.q2':'What should I bring?','faq.a2':'Swimsuit, sunscreen and the desire to have fun!','reviews.title':'Reviews'}
};

// Load Google reviews (simplified)
function initReviews(){
  const service = new google.maps.places.PlacesService(document.createElement('div'));
  service.getDetails({placeId:window.GOOGLE_PLACE_ID,fields:['review']},(place,status)=>{
    if(status===google.maps.places.PlacesServiceStatus.OK && place.reviews){
      const cont=document.getElementById('google-reviews');cont.innerHTML='';
      place.reviews.slice(0,3).forEach(r=>{const div=document.createElement('div');div.className='review';div.innerHTML=`<p><strong>${r.author_name}</strong> (${r.rating}★)</p><p>${r.text}</p>`;cont.appendChild(div);});
    } else {document.getElementById('google-reviews').textContent='Recensioni non disponibili';}
  });
}

window.initMap=initReviews;