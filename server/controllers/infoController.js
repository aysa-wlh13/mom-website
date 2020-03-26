module.exports = {
    //get//
    getInfo: async(req, res) => {
        console.log(req.session.user)

        const db = req.app.get ('db')

        const {users1_id} = req.params

        const userInfo = await db.get_info([users1_id])

        res.status(200).send(userInfo);
    },

    //post//
    addInfo: async(req, res) => {
        const db = req.app.get('db')

        const {info} = req.body;

        const {users1_id} = req.params
        let newInfo = await db.add_info([users1_id, info])

        res.status(200).send(newInfo);
    },

    //put//
    editInfo: (req, res) => {
        const {info} = req.body

        const {text_id} = req.params

        const db = req.app.get ('db')

        db.update_info([text_id, info]).then(result => {
            return res.sendStatus(200)
        })
    },

    //delete//
    deleteInfo: (req, res) => {
        const db = req.app.get('db')

        const {users1_id} = req.params
        console.log(users1_id)

        db.delete_info(users1_id)       
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
    }
};