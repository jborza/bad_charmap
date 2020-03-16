fonts = ["Arial", "Times New Roman", "Courier New", "Comic Sans MS"];

function create_characters(max_characters) {
    const FIRST_CHARCODE = 32;
    return [...Array(max_characters - FIRST_CHARCODE)].map(i => String.fromCharCode(i + FIRST_CHARCODE));
}

function create_charmap_model() {
    const MAX_CHARACTERS = 255;
    return {
        characters: create_characters(MAX_CHARACTERS)
    };
}