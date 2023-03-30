const { Router } = require('express')
const StudentInfo = require('../../models/StudentInfo')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const studentInfo = await StudentInfo.find()
        if (!studentInfo) throw new Error('No Student Info')
        const sorted = studentInfo.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:studentId/:password', async (req, res) => {
    const { studentId, password } = req.params;
    
   try {
    const studentInfo = await StudentInfo.findOne({ studentId, password });
    if (!studentInfo) {
        
       return res.status(404).send({ message: 'No profile for this student ID and password exists.' });
    }
    res.send(studentInfo);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Server error.' });
  }
})

router.post('/', async (req, res) => {
    const newStudentInfo = new StudentInfo(req.body)
    try {
        const studentInfo = await newStudentInfo.save()
        if (!studentInfo) throw new Error('Something went wrong saving the student info')
        res.status(200).json(studentInfo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const response = await StudentInfo.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Something went wrong ')
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const removed = await StudentInfo.findByIdAndDelete(id)
        if (!removed) throw Error('Something went wrong ')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router