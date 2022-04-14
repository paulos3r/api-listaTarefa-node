import { Router  } from "express";

import * as TodoController from '../controller/api.controller';

const router = Router();

router.get('/todo', TodoController.all);
router.post('/todo', TodoController.add);
// router.post('/todo', 
//     (req, res)=>{
//         console.log(req.body.title)
//         res.json({
//             error:'teste 123'
//         });
//     }
// );
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);


export default router;