import FreeFireID from '../models/FreeFireID.js';
import User from '../models/User.js';

export const getAllListings = async (req, res) => {
  const listings = await FreeFireID.find();
  res.json(listings);
};

export const approveListing = async (req, res) => {
  const updated = await FreeFireID.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
  res.json(updated);
};

export const rejectListing = async (req, res) => {
  const updated = await FreeFireID.findByIdAndUpdate(req.params.id, { status: 'rejected' }, { new: true });
  res.json(updated);
};

export const getAllUsers = async (req, res) => {
  const users = await User.find().select('email username role');
  res.json(users);
};
