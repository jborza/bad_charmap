const SIGNAL_CHARACTER_CLICKED = "SIGNAL_CHARACTER_CLICKED";

function create_charmap_grid_viewstate(characters) {
    return {
        characters: characters,
        container: undefined
    }
}

function on_font_changed(vs, parameters) {
    console.log('on font changed', parameters);
    let font = parameters;
    set_style_font_family(vs.container, font);
}

function character_clicked_handler(vs, target) {
    let el = target.target;
    let value = el.value;
    raise_signal(SIGNAL_CHARACTER_CLICKED, value);
}

function charmap_grid_layout(vs, root_container) {
    let container = create_container();
    set_class(container, "charmap_grid");
    set_style_font_family(container, "Courier");
    set_style_wrap(container, "wrap");

    for (const character of vs.characters) {
        let button = create_element("input");
        set_attribute(button, "type", "button");
        add_click_handler(button, character_clicked_handler, vs);
        set_value(button, character);
        add_child(container, button);
    }

    add_child(container, create_label_with_text("Change my text!"));
    vs.container = container;
    add_child(root_container, vs.container);

    connect_signal(SIGNAL_FONT_CHANGED, on_font_changed, vs);
}

function charmap_grid_render(vs) {

}