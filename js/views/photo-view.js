/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 11/9/13
 * Time: 6:03 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var PhotoView = View.extend({
    initialize : function(options){
        this.controller=options.controller;
        this.elementContainer=options.elementContainer;
        this.model=options.model;
        this.photoCollection=options.photoCollection;
        this.render();
        this.createImageContainers(this.model);
        this.registerEventListeners(this.model,this.photoCollection);
    },
    render : function(){
        this.elementContainer.innerHTML='';
        document.getElementsByClassName('js-photo-thumbnails')[0].style.display="none";
        document.getElementsByClassName(this.elementContainer.className)[0].style.display="block";

        var photoContainer = document.createElement('div');
        photoContainer.setAttribute('class','js-photo-container');

        var photoElement = document.createElement('div');
        photoElement.setAttribute('class','js-photo theme-photo');

        var photoHeaderContainer = document.createElement('div');
        photoHeaderContainer.setAttribute('class','js-photo-header theme-photo-header');

        var photoNavigationContainer = document.createElement('div');
        photoNavigationContainer.setAttribute('class','js-photo-navigation theme-photo-navigation');

        var prevElementContainer = document.createElement('span');
        prevElementContainer.setAttribute('class','js-prev theme-prev');
        prevElementContainer.innerHTML="Prev";

        var nextElementContainer = document.createElement('span');
        nextElementContainer.setAttribute('class','js-next theme-next');
        nextElementContainer.innerHTML="Next";

        var backElementContainer = document.createElement('span');
        backElementContainer.setAttribute('class','js-back theme-back');
        backElementContainer.innerHTML="Back";

        photoNavigationContainer.appendChild(prevElementContainer);
        photoNavigationContainer.appendChild(backElementContainer);
        photoNavigationContainer.appendChild(nextElementContainer);

        photoContainer.appendChild(photoElement);
        photoContainer.appendChild(photoNavigationContainer);

        this.elementContainer.appendChild(photoContainer);
        this.elementContainer.appendChild(photoHeaderContainer);
    },
    createImageContainers : function(imageData){
        var thumbnailImageContainer=document.createElement('span');
        thumbnailImageContainer.setAttribute('class','js-thumbnail-item');

        var thumbnail = document.createElement('img');
        thumbnail.setAttribute('id',imageData.get('id'));
        thumbnail.setAttribute('src',imageData.get('url'));
        thumbnail.style.height="450px";
        thumbnail.style.width="600px";
        thumbnailImageContainer.appendChild(thumbnail);

        document.getElementsByClassName('js-photo')[0].innerHTML=thumbnailImageContainer.outerHTML;
        document.getElementsByClassName('js-photo')[0].style.display="block";
        document.getElementsByClassName('js-photo-header')[0].innerHTML=imageData.get('photoName');
        document.getElementsByClassName('js-photo-header')[0].style.display="block";
    },
    registerEventListeners : function(imageData,photoCollection){
        var that=this;

        var prevElement=document.getElementsByClassName('js-prev')[0];
        var nextElement=document.getElementsByClassName('js-next')[0];
        prevElement.addEventListener('click',function(){that.controller.showPrev(event,photoCollection)});
        nextElement.addEventListener('click',function(){that.controller.showNext(event,photoCollection)});

        var backElement=document.getElementsByClassName('js-back')[0];
        backElement.addEventListener('click',function(){that.controller.showThumbnailGallery(event)});
    }
});
