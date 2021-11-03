import { PrismaClient, Event } from ".prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event | Event[]>
) {
  const { name, place } = req.body
  if (req.method === "POST") {
    const newEvent = await prisma.event.create({
      data: {
        name: "Event2",
        place: "place",
      },
    })
    res.status(200).json(newEvent)
  } else if ((req.method = "GET")) {
    const events = await prisma.event.findMany()
    res.status(200).json(events)
  }
}
