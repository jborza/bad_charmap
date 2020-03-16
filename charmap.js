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



    add_child(get_root(), vs.container);
}

function charmap_render(vs) {

}