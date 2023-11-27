
export const FirstLetterCaps = (text) => {
    // Capitalize the first letter
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

    return <span>{capitalizedText}</span>;
};