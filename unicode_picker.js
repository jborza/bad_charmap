function create_unicode_picker_viewstate(block_list) {
    return {
        selected_block: undefined,
        block_list: block_list,
        picker: undefined
    }
}

const SIGNAL_BLOCK_CHANGED = "SIGNAL_BLOCK_CHANGED";

function unicode_picker_changed(vs, target) {
    let selected = get_value(vs.picker);
    raise_signal(SIGNAL_BLOCK_CHANGED, selected);
}

function unicode_picker_layout(vs, root_container) {
    let label = create_label_with_text("Unicode block:");
    add_child(root_container, label);

    let picker = create_element("select");

    for (const block of vs.block_list)
        add_child(picker, create_option(block.name));

    add_change_handler(picker, unicode_picker_changed, vs);

    add_child(root_container, picker);
    vs.picker = picker;
}

function unicode_picker_render(vs) {}