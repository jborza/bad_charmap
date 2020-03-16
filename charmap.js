function create_charmap_viewstate(model) {
    return {
        model: model,
        container: undefined,


    }
}

function charmap_layout(vs) {
    vs.container = create_container();
    let title = create_element("h1");
    set_text_content(title, "charmap");
    add_child(vs.container, title);

    let font_picker_container = create_container();
    set_style_background(font_picker_container, "yellow");
    let font_picker_vs = create_font_picker_viewstate(vs.model.fonts);
    font_picker_layout(font_picker_vs, font_picker_container);
    add_child(vs.container, font_picker_container);

    add_child(get_root(), vs.container);
}

function charmap_render(vs) {

}