let data=[];
 while (true) {
  let input= prompt("Enter text or (number or type 'stop' to exit):");
   data.push(input);
  if (input==='stop') {
     break;
  }
    console.log("total number:", data.length);
  
}
console.log("list:", data);
console.log("total number:", data.length);

