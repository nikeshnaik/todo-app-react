# CSS Design Plan Across React App


We have been writing CSS since last 5 projects, the problem that occured were when Javascript code was to be written, the css class didn't helped in anyway. It looked CSS was totally decoupled from Javascript which is good but also it creates a problem of maintainence. When Javascript is written the CSS changes more than 20% which makes us rewrite CSS again. To solve it issue, this time we will plan each component from top-down and write up with state mangement in mind. Always dev comes first.


1. Start with Top level component maybe Container, single occurence of div doesn't require seperate react component, like last time we created uselesss Container which was reused again and again but waste. 
2.  Use Inheritance, create a interface for button and use that button again to create different button with its own Event listeners. Last time we have to create a style mapping.
3. Don't create generic event handlers, we have to create components with seperate css and state.



Since its not CSS heavy project.


###### Components to design:

1. ToDo Header with Dark or Light Option
2. Input Component with Tick Mark input
3. Todo Single Item with Tick mark input
4. Todo List Container with has Multiple Todo Single Item
5. Todo Container Footer with stats


###### Animation: 
1. Animation to drag item over other
2. Input Todo Item added to List
3. Completed Cross line Todo Item


#### Theme Changing

1. Theme Change effects: 
    1. Text Color of TodoItem to white
    2. Text Color of TodoFilter to dark
    3. Text Color, TodoItem Completed text
    4. Background Color to black


