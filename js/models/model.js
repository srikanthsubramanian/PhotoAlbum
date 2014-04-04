/**
 * Created with JetBrains WebStorm.
 * User: srikanths
 * Date: 13/9/13
 * Time: 12:13 PM
 * To change this template use File | Settings | File Templates.
 */
"use strict";
var Model = function(){
    this.initialize.apply(this,arguments);
};
Model.prototype.initialize = function(attributes,options){
    var attrs = attributes || {};
    options || (options = {});
    this.attributes = {};
    if(options || attributes){
        this.set(attrs,options);
    }
};
Model.prototype.set = function(key,value,options){
    var attribute, attributes;
    if (key == null){
        return this;
    }
    if (typeof key === 'object') {
        attributes = {};
        for (var prop in key){
            var propVal=key[prop];
            attributes[prop]=propVal;
            this.attributes=attributes;
        }
    } else {
        this.attributes[key] = value;
    }
};
Model.prototype.get = function(attribute){
    return this.attributes[attribute];
};

Model.extend=extend;
