const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/', async(req,res) => {
    try{
        const students = await Student.find()
        res.json(students)
    }catch(err) {
        res.send("Error" +err)
    }
});

router.post('/', async(req,res) => {
    const student = new Student({
        name: req.body.name,
        tech: req.body.tech,
        subscribe: req.body.subscribe
    })
    try{
       const stu = await student.save()
       res.json(stu)
    }catch(err) {
        res.send("Error" +err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        res.json(student);
    }catch(err){
        res.send("Error" +err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        student.name = req.body.name
        student.tech = req.body.tech
        const stud = await student.save()
        res.json(stud)
    }catch(err) {
        res.send("Error" +err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const student = await Student.findById(req.params.id)
        const stud = await student.remove()
        // res.json(stud)
        res.send("Deleted student: " +stud._id)
    }catch(err) {
        res.send("Error" +err)
    }
})



module.exports = router