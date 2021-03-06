export const DeepCopy = (d: object[] | object) => {
    return JSON.parse(JSON.stringify(d));
};

// https://stackoverflow.com/a/34890276
export const SingleGroup = (json: object[], key: string) => {
    return json.reduce((rv: { [x: string]: any[] }, x: { [x: string]: string | number }) => {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

/* Array using index as key and value as value */
export const SimpleDropdown = (data: string[], obj: boolean = false) => {
    const temp = [];

    if (obj) {
        data = Object.keys(data);
    }

    for (const i in data) {
        temp.push({ key: i, value: data[i], text: data[i] });
    }

    return temp;
};

/* Array of objects with properties */
export const SearchDropdown = (data: object[], key: string, val?: string, text?: string | ((i: object) => {})) => {
    if (!val) val = key;
    if (!text) text = key; // TODO: Should this be text = val because Lookup base class uses (d, "_id", "name", "name")

    const temp = [];

    for (const i of data) {
        temp.push({
            key: i[key],
            value: typeof val === 'object' ? i : i[val],
            text: typeof text === 'function' ? text(i) : i[text],
        });
    }

    return temp;
};

export const ReduceObject = (obj: { [x: string]: any }, fields: string | string[]) => {
    const temp = new Object();

    for (const field in obj) {
        if (fields.includes(field)) {
            temp[field] = obj[field];
        }
    }

    return temp;
};
