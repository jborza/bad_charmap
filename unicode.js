function create_unicode_blocks(){
    return [
        {'name':"Basic Latin",'range': [0, 0x7f]},
        {'name':"Latin-1 Supplement",'range': [0x80, 0xff]},
        {'name':"Latin Extended-A", 'range': [0x100, 0x17f]},
        {'name':"Latin Extended-B", 'range': [0x180, 0x24f]}
    ]
}