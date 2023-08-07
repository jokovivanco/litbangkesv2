const groupArray = <T>(array: T[], groupNumber: 2 | 3) => {
  const groups = [];
  for (let i = 0; i < array.length; i += groupNumber) {
    const group: T[] = [];
    for (let j = i; j < i + groupNumber; j++) {
      group.push(array[j]);
    }
    groups.push(group);
  }
  return groups;
};

export default groupArray;
