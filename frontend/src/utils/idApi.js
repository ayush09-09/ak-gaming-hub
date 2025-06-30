// This is mock logic. Replace with Axios / fetch to real backend later.
const dummyIDs = {
  "abc123": { views: 58, saves: 12, level: 72, price: 399, _id: "abc123" },
};

export const getIDById = async (id) => {
  return dummyIDs[id];
};

export const incrementViewCount = async (id) => {
  dummyIDs[id].views += 1;
};
