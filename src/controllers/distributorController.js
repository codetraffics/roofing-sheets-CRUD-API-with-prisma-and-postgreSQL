const distributorService = require('../services/distributorService');

exports.addDistributor = async (req, res) => {
  try {
    const { name, location } = req.body;
    const distributor = await distributorService.addDistributor(name, location);
    res.status(201).json(distributor);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

exports.deleteDistributor = async (req, res) => {
  try {
    const deletedResult = await distributorService.deleteDistributor(
      parseInt(req.params.id)
    );
    res
      .status(200)
      .json({
        message: `Distributor deleted with id ${req.params.id}`,
        deletedResult,
      });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
