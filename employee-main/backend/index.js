
//importing
var express = require("express")
require("./connection")
var empmodel = require("./employee")


//initialize
var app = express()

//middleware
app.use(express.json())

//api creation 
app.get('/trial', (req, res) => {
    res.send("trial message")

})
app.get('/t', (req, res) => {
    res.send("its an employee app")
})
app.post('/add', async (req, res) => {
    try {
        await empmodel(req.body).save()
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)

    }
})
app.get('/view', async (req, res) => {
    try {
        var data = await empmodel.find()
        res.send(data)
    } catch (error) {
        console.log(error)

    }
})
    //delete api
    app.delete('/delete/:id',async (req, res) => {
        try {
            await empmodel.findByIdAndDelete(req.params.id)
            res.send({ message: "deleted" })
        } catch (error) {
            console.log(error)
        }
        })
        //update api
        
        app.put('/edit/:id',async (req, res) => {
            try {
                await empmodel.findByIdAndUpdate(req.params.id, req.body);
                res.send({ message: 'updated' })
            } catch (error) {
                console.log(error)
            }
            })
    
//port
app.listen(3001, () => {
    console.log("port is running")

})
