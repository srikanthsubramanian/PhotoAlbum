/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 6/9/13
 * Time: 2:28 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
    function mergeObjects(obj1, obj2) {
        if (obj1 == null || obj2 == null){
            return obj1;
        }
        for (var key in obj2)
            if (obj2.hasOwnProperty(key)){
                obj1[key] = obj2[key];
            }
        return obj1;
    }

    function extend(extensions){
        var parent = this;
        var child;
        if (extensions && extensions['constructor']) {
            child = function(){this.initialize.apply(this,arguments);};
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }
        var Temporary = function(){};
        Temporary.prototype = parent.prototype;
        child.prototype = new Temporary();

        if (extensions){
            mergeObjects(child.prototype, extensions)
        }
        return child;
    }
