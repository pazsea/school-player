export function compareDescending(a, b) {
  const startA = new Date(a.createdAt);
  const startB = new Date(b.createdAt);
  return startA > startB ? -1 : 1;
}

export function compareAscending(a, b) {
  const startA = new Date(a.createdAt);
  const startB = new Date(b.createdAt);
  return startA < startB ? -1 : 1;
}

export function diffDays(a) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  var difference = Math.round(Math.abs((a - Date.now()) / oneDay));
  return difference;
}
export const getTerm = ({ createdAt }) => {
  const terms = [{ fe18: [1533153603000, 1559419203000] }, { fe19: [1564689603000, 1591041603000] }, { fe20: [1596312003000, 1625169603000] }]; // start + end of terms
  return terms.reduce((acc, term) => {
    const name = Object.keys(term).toString();
    const start = term[name][0];
    const end = term[name][1];

    return (!acc && createdAt > start && createdAt < end) ? name : acc;

  }, '')
}