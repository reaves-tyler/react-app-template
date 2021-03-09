// import React, { SyntheticEvent } from 'react';
// import { TextArea, Form } from 'semantic-ui-react';
// import { ValidateTextArea } from '../../Lib/Validate';

// interface props {
//     onChange: (value: any) => void;
//     fieldValue: string | number | object; // Can take primitive or complex value
//     placeholder?: string;
//     maxLength?: number;
//     required?: boolean;
//     rows?: number;
//     onKeyDown?: (e: SyntheticEvent, index: number, oid: string) => void;
//     header?: string;
//     edit?: boolean;
// }

// export const TextAreas: React.FC<props> = ({
//     fieldValue,
//     onChange,
//     placeholder,
//     maxLength = 3000,
//     required,
//     rows,
//     onKeyDown,
//     header,
//     edit = true,
// }: props) => {
//     const change = (e: SyntheticEvent, d: { value: string }): void => {
//         const valid = ValidateTextArea(d.value);
//         const inputValue = valid ? d.value : undefined;

//         if (typeof fieldValue === 'object') {
//             onChange({ ...fieldValue, value: inputValue });
//         } else {
//             onChange(inputValue);
//         }
//     };
//     const display = !edit && !fieldValue;

//     if (edit || display) {
//         return (
//             <Form>
//                 {header && <strong aria-required={required}>{placeholder}</strong>}
//                 <TextArea
//                     placeholder={placeholder}
//                     value={fieldValue?.['value'] || fieldValue}
//                     disabled={display}
//                     maxLength={maxLength}
//                     onChange={change}
//                     rows={rows}
//                     onKeyDown={onKeyDown}
//                 />
//             </Form>
//         );
//     }
//     return <span style={{ overflowWrap: 'anywhere' }}>{fieldValue}</span>;
// };
