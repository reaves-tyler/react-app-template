import { SwitchMonthDay, FormatDate } from '../Date';

test('Switch Month Day', () => {
    expect(SwitchMonthDay('')).toBe('');
    expect(SwitchMonthDay('Apr 10 2020')).toBe('10 Apr 2020');
    expect(SwitchMonthDay('06/15/2020', '/')).toBe('15/06/2020');
    expect(SwitchMonthDay('06-15-2020', '-')).toBe('15-06-2020');
});

test('Format JSON Date', () => {
    expect(FormatDate('')).toBe('');
    expect(FormatDate('2020-10-21T04:00:00.000Z')).toBe('21 Oct 2020');
});
