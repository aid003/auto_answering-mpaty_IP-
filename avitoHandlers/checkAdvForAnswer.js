import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function chekIdAdvForAnswer(idAdv) {
  let message = "";
  const currentIdAdv = [
    { id: 4453393817, type: "telegram" },
    { id: 4516692170, type: "telegram" },
  ];

  //   { id: 1, typeAdvertizing: 'all', text: 'внешка' },
  //   { id: 2, typeAdvertizing: 'avitolog', text: 'Авитолог' },
  //   { id: 3, typeAdvertizing: 'telegram', text: 'телега' },
  //   { id: 4, typeAdvertizing: 'analit', text: 'аналитика' }

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
