fonts = ["Arial", "Times New Roman", "Courier New", "Comic Sans MS"];

function create_characters(max_characters) {
    const FIRST_CHARCODE = 33;
    return [...Array(max_characters - FIRST_CHARCODE).keys()].map(i => String.fromCharCode(i + FIRST_CHARCODE));
}

function create_charmap_model() {
    const MAX_CHARACTERS = 255;
    return {
        characters: create_characters(MAX_CHARACTERS),
        fonts: fonts
    };
}