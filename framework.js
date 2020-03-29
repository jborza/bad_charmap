function create_element(el) {
    return document.createElement(el);
}

function create_container() {
    return create_element("div");
}

function create_label() {
    return create_element("span");
}

function create_label_with_text(text) {
    let el = create_label();
    set_text_content(el, text);
    return el;
}

function create_input() {
    return create_element("input");
}

function create_button(){
    let el = create_input();
    set_attribute(el, "type", "button");
    return el;
}

function create_option(value) {
    let option = create_element("option");
    set_attribute(option, "value", value);
    set_text_content(option, value);
    return option;
}

function set_attribute(el, attr, val) {
    el.setAttribute(attr, val);
}

function set_class(el, className) {
    el.className = className;
}

function add_child(el, child) {
    el.appendChild(child);
}

function set_text_content(el, body) {
    el.textContent = body;
}

function set_value(el, value) {
    el.value = value;
}

function get_value(el) {
    return el.value;
}

function get_attribute(el, attr) {
    return el.get_attribute(attr);
}

function set_element_visible(el, visible) {
    el.hidden = !visible;
}

function add_click_handler(el, handler, viewstate) {
    var wrapped_handler = curry(handler, viewstate);
    el.onclick = wrapped_handler;
}

function add_double_click_handler(el, handler, viewstate) {
    var wrapped_handler = curry(handler, viewstate);
    el.ondblclick = wrapped_handler;
}

function add_change_handler(el, handler, viewstate) {
    var wrapped_handler = curry(handler, viewstate);
    el.onchange = wrapped_handler;
}

function set_checkbox_checked(el, checked) {
    el.checked = checked;
}

function get_checkbox_checked(el) {
    return el.checked;
}

function set_style(el,style,value){
    el.style[style] = value;
}

function set_style_textdecoration(el, value) {
    el.style.textDecoration = value;
}

function set_style_fontweight(el, value) {
    el.style.fontWeight = value;
}

function set_style_background(el, value) {
    el.style.background = value;
}

function set_style_wrap(el, value) {
    el.style.display = "flex";
    el.style.flexWrap = value;
}

function set_style_width(el, value) {
    el.style.width = value;
}

function set_style_height(el, value) {
    el.style.width = value;
}

function set_style_font_family(el, value) {
    el.style.fontFamily = value;
}

function set_style_font_size(el, value){
    el.style.fontSize = value;
}

function get_rule(selector_name){
    for (const rule of document.styleSheets[0].cssRules){
        if(rule.selectorText == selector_name){
            return rule;
        }
    }
    return undefined;
}

function update_style(selector_name, style, value){
    const css_rule = get_rule(selector_name);
    css_rule.style[style] = value;
}

function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function get_root() {
    return document.getElementById("app");
}

signal_map = {};

function raise_signal(signal, data) {
    console.log('Raised signal:', signal, " data:", data);
    if(!(signal in signal_map))
        return;
    for(const func of signal_map[signal]){
        func(data);
    }
}

function connect_signal(signal, handler, target_viewstate) {
    var wrapped_handler = curry(handler, target_viewstate);
    if(!(signal in signal_map))
        signal_map[signal] = [];
    signal_map[signal].push(wrapped_handler);
}

function clear_children(el) {
    el.innerHTML = '';
}