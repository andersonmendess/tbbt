import data from "./movies.json";

const getAll = () => data;

const getSeason = (id) => data.find((season) => season.id === id);

export default { getAll, getSeason };
