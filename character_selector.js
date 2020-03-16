//replace character_selector with component name

function create_character_selector_viewstate() {
    return {
        selected_character: undefined
    }
}

function character_selector_layout(vs, root_container) {
    let container = create_container();
    let selector_label = create_label_with_text("Selected character");
    add_child(container, selector_label);

    let value_container = create_container();
    let value_label = create_label_with_text("Glyph:");
    add_child(value_container, value_label);
    let selected_input = create_input();
    add_child(value_container, selected_input);
    add_child(container, value_container);

    let code_container = create_container();
    let code_label = create_label_with_text("Code:");
    add_child(code_container, code_label);
    let code_input = create_input();
    add_child(code_container, code_input);
    add_child(container, code_container);

    //TODO add description

    add_child(root_container, container);
}

function character_selector_render(vs) {
    //U+0123 + description
}