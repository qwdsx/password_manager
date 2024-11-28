
export const stringMaxCharacters = (str: string) => {
    if (str.length < 15) return str;

    return str.slice(0, 15) + "..";
}