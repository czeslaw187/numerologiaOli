
$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });
    
});

// class import
import { Header } from './header.js' // navigation bar
import { Carousel } from './carousel.js' // render pages in a carousel

import { AboutMe } from './pages/aboutMe.js'
import { ServicesUs } from './pages/services.js'
import { ContactUs } from './pages/contact.js'
import { Numerologia } from './pages/numerologia.js'
/*import { Posty } from './pages/posty.js'*/

// declaring headerNav instance
const head = new Header('Numerologia')

// declare carousel instance
const carousel = new Carousel() 

// declaring pages instances
const aboutMe = new AboutMe()
const services = new ServicesUs()
const contact = new ContactUs()
const numerologia = new Numerologia()
/*const posty = new Posty()*/

let contentArray = [
    aboutMe.displayAboutMe(),
    numerologia.displayPostyNumerologia(), 
    /*posty.displayPosty(),*/
    services.displayServices(),
    contact.displayContactUs(),
] 



// handle navigation events on-slide
export const highlightNav = () => {
    $('#pageCarousel').on('slid.bs.carousel', ()=> {
        if ($('.carousel-item').hasClass('active')) {
            let navIndex = $('#pageCarousel .active').index()
            $('#menuList li button').removeClass('active-page')
            $('#menuList li button').eq(navIndex).addClass('active-page')
            let pageTitle = $('#menuList li button').eq(navIndex).html()
            $('title').html(`Numerologia - ${pageTitle}`) // dynamic page title     
            // render section content on slide
            if (pageTitle == `O Mnie`) {
                $('#col-1').prop('class', 'col-12 col-md-8 p-0')
                $('#col-2').prop('class', 'col-12 col-md-4 p-0')
                $('#mainContent .active').html('').html(aboutMe.displayAboutMe())
                $('#pageSection').html('').html(aboutMe.displayKarta()).append(aboutMe.displayFbAndYou())
                $('#col-2').show()
                $('#mainContent, .carousel-item .active').css({'width': ''})
                // handle subpage of about me 
                $('#randomCard').on('click', ()=> {
                    let image = aboutMe.randomNumber
                    $('#stronaOmnie').html(aboutMe.displayStronaKarta(image['path'][0], image['text']))
                })
            } else if (pageTitle == 'Numerologia') {   
                $('#col-1').prop('class', 'col-12 col-md-8 p-0')
                $('#col-2').prop('class', 'col-12 col-md-4 p-0')
                $('#mainContent .active').html(numerologia.displayPostyNumerologia())         
                $('#pageSection').html(numerologia.displayCyfra()).append(numerologia.displaySectionNumerologia(numerologia.postArr))  
                $('#col-2').show()
                $('#mainContent, .carousel-item .active').css({'width': ''})
                numerologia.numerologiaHandler(numerologia.postArr)  
                numerologia.cyfraHandler()         
            } else if (pageTitle == 'Usługi') {
                $('#col-1').prop('class', 'col-12 col-md-8 p-0')
                $('#col-2').prop('class', 'col-12 col-md-4 p-0')
                $('#mainContent .active').html(services.displayServices)
                $('#pageSection').html(services.displaySectionOpinions())
                $('#col-2').show()
                $('#mainContent, .carousel-item .active').css({'width': ''})
                services.insertOpinionhandler()
                services.servicesHandler()
            } else if (pageTitle == 'Kontakt') {
                $('#col-2').show()
                $('#col-1, #col-2').prop('class', 'col-12 col-md-6')
                $('#mainContent, .carousel-item .active').css({'width': ''})
                $('#mainContent .active').html(contact.displayContactUs())
                $('#pageSection').html(contact.displaySectionContact())                
                contact.handleContactForm()
            }
        }
    })
}

// render top section content
$('#navContent').html(head.displayHeader()) // render navbar
$('#mainContent').html(carousel.displayCarousel(contentArray)) // render main content
$('#about').addClass('active-page') // set active-page on page load
$('#pageSection').html(aboutMe.displayKarta()).append(aboutMe.displayFbAndYou())// set section content on page load
$('title').html(`Numerologia - Glowna`) // set page title to 'Home'

highlightNav() // invoke add active-page class

// call main page section handler on page load
$('#randomCard').on('click', ()=> {
    let image = aboutMe.randomNumber
    $('#stronaOmnie').html(aboutMe.displayStronaKarta(image['path'][0], image['text']))
})

// navigation buttons logics
$('#menuList li button').on('click', (e)=> {    
    $('#menuList li button').removeClass('active-page');
    $(e.target).addClass('active-page')
    switch(e.target.innerHTML) { 
        case 'O Mnie':            
            $('#pageCarousel').carousel(0)       
            break;
        case 'Numerologia':
            $('#pageCarousel').carousel(1)  
            break;        
        case 'Usługi':
            $('#pageCarousel').carousel(2)
            break;
        case 'Kontakt':
            $('#pageCarousel').carousel(3)
            break;
        default:
            return;
    }        
})





