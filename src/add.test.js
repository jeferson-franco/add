const solution = require('./add.js');

test('test 1', () => {
    expect(solution(1, 2)).toBe(3);
});

test('test 2', () => {
    expect(solution(0, 1000)).toBe(1000);
});

test('test 3', () => {
    expect(solution(2, -39)).toBe(-37);
});

test('test 4', () => {
    expect(solution(99, 100)).toBe(199);
});

test('test 5', () => {
    expect(solution(-100, 100)).toBe(0);
});

test('test 6', () => {
    expect(solution(-1000, -1000)).toBe(-2000);
});
