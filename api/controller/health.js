const health = require('../database/health')

module.exports = function (pool) {
    return {
        async checkHealth(req, res) {
            // const peeps = await health.checkHealth(pool)
            const peeps = {
                healthRes: 'HEllo there!'
            }
	        console.log(peeps)
            if (peeps != null && peeps != undefined) {
                res.enforcer.status(200).send(peeps)
            }
            else {
                res.enforcer.status(404).send()
            }
        }
    }
}
