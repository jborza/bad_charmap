# a bad web framework

Exploring how a web application (a showcase character map application) would look like if it happened to be driven by a C-style procedural programming. 

Supports unicode block selection from the Basic Multilingual Plane.

That means giving up on OOP-oriented API, using struct-like objects and global variables to track state.

TODO:
- add libunistring and its unicode_character_name() function (ǚ: latin small letter u with diaraesis and caron)
- add search functionality