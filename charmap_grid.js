function create_charmap_grid_viewstate(characters) {
    return {
        characters: characters
    }
}

function charmap_grid_layout(vs, root_container) {
    let container = create_container();
    set_class(container, "charmap_grid");
    set_style_wrap(container, "wrap");

    for (const character of vs.characters) {
        let button = create_element("input");
        set_attribute(button, "type", "button");
        set_value(button, character);
        add_child(container, button);
    }

    add_child(root_container, container);
}

function charmap_grid_render(vs) {

}