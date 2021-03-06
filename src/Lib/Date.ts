export const SwitchMonthDay = (date: string, delim: string = ' '): string => {
    if (!date) {
        return '';
    }

    const temp = date.split(delim);
    return [temp[1], temp[0], temp[2]].join(delim);
};

export const FormatDate = (json: string): string => {
    if (!json) {
        return '';
    }

    json = new Date(json).toDateString();
    const arr = json.split(' ');
    arr.splice(0, 1);
    json = arr.join(' ');

    return SwitchMonthDay(json);
};
