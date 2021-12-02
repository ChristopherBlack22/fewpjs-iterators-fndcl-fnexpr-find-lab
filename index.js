function superbowlWin(record) {   
    const winningYear = record.find(object => object.result === "W");
    if (winningYear) {
        return winningYear.year
    }
    else {
        return undefined
    }
}

