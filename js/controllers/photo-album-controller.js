/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 6/9/13
 * Time: 3:00 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
    var AlbumController=Controller.extend({
        initialize : function(options){
            this.photoGallery=options.photoGallery;
            this.controllerElement=options.controllerElement;
            this.initiateViews();
        },
        initiateViews : function(){
            var elementContainer=document.getElementsByClassName('js-photo-album-container')[0];
            new PhotoGalleryView({controller:this,elementContainer:elementContainer,photoGallery:this.photoGallery});
        },
        showThumbnailGallery : function(){
            document.getElementsByClassName('js-photo-large')[0].style.display="none";
            document.getElementsByClassName('js-photo-thumbnails')[0].style.display="block";
        },
        showLargeImage : function(photo,photoCollection){
            var elementContainer = document.getElementsByClassName('js-photo-large')[0];
            this.photoView=new PhotoView({controller:this,elementContainer:elementContainer,model:photo,photoCollection:photoCollection});
        },
        showPrev : function(event,photoCollection){
            event.stopImmediatePropagation();
            var imageId = document.getElementsByClassName('js-photo')[0].getElementsByTagName('img')[0].getAttribute('id');
            imageId=imageId.replace('#','');
            for(var iCounter=0;iCounter<photoCollection.length;iCounter++){
                if(imageId==photoCollection[iCounter].get('id')){
                    if(imageId==0){
                        this.photoView.createImageContainers(photoCollection[photoCollection.length-1]);
                    }
                    this.photoView.createImageContainers(photoCollection[iCounter-1]);
                    break;
                }
            }
        },
        showNext : function(event,photoCollection){
            event.stopImmediatePropagation();
            var imageId = document.getElementsByClassName('js-photo')[0].getElementsByTagName('img')[0].getAttribute('id');
            imageId=imageId.replace('#','');
            for(var iCounter=0;iCounter<photoCollection.length;iCounter++){
                if(imageId==photoCollection[iCounter].get('id')){
                    if(imageId==photoCollection.length-1){
                        this.photoView.createImageContainers(photoCollection[0]);
                    }
                    this.photoView.createImageContainers(photoCollection[iCounter+1]);
                    break;
                }
            }
        }

    });
