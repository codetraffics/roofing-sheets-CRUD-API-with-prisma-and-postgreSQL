const roofService = require('../services/roofService');

exports.addRoof = async (req, res) => {
  try {
    const { title, publishedDate, distributorId } = req.body;
    const roof = await roofService.addRoof(
      title,
      new Date(publishedDate),
      distributorId
    );

    res.status(201).json(roof);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.getAllRoofs = async (req, res) => {
  try {
    const roofs = await roofService.getAllRoofs();
    res.json(roofs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getRoofById = async (req, res) => {
  try {
    const roof = await roofService.getRoofById(parseInt(req.params.id));

    if (roof) {
      res.json(roof);
    } else {
      res.status(404).json({ message: 'Roof not found' });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateRoof = async (req, res) => {
  try {
    const { title } = req.body;
    const roof = await roofService.updateRoof(parseInt(req.params.id), title);
    res.json(roof);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.deleteRoof = async (req, res) => {
  try {
    await roofService.deleteRoof(parseInt(req.params.id));
    res.json({ message: `Deleted roof with id ${req.params.id}` });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
