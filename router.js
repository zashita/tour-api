import Router from 'express'
import Place from "./place.js";
import PlaceController from "./placeController.js";

const router = new Router()

router.post('/places', PlaceController.create)
router.get('/places', PlaceController.getAll)
router.delete('/places/:id', PlaceController.delete)
router.get('/places/:id', PlaceController.getOne)
router.put('places/:id', PlaceController.update)

export default router
