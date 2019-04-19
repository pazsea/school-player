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
