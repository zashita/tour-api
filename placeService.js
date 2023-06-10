import Place from "./place.js";
import FileService from "./FileService.js";

class PlaceService{
    async create(place, picture){
        const photoName = FileService.saveFile(picture);
        const newPlace = Place.create({...place, photos: photoName})
        return newPlace
    }

    async update(place){
        if(!place._id){

        }
        const updatedPlace = Place.findByIdAndUpdate(place._id, place, {new: true})
        return updatedPlace;
    }

    async getAll(){
        const places = await Place.find()
        return places
    }

    async getOne(id){
        if(!id){

        } else{
            const place = await Place.findById(id)
            return place
        }
    }
    async delete(id){
        const deletedPlace = await Place.findByIdAndDelete(id)
        return deletedPlace
    }
}

export default new PlaceService();
