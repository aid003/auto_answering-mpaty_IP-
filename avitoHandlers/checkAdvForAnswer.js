import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function chekIdAdvForAnswer(idAdv) {
  let message = "";
  const currentIdAdv = [
    { id: 4471212654, type: "telegram" },
    { id: 4471026215, type: "telegram" },
  ];

  for (let adv of currentIdAdv) {
    if (adv.id === idAdv) {
      message = await prisma.messages.findUnique({
        where: {
          typeAdvertizing: adv.type,
        },
        select: {
          text: true,
        },
      });
    } else {
      message = await prisma.messages.findUnique({
        where: {
          typeAdvertizing: "all",
        },
        select: {
          text: true,
        },
      });
    }
  }

  return message.text;
}
