var express = require('express');
var router = express.Router();

router.get("/faculty", (req, res) => {
    const faculty = {
        fid: 1,
        name: "Dennis Castro",
        city: "Toronto",
        college: "Seneca College23"
    }
    res.send(faculty)
});

router.get("/fulltimefaculty", (req, res) => {
    const faculty = {
        fid: 2,
        name: "Dens",
        city: "Markham",
        college: "Fleming"
    }
//    res.setHeader()
    res.send(faculty)
});

router.patch("/student", (req, res) => {
    res.send("<h1>PATCH - Record </h1>")
});

router.put("/student", (req, res) => {
    res.send("<h1>PUT - Record</h1>")
});



router.delete("/student", (req, res) => {
    res.status(201).send("<h1>Record Deleted</h1>")
})

module.exports = router