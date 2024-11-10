import correctNumber from "../index";

test('проверка номера, который начинается с 8', () => {
    const number = '8 (927) 000-00-00';
    const result = correctNumber(number);
    expect(result).toBe('+79270000000')
})

test('проверка номера, который начинается с +7', () => {
    const number = '+7 960 000 00 00 ';
    const result = correctNumber(number);
    expect(result).toBe('+79600000000')
})

test('проверка китайского номера', () => {
    const number = '+86 000 000 0000';
    const result = correctNumber(number);
    expect(result).toBe('+860000000000')
})