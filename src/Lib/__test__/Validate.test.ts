import { ValidateEmail, ValidatePhone, ValidateInput, ValidateTextArea, ValidateLatLong } from '../Validate';

test('Validate Email', () => {
    expect(ValidateEmail('tyler@abc.com')).toBeTruthy();
    expect(ValidateEmail('tyler@abc.cm')).toBeTruthy();
    expect(ValidateEmail('tyler@a.bc.cm')).toBeTruthy();
    expect(ValidateEmail('tyler.@abc.cm')).toBeFalsy();
    expect(ValidateEmail(' ')).toBeFalsy();
    expect(ValidateEmail('')).toBeFalsy();
});

test('Validate Phone', () => {
    expect(ValidatePhone('123-456-7890')).toBeTruthy();
    expect(ValidatePhone('1231231231')).toBeTruthy();
    expect(ValidatePhone('123123-2310')).toBeTruthy();
    expect(ValidatePhone('123-1232310')).toBeTruthy();
    expect(ValidatePhone('123-456-789')).toBeFalsy();
    expect(ValidatePhone('123123-231')).toBeFalsy();
    expect(ValidatePhone('12-123-1234')).toBeFalsy();
    expect(ValidatePhone('123-12-1234')).toBeFalsy();
    expect(ValidatePhone('123-123-123')).toBeFalsy();
    expect(ValidatePhone('+17575333803')).toBeFalsy();
    expect(ValidatePhone('asd')).toBeFalsy();
    expect(ValidatePhone(' ')).toBeFalsy();
});

test('Validate Input', () => {
    expect(ValidateInput('My name is Smith')).toBeTruthy();
    expect(ValidateInput("Anne O'Doe-Bill Junior")).toBeTruthy();
    expect(ValidateInput('Bill-')).toBeTruthy();
    expect(ValidateInput("O'Bill")).toBeTruthy();
    expect(ValidateInput('1(2')).toBeTruthy();
    expect(ValidateInput('1)2')).toBeTruthy();
    expect(ValidateInput('$4.00')).toBeFalsy();
    expect(ValidateInput('#3')).toBeFalsy();
    expect(ValidateInput('5%')).toBeFalsy();
    expect(ValidateInput('2^16')).toBeFalsy();
    expect(ValidateInput('1&2')).toBeFalsy();
    expect(ValidateInput('1*2')).toBeFalsy();
    expect(ValidateInput(' ')).toBeFalsy();
});

test('Validate TextArea', () => {
    expect(ValidateTextArea('My very long textarea')).toBeTruthy();
    expect(ValidateTextArea(' ')).toBeFalsy();
});

test('Validate LatLong', () => {
    expect(ValidateLatLong('123.012345')).toBeTruthy();
    expect(ValidateLatLong('-123.012345')).toBeTruthy();
    expect(ValidateLatLong('-123.01')).toBeTruthy();
    expect(ValidateLatLong('181.012345')).toBeFalsy();
    expect(ValidateLatLong('-181.012345')).toBeFalsy();
});
