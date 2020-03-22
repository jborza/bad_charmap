//replace character_selector with component name

function create_character_selector_viewstate() {
    return {
        selected_character: undefined,
        code_input: undefined,
        glyph_input: undefined
    }
}

function on_character_clicked(vs, parameters) {
    vs.selected_character = parameters;
    character_selector_render(vs);
}

function on_font_changed_selector(vs, parameters) {
    let font = parameters;
    set_style_font_family(vs.glyph_input, font);
}

function character_selector_layout(vs, root_container) {
    let container = create_container();

    let value_container = create_container();
    let value_label = create_label_with_text("Selected glyph:");    
    add_child(value_container, value_label);
    vs.glyph_input = create_container();
    set_style(vs.glyph_input, "padding", "16px");
    set_style_font_size(vs.glyph_input, '48px');
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
    connect_signal(SIGNAL_FONT_CHANGED, on_font_changed_selector, vs);
}

function hexcode(str) {
    return str.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
}

function character_selector_render(vs) {
    //U+0123 + description
    set_text_content(vs.glyph_input, vs.selected_character);
    let code = "U+" + hexcode(vs.selected_character)
    set_value(vs.code_input, code);
}