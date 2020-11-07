/* 

    Typescript = Javascript + A Type System
    TS Type System 
        1. Help us catch errors(bugs) during development
            a. The only way to catch err in JS, is to execute the code and get that error appear on the screen.
            (That's definitely not the most eff. way)  
        2. Uses 'type annotations' to analyze our code.
        3. Only active during development.
        4. JS & Node don't have any idea what TS is.
        5. Doesn't provide any performance optimization.
    sudo npm i -g typescript ts-node
    tsc --> Typescript compiler
    TS -> TS Compiler -> JS 

    VS Code Shortcuts:
        1. Add 'code' to path -> Views -> Command Palette -> 'Install code command in path'
        2. Run prettier on save => Code -> Preferences -> Settings
        3. Use single quotes with prettier
        4. Use two spaces for indentation

  #1 First App   
    * Make a n/w req to fetch some JSON 
    * Catching errors like mistakenly changing parameter positions 
    
 #2 Overview  
    1st Part: Syntax + Features
        e.g What is an interface & What is the syntax for defining an interface?
    2nd Part: Design Patterns With TS
        How do we use interfaces to write testable code
    
    Goal:
        1. Basic types in TS
        2. Function typing + annotations
        3. Type definition files
        4. Arrays in TS
        5. Modules systems
        6. Classes + Refresher on OOP
        7. Project
    
    Steps:
        1. Def + Overview
        2. Why do we care? 
        3. Examples
        4. When to use this
    
  #3 Types: Easy way to refer to the diffrent properties + functions that a value has.

    Types ---> 
        Primitive Types: number, boolean, undefined, string, void, null, symbol
        Object Types(Any types that we create of are built into the language itself): functions, classes, arrays, objects

    Question: When to use Types?
    Answer: Everywhere. Every value that we define, is going to have a type associated
    with it

  #4 Type Annotations And Inference
  Type Annotations: Code we add to tell typescript what type of value a variable will refer to
  Type Inference: Typescript tries to figure out what type of value a variable refers to   
  * We'll discuss them for variables, functions and objects

  #5 Annotations With Variables
  # Object Literal Annotations
*/