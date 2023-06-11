// Q2

setTimeout (()=>{
    console.log("1")
        setTimeout (()=>{
            console.log("2")
            setTimeout (()=>{
               console.log("3")
                    setTimeout (()=>{
                        console.log("4")
                            setTimeout (()=>{
                                 console.log("5")
                                     setTimeout (()=>{
                                         console.log("6")
                                            setTimeout (()=>{
                                                console.log("7")
                                            },7000)
                                     },6000)
                            },5000)
                    },4000)
            },3000)
       },2000)
},1000)


function printNumbersWithDelay(num, delay) {
    let counter = 1;
     return new Promise((resolve, reject) =>{
         const interval = setInterval(() => {
        console.log(counter);
          counter++;
        if (counter > num) {
             clearInterval(interval);
            resolve();
            }
         }, delay);
       });
    }
   printNumbersWithDelay(7, 1000)
   .then(() => {
         console.log("All done!");
       })
    .catch((error) => {
         console.error(error);
      });     
</pre>