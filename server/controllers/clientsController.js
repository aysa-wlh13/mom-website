module.exports = {
    getClients: (req, res) => {
        const db = req.app.get('db');
        const {firstname, lastname} = req.session.user
        let name = `${firstname} ${lastname}`
        console.log(typeof name)
        db.get_clients(name).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.sendStatus(500)
        })
    },

    getInfo: (req, res) => {
        const db = req.app.get('db');
        const {users1_id} = req.params
        console.log(req.session)
        db.get_info(users1_id).then(result => {
            res.status(200).send(result)
        }).catch(err => {
            res.sendStatus(500)
        })
    }
};

