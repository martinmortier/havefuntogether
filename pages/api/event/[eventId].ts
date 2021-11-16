import { PrismaClient } from ".prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { eventId } = req.query
    const id = Number(eventId)
    const event = await prisma.event.findUnique({
      where: {
        idEvent: id,
      },
    })
    res.status(200).json(event)
  }
  if (req.method === "DELETE") {
    const { eventId } = req.query
    const id = Number(eventId)
    const event = await prisma.event.delete({
      where: {
        idEvent: id,
      },
    })
    res.status(200).json(`Event with id: ${id} is deleted`)
  }
}
