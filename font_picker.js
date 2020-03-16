function create_font_picker_viewstate(font_list) {
    return {
        font: undefined,
        font_list: font_list,
        picker: undefined
    }
}

const SIGNAL_FONT_CHANGED = "SIGNAL_FONT_CHANGED";

function font_picker_changed(vs, target) {
    let selected_font = get_value(vs.picker);
    raise_signal(SIGNAL_FONT_CHANGED, selected_font);
}

function create_option(font) {
    let option = create_element("option");
    set_attribute(option, "value", font);
    set_text_content(option, font);
    return option;
}

function font_picker_layout(vs, root_container) {
    let label = create_label();
    set_text_content(label, "Font:");
    add_child(root_container, label);

    let picker = create_element("select");
    set_attribute(picker, "name", "font");

    //create options
    for (font of vs.font_list)
        add_child(picker, create_option(font));

    add_change_handler(picker, font_picker_changed, vs);

    add_child(root_container, picker);
    vs.picker = picker;
}

function font_picker_render(vs) {}