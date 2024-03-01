const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const timestamp = Date.now();
        const avatarName = file.fieldname + '-' + timestamp + '.' +
         file.originalname.split('.')[file.originalname.split('.').length -1];
        cb(null, avatarName)
    }
})

const upload = multer({
    storage : storage,
    fileFilter: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
});

const multerMiddleware = upload.single('profile-file')

module.exports = multerMiddleware;