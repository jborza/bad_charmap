//replace character_selector with component name

function create_character_selector_viewstate() {
    return {
        selected_character: undefined,
        code_input: undefined,
        glyph_input: undefined
    }
}

function on_character_clicked(vs, parameters) {
    console.log("on_character_clicked", parameters);
    vs.selected_character = parameters;
    character_selector_render(vs);
}

function character_selector_layout(vs, root_container) {
    let container = create_container();
    let selector_label = create_label_with_text("Selected character");
    add_child(container, selector_label);

    let value_container = create_container();
    let value_label = create_label_with_text("Glyph:");
    add_child(value_container, value_label);
    vs.glyph_input = create_input();
    add_child(value_container, vs.glyph_input);
    add_child(container, value_container);

    let code_container = create_container();
    let code_label = create_label_with_text("Code:");
    add_child(code_container, code_label);
    vs.code_input = create_input();
    add_child(code_container, vs.code_input);
    add_child(container, code_container);

    //TODO add description

    add_child(root_container, container);

    connect_signal(SIGNAL_CHARACTER_CLICKED, on_character_clicked, vs);
}

function hexcode(str) {
    return str.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0');
}

function character_selector_render(vs) {
    //U+0123 + description
    set_value(vs.glyph_input, vs.selected_character);
    let code = "U+" + hexcode(vs.selected_character)
    set_value(vs.code_input, code);
}