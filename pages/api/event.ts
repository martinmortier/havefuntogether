import { Prisma, PrismaClient, Event } from ".prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

type EventType = Prisma.EventCreateInput | Event[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventType | string>
) {
  if (req.method === "POST") {
    const { name, place, startDate, endDate, idCreator } = req.body
    try {
      const newEvent: EventType = await prisma.event.create({
        data: {
          name: name,
          place: place,
          startDate: startDate,
          endDate: endDate,
          idCreator: idCreator,
        },
      })
      res.status(200).json(newEvent)
    } catch (error) {
      res.status(500).json(`${error}`)
    }
  } else if (req.method === "GET") {
    if (!req.query) {
      const events: EventType = await prisma.event.findMany()
      res.status(200).json(events)
    } else {
      const { idCreator } = req.query
      const event: EventType = await prisma.event.findMany({
        where: {
          idCreator: idCreator as string,
        },
      })
      res.status(200).json(event)
    }
  } else if (req.method === "DELETE") {
    const [...idEvents]: Array<number> = req.body
    try {
      idEvents.map(
        async (id: number) =>
          await prisma.event.delete({
            where: {
              idEvent: id,
            },
          })
      )
      res.status(200).json(`Events with id ${idEvents} deleted`)
    } catch (error: unknown) {
      console.log(error)
    }
  }
}
