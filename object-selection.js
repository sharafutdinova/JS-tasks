const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }];

const getWorthyWorkers = workersArr => {
    const worthWorkers = [];
    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            worthWorkers.push(currentWorker.name);
        }
    });

    return worthWorkers;
}

console.log(getWorthyWorkers(workers))