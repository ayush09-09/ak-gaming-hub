const FeaturedIDs = ({ ids }) => (
  <div className="grid md:grid-cols-3 gap-4">
    {ids.map((id) => (
      <div key={id._id} className="p-4 border rounded-lg">
        <img src={id.images[0]} className="h-40 w-full object-cover rounded" />
        <h3 className="mt-2 font-semibold">{id.nickname}</h3>
        <p>Level: {id.level} • Views: {id.views}</p>
      </div>
    ))}
  </div>
);

export default FeaturedIDs;
