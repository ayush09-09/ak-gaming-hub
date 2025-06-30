// Utility for pagination logic
export function paginate(array, page = 1, perPage = 10) {
  const offset = (page - 1) * perPage;
  return array.slice(offset, offset + perPage);
}
