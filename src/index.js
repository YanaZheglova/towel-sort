
// You should implement your task here.
//нечетные подмассивы по возрастанию, а четные - по убыванию нечетные подмассивы по возрастанию, а четные - по убыванию 

module.exports = function towelSort (matrix) {
    if (!matrix) return []

    return matrix.reduce((accumulator, element, index) => {
        if (index % 2 == 0) accumulator.push(...element)
        else accumulator.push(...element.reverse())
        return accumulator
    }, [])
};
