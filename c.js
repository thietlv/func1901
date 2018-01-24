function getLog() {
    return console.log;
}

// console.log(getLog());
getLog()(5);
