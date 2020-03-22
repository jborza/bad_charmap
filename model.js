fonts = ["sans-serif", "serif", "monospace"];

function create_basic_characters(max_characters) {
    const FIRST_CHARCODE = 33;
    return create_characters(FIRST_CHARCODE, 255);
}

function create_charmap_model() {
    const MAX_CHARACTERS = 255;
    return {
        characters: create_basic_characters(MAX_CHARACTERS),
        fonts: fonts,
        blocks: create_unicode_blocks()
    };
}

function create_characters(start, end){
    return [...Array(end - start).keys()].map(i => String.fromCodePoint(i + start));
}