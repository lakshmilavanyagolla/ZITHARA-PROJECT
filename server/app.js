import express from 'express'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import cors from 'cors'


const app = express();

const PORT = process.env.PORT || 5000



app.use(express.json())
app.use(cors())

app.use('/getUsers', async (req, res) => {
  console.log('called')
  const users = await prisma.userRecords.findMany({
    orderBy: {
      createdAT: 'desc'
    }
  })
  console.log(users)
  res.json(users).status(200);
})


app.post('/createUser', async (req, res) => {

  const { values } = req.body;
  try {

    const createUser = await prisma.userRecords.create({
      data: {
        ...values
      },
      select: {
        name: true,
        location: true
      }
    })

    res.json({ success: 'New use created successfully' }).status(200);
  } catch (err) {
    console.log(err)
    return res.json({ error: 'Internel server eror' }).status(500);
  }

})
app.listen(PORT, console.log(`Server is running  on port ${PORT}`))


