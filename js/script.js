// class import
import { Header } from './header.js' // navigation bar
import { Carousel } from './carousel.js' // render pages as carousel

import { Home } from './pages/home.js'
import { AboutUs } from './pages/aboutUs.js'
import { ServicesUs } from './pages/services.js'
import { ContactUs } from './pages/contact.js'
import { Social } from './pages/social.js'

import { SectionContact } from './section/contact.js'
import { SectionFacebook } from './section/facebook.js'
import { SectionOpinions } from './section/opinions.js'

// declaring headerNav instance
const head = new Header('Numerologia')

// declaring pages instances
const homePage = new Home()
const aboutUs = new AboutUs()
const services = new ServicesUs()
const contact = new ContactUs()
const social = new Social()

let contentArray = [
    homePage.displayHome(),
    aboutUs.displayAboutUs(), 
    services.displayServices(),      
    social.displaySocial(),
    contact.displayContactUs(),
] 

// declaring section content
const sectionContact = new SectionContact()
const sectionFacebook = new SectionFacebook()
const sectionOpinions = new SectionOpinions()

// array of background images
const imgArr = ['./images/bgflower1.jpg', './images/bgflower2.jpg', './images/bgflower3.jpg', './images/bgflower4.jpg', './images/bgflower5.jpg']

// declare carousel instance
const carousel = new Carousel() 

$('#navContent').html(head.displayHeader()) // render navbar
$('#mainContent').html(carousel.displayCarousel(contentArray)) // render main content
$('#pageSection').html(sectionContact.displaySectionContact())
                 .append(sectionFacebook.displaySectionFacebook())
                 .append(sectionOpinions.displaySectionOpinions())
$('title').html(`Numerologia - Glowna`) // set page title to 'Home'

// navigation buttons logics
$('#menuList li a').on('click', (e)=> {
    $('#menuList li a').removeClass('active-page');
    $(e.target).addClass('active-page')
    switch(e.target.id) {
        case 'home':
            $('#pageCarousel').carousel(0) 
            break;
        case 'about':
            $('#pageCarousel').carousel(1)
            break;
        case 'services':
            $('#pageCarousel').carousel(2)
            break; 
        case 'social':
            $('#pageCarousel').carousel(3)
            break;
        case 'contact':
            $('#pageCarousel').carousel(4)
            break;
        default:
            return;
    }        
})

// adds active-page class to nav element on slide
$('#pageCarousel').on('slid.bs.carousel', ()=> {
    if ($('.carousel-item').hasClass('active')) {
        let navIndex = $('#pageCarousel .active').index()
        $('#menuList li a').removeClass('active-page')
        $('#menuList li a').eq(navIndex).addClass('active-page')
        let pageTitle = $('#menuList li a').eq(navIndex).html()
        $('title').html(`Numerologia - ${pageTitle}`) // dynamic page title             
    }
})

// handle opinions

$('#submitOpinion').on('click', (e)=> {
    e.preventDefault()
    let opinionName = $('#opinionName').val()
    let opinionContent = $('#yourOpinion').val()
    sectionOpinions.insertOpinion(opinionName, opinionContent)
})

