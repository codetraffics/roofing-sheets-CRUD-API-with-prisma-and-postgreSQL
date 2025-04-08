const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addDistributor(name, location) {
  try {
    const newlyCreatedDistributor = await prisma.distributor.create({
      data: {
        name,
        location,
      },
    });
    return newlyCreatedDistributor;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function deleteDistributor(id) {
  try {
    const deletedDistributor = await prisma.distributor.delete({
      where: { id },
      include: { roofs: true },
    });

    return deletedDistributor;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { addDistributor, deleteDistributor };
