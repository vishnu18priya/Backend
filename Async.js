
function getuserdetails(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({userroll: "678"})
        }, 2000);
    })
};
console.log("start");
const myfun=async()=>{
    console.log("123")
    const result=await getuserdetails("123");
    console.log(result);
    console.log("456")
};
myfun();