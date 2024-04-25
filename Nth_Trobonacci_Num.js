let fun1 = (n) =>{
  let t = Array(n+1).fill(0);
  t[1] = 1;
  t[2] = 1;
  for(let i=3;i<=n;i++){
    t[i] = t[i-1] + t[i-2] + t[i-3];
  }

  return t[n];
  
}

console.log(fun1(1))
