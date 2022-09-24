const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(1)
    const expected = 1 * 127.9; 
    expect(fromDollarToYen(1)).toBe(127.9);
})

test("One yen should be .08", function(){
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(1)
    const expected = 1 * 0.8; 
    expect(fromYenToPound(1)).toBe(0.8);
})