/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 11/9/13
 * Time: 6:04 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";

var PhotoGalleryView = View.extend({
    initialize : function(options){
        this.controller=options.controller;
        this.elementContainer = options.elementContainer;
        this.photoGallery=options.photoGallery;
        this.photoCollection=[];
        this.render();
    },
    render : function(){
        this.createAlbumGalleryStructure();
        this.renderThumbnailGallery();
    },
    createAlbumGalleryStructure : function(){
        var photoAlbumContainer = document.createElement('div');
        photoAlbumContainer.setAttribute('class','js-photo-album');

        var thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.setAttribute('class','js-photo-thumbnails');

        var photoContainer = document.createElement('div');
        photoContainer.setAttribute('class','js-photo-large');

        photoAlbumContainer.appendChild(thumbnailsContainer);
        photoAlbumContainer.appendChild(photoContainer);

        this.elementContainer.appendChild(photoAlbumContainer);
    },
    renderThumbnailGallery : function(){
        var elementContainer=document.getElementsByClassName('js-photo-thumbnails')[0];
        for(var thumbnailIterator=0;thumbnailIterator<this.photoGallery.length;thumbnailIterator++){
            var photo=this.photoGallery[thumbnailIterator];
            var photoModel = new PhotoModel(photo);
            this.photoCollection.push(photoModel);
            new ThumbnailView({controller:this.controller,elementContainer:elementContainer,model:photoModel,photoCollection:this.photoCollection});
        }
    }
});
