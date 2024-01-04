const express = require('express');
const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema;

const ListSchema = new mongooseSchema({
    task:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:Number,
        default:Date.now()
    }
})

const List = mongoose.model('List',ListSchema);

module.exports = List;