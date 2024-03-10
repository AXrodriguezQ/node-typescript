import express from "express";
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get('/', (_, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id);
    return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addEntries(newDiaryEntry) 

        res.json(addedDiaryEntry)
   
    } catch (e) {
        res.status(404).send(console.error(e));
    }
})

export default router;