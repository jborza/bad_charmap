const SIGNAL_CHARACTER_CLICKED = "SIGNAL_CHARACTER_CLICKED";

function create_charmap_grid_viewstate(characters, blocks) {
    return {
        characters: characters,
        container: undefined,
        selected_block: blocks.find(b=>b.name === 'Basic Latin'),
        blocks: blocks
    }
}

function on_font_changed(vs, parameters) {
    console.log('on font changed', parameters);
    let font = parameters;
    set_style_font_family(vs.container, font);
}

function on_block_changed(vs, parameters) {
    console.log('on block changed', parameters);
    let block = parameters;
    vs.selected_block = vs.blocks.find(b=>b.name === block);
    charmap_grid_render(vs);
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

    add_child(container, create_label_with_text("Change my text!"));
    vs.container = container;
    add_child(root_container, vs.container);

    connect_signal(SIGNAL_FONT_CHANGED, on_font_changed, vs);
    connect_signal(SIGNAL_BLOCK_CHANGED, on_block_changed, vs);

    charmap_grid_render(vs);
}

function charmap_grid_render(vs) {
    clear_children(vs.container);
    let [start, end] = vs.selected_block.range;
    let characters = create_characters(start, end);
    for (const character of characters) {
        let button = create_element("input");
        set_attribute(button, "type", "button");
        add_click_handler(button, character_clicked_handler, vs);
        set_value(button, character);
        add_child(vs.container, button);
    }
}