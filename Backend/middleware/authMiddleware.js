const jwt = require('jsonwebtoken')
const asyncHandler = require('express=async-handler')
const User = require ('../models/userModel')



const protect = asyncHandler(async (req, res, next) => {
    let token


    if(req.headers.authorization && 
        req.headers.autorization.startsWith('Bearer')
        ){
            try {
                //Get token fron header
                token = req.headers.authorization.split('')[1]
            }
        }







})

