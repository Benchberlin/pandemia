function infected(s) {
  newArr = s.split("X");
  let infected = 0;
  let all = 0;
  // console.log(all)
  for (let i = 0; i < newArr.length; i++) {
    all += newArr[i].length;
    if (newArr[i].includes(1)) {
      infected += newArr[i].length;
      // console.log(infected)
      // console.log(all)
    }
  }
  if (all === 0) {
    return 0;
  } else {
    return (infected / all) * 100;
  }
}

infected("X00X000000X10X0100");

// 73.33333333333333
