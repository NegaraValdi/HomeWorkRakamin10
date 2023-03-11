const pool = require('')

class movie {
    constructor(judulFilm, genreFIlm, tahunfilm){
        this.judulFilm = judulFilm
        this.genreFIlm = genreFIlm
        this.tahunfilm = tahunfilm
    }

    static showAll(callback){
        let query = `SELECT * FROM 'movies';`

        pool.query(query, (err, movies) => {
            if(err) {
                callback(err,null)
            } else {
                movies = 

                conslog.log(movies)

                console.log('SHOW DATA')
                callback(null, movies)
            }
        })
    }

    static addPost(objPhoto, callback) {
        let query = `INSERT INTO "movies" (objPhoto) VALUES ($1);`

        pool.query(query, function(err, result) {
            if(err) {
                callback(err, null)
            }
            else {
                console.log(`${objPhoto} sudah diunggah`)
                callback(null, null)
            }
        })
    }


}

module.exports = photo; 