/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 11/9/13
 * Time: 6:03 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

var ThumbnailView = View.extend({
    initialize : function(options){
        this.controller=options.controller;
        this.elementContainer=options.elementContainer;
        this.model=options.model;
        this.photoCollection=options.photoCollection;
        this.render();
        this.registerEventListeners(this.model,this.photoCollection);
    },
    render : function(){
        var thumbnailContainer=document.createElement('div');
        thumbnailContainer.style.display="inline-block";
        thumbnailContainer.style.padding="10px";

        var thumbnailImageContainer=document.createElement('span');
        thumbnailImageContainer.setAttribute('class','js-thumbnail-item');

        var thumbnail = document.createElement('img');
        thumbnail.setAttribute('src',this.model.get('url'));
        thumbnail.style.cursor="pointer";
        thumbnail.style.height="150px";
        thumbnail.style.width="150px";

        thumbnailImageContainer.appendChild(thumbnail);
        thumbnailContainer.appendChild(thumbnailImageContainer);

        document.getElementsByClassName(this.elementContainer.className)[0].appendChild(thumbnailContainer);
    },
    registerEventListeners : function(imageData,photoCollection){
        var that=this;
        var thumbnailArray=document.getElementsByClassName('js-thumbnail-item');
        var thumbnails=document.getElementsByClassName('js-thumbnail-item')[thumbnailArray.length-1];
        thumbnails.addEventListener('click',function(){that.controller.showLargeImage(imageData,photoCollection)});
    }
});
