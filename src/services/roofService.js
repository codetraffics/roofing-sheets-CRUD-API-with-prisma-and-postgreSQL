const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addRoof(title, publishedDate, distributorId) {
  try {
    const newlyCreatedRoof = await prisma.roof.create({
      data: {
        title,
        publishedDate,
        distributor: {
          connect: { id: distributorId },
        },
      },
      include: { distributor: true },
    });
    return newlyCreatedRoof;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getAllRoofs() {
  try {
    const roofs = await prisma.roof.findMany({
      include: { distributor: true },
    });

    return roofs;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getRoofById(id) {
  try {
    const roof = await prisma.roof.findUnique({
      where: { id },
      include: { distributor: true },
    });
    if (!roof) {
      throw new Error(`Roof with id ${id} not found`);
    }

    return roof;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function updateRoof(id, newTitle) {
  try {
    const roof = await prisma.roof.findUnique({
      where: { id },
      include: { distributor: true },
    });
    if (!roof) {
      throw new Error(`Roof with id ${id} not found`);
    }

    const updatedRoof = await prisma.roof.update({
      where: { id },
      data: {
        title: newTitle,
      },
      include: {
        distributor: true,
      },
    });

    return updatedRoof;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function deleteRoof(id) {
  try {
    const roof = await prisma.roof.findUnique({
      where: { id },
      include: { distributor: true },
    });
    if (!roof) {
      throw new Error(`Roof with id ${id} not found`);
    }

    const deletedRoof = await prisma.roof.delete({
      where: { id },
      include: { distributor: true },
    });

    return deletedRoof;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = { addRoof, getAllRoofs, getRoofById, updateRoof, deleteRoof };
