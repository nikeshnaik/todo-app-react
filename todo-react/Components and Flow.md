##### Components


1. ToDo Item
2. ToDo List wrapped by div container
3. InputBox
4. ToDo FilterBox
5. ToDo Header
6. ToDo Layout



App.js  --> ToDo Main Layout --> ToDo Header --> InputBox --> ToDo List  wrapped by Container --> ToDo Items --> ToDo FilterBox



1. ToDo Main Layout with init State
2. Header will get state theme value
3. Most of Background theme update and color updates must include in ToDo Layout
4. InputBox will only get setState
5. ToDo List Container will be empty first and iterate state todo list and create ToDo Items.
6. Also Hover effect, cross sign.
7. ToDo List will only get state and no setState.
8. Each Todo Item will have event handler which adds blue tick mark on click and line through.
9. ToDo FilterBox will have state and setState. 
10.  Drag and drop to reorder items on the list



Main part is Theme Update across App. Isolate theme attached CSS into a class.