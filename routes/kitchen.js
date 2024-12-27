const express = require('express')
const { getKitchens, singleKitchen, createKitchen, deleteKitchen } = require('../controllers/kitchenCntrl')
const multer = require('multer');
const path = require('path')
const upload = multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.join(__dirname,'..','upload/kitchen'))
    },
    filename:function(req,file,cb){
        cb(null,file.originalname) 
    }
})

})
const router = express.Router()

router.route('/kitchen').get(getKitchens)
router.route('/kitchen/:id').get(singleKitchen)
router.route('/kitchen').post(upload.single('image'),createKitchen)
router.route('/kitchen/:id').delete(deleteKitchen)

module.exports = router