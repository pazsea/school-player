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

// var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
// var firstDate = new Date(2008,01,12);
// var secondDate = new Date(2008,01,22);

// var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
