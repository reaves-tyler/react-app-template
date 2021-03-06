import { SingleGroup, ReduceObject, SearchDropdown } from '../Transform';

test('SingleGroup()', () => {
    const data = [
        {
            id: 'LIBRARYDATA-1',
            name: 'Country',
            number_items: 245,
            section: 'system',
        },
        {
            id: 'LIBRARYDATA-2',
            name: 'Country',
            number_items: 245,
            section: 'dataproduct',
        },
        {
            id: 'LIBRARYDATA-3',
            name: 'Country',
            number_items: 245,
            section: 'user',
        },
    ];
    const result = {
        system: [
            {
                id: 'LIBRARYDATA-1',
                name: 'Country',
                number_items: 245,
                section: 'system',
            },
        ],
        dataproduct: [
            {
                id: 'LIBRARYDATA-2',
                name: 'Country',
                number_items: 245,
                section: 'dataproduct',
            },
        ],
        user: [
            {
                id: 'LIBRARYDATA-3',
                name: 'Country',
                number_items: 245,
                section: 'user',
            },
        ],
    };

    expect(SingleGroup(data, 'section')).toStrictEqual(result);
});

test('SearchDropdown()', () => {
    const data = [
        {
            id: 'LIBRARYDATA-1',
            name: 'Country',
            number_items: 245,
            section: 'system',
        },
        {
            id: 'LIBRARYDATA-2',
            name: 'Country',
            number_items: 245,
            section: 'dataproduct',
        },
    ];
    const result = [
        { key: 'LIBRARYDATA-1', value: 'LIBRARYDATA-1', text: 'Country' },
        { key: 'LIBRARYDATA-2', value: 'LIBRARYDATA-2', text: 'Country' },
    ];

    expect(SearchDropdown(data, 'id', 'id', 'name')).toStrictEqual(result);
});

test('ReduceObject()', () => {
    const data = {
        id: 'LIBRARYDATA-1',
        name: 'Country',
        number_items: 245,
        section: 'system',
    };
    const result = { id: 'LIBRARYDATA-1', section: 'system' };

    expect(ReduceObject(data, ['id', 'section'])).toStrictEqual(result);
});
