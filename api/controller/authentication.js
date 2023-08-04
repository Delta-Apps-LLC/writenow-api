module.exports = function (passport) {
    const authenticate = passport.authenticate('local')
    require('dotenv').config()
    const jwt = require('jsonwebtoken')
    const { Resend } = require('resend');
    const { welcomeEmail } = require('./welcome')
    const resend = new Resend(process.env.RESEND_API_KEY);

    return {
        login (req, res, next) {
            authenticate(req, res, async err => {
                if (err) return next(err)

                if (req.body.isNew) {
                    await resend.emails.send({
						from: 'andrew@deltaapps.dev',
						to: res.rows[i].username,
						subject: `It's time to journal!`,
						html: welcomeEmail(),
					})
                }

                const token = jwt.sign({
                    ...req.user,
                    iat: Date.now(),
                    exp: Date.now() + 1209600000 // milliseconds in two weeks
                }, process.env.JWT_SIGNING_SECRET)

                res.enforcer.status(200).send(token)
            })
        },

        logout (req, res) {
            if (req.user) req.logout()
            res.enforcer.status(200).send()
        }
    }
}

