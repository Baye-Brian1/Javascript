 let prime=[];
for(let i=2;i<=1000;i++){
  let count=0;
for(let j=2; j<=Math.sqrt(i); j++){
  if (i%j==0){
    count++
  }
}
 if (count==0) {
  prime.push(i);
 } 
}
console.log(prime);
console.log(prime.length);