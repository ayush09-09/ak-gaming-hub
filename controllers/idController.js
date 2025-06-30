const FFID = require("../models/FFID");

// Re-list logic
exports.relistID = async (req, res) => {
  try {
    const id = req.params.id;
    const existingID = await FFID.findById(id);

    if (!existingID) return res.status(404).json({ msg: "ID not found." });
    if (existingID.status === "Active") return res.status(400).json({ msg: "Already active." });

    const relisted = new FFID({
      ...existingID._doc,
      _id: undefined,
      createdAt: new Date(),
      status: "Pending",
    });

    await relisted.save();
    res.status(200).json({ msg: "Re-listed successfully!", relisted });
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};
