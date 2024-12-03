/* eslint-disable @typescript-eslint/no-explicit-any */

type ISearchFilterHelper = {
    filters: any, searchAbleFields: string[], relationalFields: string[], relationalFieldsMapper: { [key: string]: string }
}


const searchingFiltering = ({ filters, searchAbleFields, relationalFields, relationalFieldsMapper }: ISearchFilterHelper) => {

    const { searchTerm, ...filterData } = filters;

    const andConditions = [];

    if (searchTerm) {
        andConditions.push({
            OR: searchAbleFields.map((field) => ({
                [field]: {
                    contains: searchTerm,
                    mode: 'insensitive'
                }
            }))
        });
    }

    if (Object.keys(filterData).length > 0) {
        andConditions.push({
            AND: Object.keys(filterData).map((key) => {
                if (relationalFields.includes(key)) {
                    return {
                        [relationalFieldsMapper[key]]: {
                            id: (filterData as any)[key]
                        }
                    };
                } else {
                    return {
                        [key]: {
                            equals: (filterData as any)[key]
                        }
                    };
                }
            })
        });
    }

    return andConditions;
};


export const SearchingFilteringHelper = {
    searchingFiltering
}