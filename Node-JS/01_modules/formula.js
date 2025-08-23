// Function for Add() & Sub()
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// One Line Export Anonymous Function
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

// Export Multiple Things
module.exports = { add, sub }

// Export Single Thing But Override
// module.exports = add;
// module.exports = sub;