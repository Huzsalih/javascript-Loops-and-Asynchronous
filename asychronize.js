function printWithDelay(arr) {
    arr.forEach((str, index) => {
        setTimeout(() => {
            console.log(str);
        }, index * 1000);
    });
}

const strings = ["Hello", "This", "Is", "Delayed", "Example"];
printWithDelay(strings);

