import React, { useEffect, useState } from 'react';
import { Dropdown, Loader } from 'semantic-ui-react';
import { SearchDropdown } from '../../Lib/Transform';

interface props {
    onChange: (value: any) => void;
    route: string;
    placeholder?: string;
    value?: string | string[];
    multiple?: boolean;
}

export const Lookup: React.FC<props> = ({ value, route, placeholder, multiple, onChange }: props) => {
    const [data, setData] = useState<object[]>([]);

    useEffect(() => {
        // READ(route).then((response) => {
        //     if (response) {
        //         setData(response.data);
        //     }
        // });
    }, []);

    if (data.length === 0) {
        return <Loader active inline='centered' />;
    }

    return (
        <Dropdown
            clearable
            search
            selection
            value={value !== undefined ? value : multiple ? [] : ''}
            fluid={true}
            options={SearchDropdown(data, '_id', 'name', 'name')}
            placeholder={placeholder}
            onChange={(e, { value }) => onChange(value)}
            multiple={multiple}
        />
    );
};
