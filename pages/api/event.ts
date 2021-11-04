import { Prisma, PrismaClient, Event } from ".prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

type EventType = Prisma.EventCreateInput | Event[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventType>
) {
  console.log(req.body)
  if (req.method === "POST") {
    const { name, place, startDate, endDate } = req.body
    const newEvent: EventType = await prisma.event.create({
      data: {
        name: name,
        place: place,
        startDate: startDate,
        endDate: endDate,
      },
    })
    res.status(200).json(newEvent)
  } else if ((req.method = "GET")) {
    const events: EventType = await prisma.event.findMany()
    res.status(200).json(events)
  }
}
