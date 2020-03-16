function create_charmap_viewstate(model) {
    return {
        model: model,
        container: undefined,


    }
}

function on_font_changed(vs, parameters) {
    console.log('on font changed', parameters);
}

function charmap_layout(vs) {
    vs.container = create_container();
    let title = create_element("h1");
    set_text_content(title, "charmap");
    add_child(vs.container, title);

    let font_picker_container = create_container();
    set_style_background(font_picker_container, "#404040");
    let font_picker_vs = create_font_picker_viewstate(vs.model.fonts);
    font_picker_layout(font_picker_vs, font_picker_container);
    add_child(vs.container, font_picker_container);
    connect_signal(SIGNAL_FONT_CHANGED, on_font_changed, vs);

    let charmap_grid_container = create_container();
    set_style_background(charmap_grid_container, "#400050");
    let charmap_grid_vs = create_charmap_grid_viewstate(vs.model.characters);
    charmap_grid_layout(charmap_grid_vs, charmap_grid_container);
    add_child(vs.container, charmap_grid_container);

    let character_selector_container = create_container();
    set_style_background(character_selector_container, "#505000");
    let character_selector_vs = create_character_selector_viewstate();
    character_selector_layout(vs, character_selector_container);
    add_child(vs.container, character_selector_container);

    add_child(get_root(), vs.container);
}

function charmap_render(vs) {

}