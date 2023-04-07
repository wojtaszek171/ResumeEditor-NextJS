import { StringValue } from "../store/cvDetails/types";

export const useCVTranslation = (value: StringValue | undefined) => {
    const language = 'en-us';

    if (!value)
        return '';

    const valCopy = { ...value };
    delete valCopy.id;
    
    if (!Object.keys(value).length)
        return '';

    if (!language?.length) {
        return value[Object.keys(valCopy)[0]]
    }

    return value[language] || '';
};

export default useCVTranslation;
