const SIGNAL_CHARACTER_CLICKED = "SIGNAL_CHARACTER_CLICKED";

function create_charmap_grid_viewstate(characters) {
    return {
        characters: characters
    }
}

function character_clicked_handler(vs, target) {
    let el = target.target;
    let value = el.value;
    raise_signal(SIGNAL_CHARACTER_CLICKED, value);
}

function charmap_grid_layout(vs, root_container) {
    let container = create_container();
    set_class(container, "charmap_grid");
    set_style_wrap(container, "wrap");

    for (const character of vs.characters) {
        let button = create_element("input");
        set_attribute(button, "type", "button");
        add_click_handler(button, character_clicked_handler, vs);
        set_value(button, character);
        add_child(container, button);
    }

    add_child(root_container, container);
}

function charmap_grid_render(vs) {

}