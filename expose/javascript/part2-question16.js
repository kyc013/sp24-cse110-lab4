for (let key in statistics) {
    let value = statistics[key];
    if (key[0] === 'r' || value % 2 !== 0) {
        console.log(value);
    }
}
