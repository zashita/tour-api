import Place from "./place.js";
import {json} from "express";
import PlaceService from "./placeService.js";

class PlaceController{
    async create(req, res){
        try{
            console.log(
                req.files.photos)
            const picture = req.files.photos;
            const place = await PlaceService.create(req.body, picture)
            res.json(place)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res){
        try {
            const updatedPlace = PlaceService.update(req.body)
            return res.json(updatedPlace);
        }catch (e) {
            res.status(500).json(e)
        }
    }


    async getAll(req, res){
        try{
            const places = await PlaceService.getAll();
            return res.json(places);
        }catch (e) {
            res.status(500).json(e)
        }

    }


    async getOne(req, res){
        try{
            const {id} = req.params
            const place = await PlaceService.getOne(id)
            return res.json(place)
        }catch (e) {
            res.status(500).json(e)
        }
    }


    async delete(req, res){
        try{
            const {id} = req.params;
            const deletedPlace = await PlaceService.delete(id)
            return res.json(deletedPlace)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PlaceController();
