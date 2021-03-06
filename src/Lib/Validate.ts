const test = (val: string, re: RegExp): boolean => {
    return re.test(val);
};

export const ValidateEmail = (val: string) => {
    if (val === ' ') {
        return false;
    }

    return test(
        val,
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//http://regexlib.com/REDetails.aspx?regexp_id=1497
export const ValidatePhone = (val: string): boolean => {
    if (val === ' ') {
        return false;
    }

    return test(val, /^(1?)(-| ?)(\()?([0-9]{3})(\)|-| |\)-|\) )?([0-9]{3})(-| )?([0-9]{4}|[0-9]{4})$/);
};

export const ValidateInput = (val: string): boolean => {
    if (val === ' ') {
        return false;
    }

    return test(val, /^(a-z|A-Z|0-9|'|-)*[^#$%^&*]*$/);
};

export const ValidateTextArea = (val: string): boolean => {
    if (val === ' ') {
        return false;
    }

    return true;
};

export const ValidateLatLong = (val: string): boolean => {
    return test(val, /^$|^(-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6})$/);
};
