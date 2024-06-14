//                           Asynchronous Assignment

// Question # 1 

// Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.

let fetchGreeting = async (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello! How are you?")
        }, 2000);
    })
}
fetchGreeting().then((res) => {
    console.log(res);
});

//                   XXXXXXXXXXXXXXXXXXXXX

// Question # 2

// Write a function simulateTask that simulates a task by logging "Task started", waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

let simulateTask = (): void => {
    console.log("Task Started");
    setTimeout(() => {
        console.log("Task completed!");
    }, 1000);
}
simulateTask();

//                        XXXXXXXXXXXXXXXXXXXXX

// Question # 3

// Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

let fetchedData = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation! Data Fetched Successfully.")
        }, 1000);
    })
}
fetchedData().then((res) => {
    console.log(res);

});

//                        XXXXXXXXXXXXXXXXXXXXX

// Question # 4

// Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

let fetchWithError = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success=Math.random()>0.5;
            if (success) {
                resolve("Congratulation! Data Fetched Successfully.");
            } else {
                reject("Sorry! Data Fetched Failled.");
            }
        }, 1000);
    })

}
fetchWithError().then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
    
})

//                        XXXXXXXXXXXXXXXXXXXXX

// Question # 5

// Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.

let fetchData=():Promise<string>=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation! Data Fetched Successfully.");
        }, 1000);
    })

}
let processData=():Promise<string>=>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congratulation! Proccess Data Successfully.");
        }, 1000);
    })

}
let executeSequentially=async ():Promise<void>=>{
    try {
        let fetchDataResult=await fetchData();
        console.log(fetchDataResult);
        let processDataResult=await processData();
        console.log(processDataResult);
    } catch (error) {
        console.error("An error occurred:", error);
        
    }
}
executeSequentially();

//                        XXXXXXXXXXXXXXXXXXXXX