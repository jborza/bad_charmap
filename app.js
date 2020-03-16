function main() {
    let model = create_charmap_model();
    let charmap_viewstate = create_charmap_viewstate(model);
    charmap_layout(charmap_viewstate);
    charmap_render(charmap_viewstate);
}

main();