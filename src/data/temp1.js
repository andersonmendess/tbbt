import temp1 from "./movies.json";


const getAll = () => temp1;

const getSeason = (id) => temp1.find((season) => season.id === id);

export { getAll, getSeason };
