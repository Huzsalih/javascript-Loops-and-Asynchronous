function printObjectProperties(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Value: ${obj[key]}`);
        }
    }
}

const Me = {
    name: "Huzeyfa",
    age: 25,
    occupation: "Front-end developer"
};

printObjectProperties(Me);

