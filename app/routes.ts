import {
  Opine,
} from '../deps.ts'

import profileController from './controllers/profileController.ts'

const router = Opine.Router()

router.get("/profiles", profileController.get)
router.post("/profiles", profileController.create)

export default router
