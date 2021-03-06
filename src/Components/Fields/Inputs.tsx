import React, { SyntheticEvent } from 'react';
import { Input } from 'semantic-ui-react';
import { ValidateInput } from '../../Lib/Validate';

interface props {
    onChange: (value: any) => void;
    fieldValue: string | number | object; // Can take primitive or complex value
    placeholder?: string;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    error?: boolean;
    type?: string;
}

export const Inputs: React.FC<props> = ({
    onChange,
    minLength,
    fieldValue,
    placeholder,
    maxLength = 128,
    type = 'text',
    disabled = false,
}: props) => {
    const change = (e: SyntheticEvent, d: { value: string }): void => {
        let valid = ValidateInput(d.value);

        if (d.value.length < minLength) {
            valid = false;
        }

        const inputValue = valid ? d.value : undefined;

        // Hooks
        // const [field, setField] = useState<object>({value: undefined, classification: {marking: '', _id: ''}})
        // <Inputs value={field} onChange={setField} placeholder="Enter a Title!" />
        // Check for Complex Object {value: '', classification: {}, .. ,}
        if (typeof fieldValue === 'object') {
            onChange({ ...fieldValue, value: inputValue });
        } else {
            // Non-Complex object values (Portion Marking)
            onChange(inputValue);
        }
    };

    return (
        <Input
            placeholder={placeholder}
            value={fieldValue?.['value'] || fieldValue}
            disabled={disabled}
            fluid={true}
            maxLength={maxLength}
            onChange={change}
            type={type}
        />
    );
};
