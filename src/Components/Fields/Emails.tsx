import React, { SyntheticEvent } from 'react';
import { Input } from 'semantic-ui-react';
import { ValidateEmail } from '../../Lib/Validate';

interface props {
    onChange: (value: any) => void;
    fieldValue: string;
    placeholder?: string;
}

export const Emails: React.FC<props> = ({ onChange, fieldValue, placeholder }: props) => {
    const change = (e: SyntheticEvent, d: { value: string }): void => {
        const valid = ValidateEmail(d.value);

        const inputValue = valid ? d.value : undefined;

        onChange(inputValue);
    };

    return <Input type='email' placeholder={placeholder} value={fieldValue} fluid={true} maxLength='128' onChange={change} />;
};
