const express = require ('express')
const app = express()
const multer = require('multer')
const path = require('path')

app.use('/upload', express.static(path.join(__dirname, 'upload')))

const diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, 'public/uploads'))
    },
    filename: function(req, file, cb) {
        cb(null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
            )
    }
})

// const contacts = [

// ]

function validateIndex (req, res, next) {
    if (
        req.query.index !== undefined &&
        contacts[req.query.index] === undefined
    ) {
        res.send({
            success: false
        })
    } else {
        next()
    }
}

app.use(validateIndex)

app.get('/contact', function(req, res) {
    res.send(contacts)
})

app.post('/contact', function(req,res) {
    contacts.push({name: req.body.name, phone: req.body.phone})
    res.send({success: true})
})

app.put (
    multer({storage: diskStorage}).single('photo'),
    (req,res) => {
        const file = req.file.path
        console.log(file)
        if (!file) {
            res.status(400).send({
                status: false,
                data: 'No file is selected',
            })
        }
    }
)

const upload = multer ({ storage: storage})

app.post('/upload', upload.single('photo'), function (req, res) {
    const movieId = req.params.id 
    const photoUrl = req.file.path 
})

res.status(200).json({ message: 'Foto Telah Terunggah'})

app.listen(3000, function () {
    console.log('server running')
})