const Time = require('../models/timeModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.createTime = async (req, res) => {
    try{
        let token = await req.headers['authorization'];

        if(token !== undefined) {
            const payload = await new Promise((resolve, reject) =>{
                jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
                    if(error) {
                        reject(error);
                    } else {
                        resolve(decoded);
                    }
                })
            })

            req.user = payload;

            try{
                const newTime = new Time({...req.body, user_id: req.user.id});
                let time = await newTime.save();
                res.status(201).json(`Votre temps a été enregistré : ${time.time}`);
            } catch(error){
                console.log(error);
                res.status(500).json({message: "Erreur serveur"});
            }

        } else {
            res.status(403).json({message: "Token manquant"});
        }
    } catch(error) {
        res.status(500).json({message: "Erreur serveur(inexistant)"});
    }
}

exports.listAllTime = async (req, res) => {
    try{
        let token = await req.headers['authorization'];

        if(token !== undefined) {
            const payload = await new Promise((resolve, reject) =>{
                jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
                    if(error) {
                        reject(error);
                    } else {
                        resolve(decoded);
                    }
                })
            })

            req.user = payload;
            console.log(req.user.id);

            try{
                const times = await Time.find({user_id: req.user.id});
                res.status(200).json(times);
            } catch(error){
                console.log(error);
                res.status(500).json({message: "Erreur serveur"});
            }

        } else {
            res.status(403).json({message: "Token manquant"});
        }
    } catch(error) {
        res.status(500).json({message: "Erreur serveur(inexistant)"});
    }
}

exports.avgTime = async (req, res) => {
    try{
        let token = await req.headers['authorization'];

        if(token !== undefined) {
            const payload = await new Promise((resolve, reject) =>{
                jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
                    if(error) {
                        reject(error);
                    } else {
                        resolve(decoded);
                    }
                })
            })

            req.user = payload;
            console.log(req.user.id);

            try{
                const times = await Time.find({user_id: req.user.id});
                let result = 0;
                for(let i = 0; i < times.length; i++){
                    result += times[i].time;
                }
                result /= times.length;

                res.status(200).json(result);
            } catch(error){
                res.status(500).json({message: "Erreur serveur"});
            }

        } else {
            res.status(403).json({message: "Token manquant"});
        }
    } catch(error) {
        res.status(500).json({message: "Erreur serveur(inexistant)"});
    }
}