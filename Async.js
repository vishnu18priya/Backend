const { reject } = require("async");

function getuserdetails(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({userroll: "678"})
        }, 2000);
    })
};
function getUserSubjects(userroll){
    return new Promise((resolve, reject)=>{
        console.log()
    })
}
const myfun=async()=>{
    console.log("123")
    const result=await getuserdetails("123");
    console.log(result);
    console.log("456")
};
myfun();