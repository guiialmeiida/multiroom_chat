module.exports = (application) => {
    application.post('/chat', (req, res) => {
        application.app.controllers.chat.iniciaChat(application, req, res)
    })
    
    application.get('/chat', (req, res) => {
        res.render('chat')
    })
}