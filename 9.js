function well(x){
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
        count++;
        if (count == 3)
      break;
    } 
  }
  return [ 'Fail!', 'Publish!', 'Publish!','I smell a series!'] [count]
}