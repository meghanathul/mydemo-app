## What is Virtual DOM
- when ever we run our html file in console then it create atree like structure.
- which is DOM a real dom.
- but in case of react it create two copies of it which is VIRTUAL DOM.(fresh copy & dirty copy)
- when ever we do some changes then it get change in dirty copy then it get compare with the
fresh copy if any change is occure then the change is get executed in the real dom this process we called re-con-ci-li-ation.
(it meance in react the change is not get executed direct to the DOM)

[In simple words, virtual DOM is just a copy of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM. 
This process is called Reconciliation. Virtual DOM has the same properties that of the Real DOM, but it lacks the power to directly change the content of the screen.
Think of Virtual DOM as the blueprint of a machine, changes made to the blueprint doesn't reflects on the machine itself.
So when there is a update in the virtual DOM, react compares the virtual DOM with a snapshot of the virtual DOM taken right before the update of the virtual DOM.
With the help of this comparison React figures out which components in the UI needs to be updated. This process is called diffing. The algorithm that is used for the diffing process is called as the diffing algorithm. Once React knows which components has been updated, then it replaces the original DOM nodes with the updated DOM node]

[Frequent DOM manipulations are expensive.
Virtual DOM is a virtual representation of DOM in memory.
Virtual DOM is synced with real DOM with ReactDOM library. This process is called Reconciliation.
React compares the Virtual DOM and pre-updated Virtual DOM and only marks the sub-tree of components that are updated. This process is called diffing.
The algorithm behind diffing is called Diffing algorithm.
React uses keys to avoid unnecessary re-render.
]
## What is SPA
- A Single Page Application is a web application or website that interacts with the web browser by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.

This means that the URL of your website will not change completely (page will not reload), instead it will keep getting content and rewriting the DOM with it instead of loading a new page.

The goal is faster transitions that make the website feel more like a native app.
When building your react-app, you can see that there is only one App.js from where your entire web-app is loaded in fragments and components. This behaviour of rendering components and pages on a single page and changing the DOM( is a single page behaviour and hence the name), instead of loading a new page with new content, 
this makes it feel like a single application.

## What is difference between class and functional component
- 
## What does mean by state and its use in react?
- state is built-in react object that is used to contain data or information
about the component.
- a component state can change over time,whenever it change the component
re-render.
[State is a plain JavaScript object used by React to represent an information about the component’s current situation. It’s managed in the component (just like any variable declared in a function). The difference is while a “normal” variable “disappears” when their function exits, the state variables are preserved by React.

The correct usage of State implicates that one does not apply changes directly to the state variable, since this won’t be considered a change by React. Instead we should go through this using setState() which is the function that schedules updates to state objects.
However, setState() does not always immediately update the component. It may batch or defer the update until later. This makes reading this.state right after calling setState() a potential pitfall.
As a matter of fact, setState() is asynchronous. One can’t expect to call setState() on one line and assume the state has been updated on the next line.
The reason is that setState() is a mere request to update state rather than an immediate command to update it.]

## What is JSX and why do we use it instead of js?
- combination of html and js  
- it is easier to understand.
- it follos XML rule(babel transpiler convert to jsx into normal javascript code).
faster than regular javascript

[Ans - JSX stands for JavaScript XML. It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). 
It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript. JSX produces react elements.
JSX follows XML rule.
 After compilation, JSX expressions become regular JavaScript function calls. 
 JSX uses camelcase notation for naming HTML attributes.
JSX can easily convert HTML tags to react elements. It is faster than regular JavaScript and allows us to put HTML elements in DOM without using appendChild() or createElement() method.
JSX throws an error if the HTML is not correct. In JSX HTML code must be wrapped in one top-level element otherwise it will give an error]

## Routing Implementation 

## Is react library or frameworks?
* LIBRARY
-dont provide section to write.
-u need to install reqiure library.
-u control the flow the execution.
-code call the library.

* FRAMEWORK
-fromework provide section to wtite.
- combination of library
- framework controle the flow of application.
- framework call the code.
- framework is a software which we use to crete software application.
# ----------------------------------------------------------------------------------------------#
## what is difference between react and react native?which one is library or framework.
- Short answer is that react-native builds mobile apps for iOS, Android, and Windows Mobile that you can compile and put in the app stores for users to install. Reactjs is for building web pages for use in a web browser
* REACT.JS
- ReactJS is a JavaScript library, supporting both front-end web and being run on a server, for building user interfaces and web applications. It follows the concept of reusable components.

* REACT-NATIVE
- React Native is a mobile framework that makes use of the JavaScript engine available on the host, allowing you to build mobile applications for different platforms (iOS, Android, and Windows Mobile) in JavaScript that allows you to use ReactJS to build reusable components and communicate with native components
## what is package name ure using for routing.
- npm install react-router-dom
- react-router ->(react-router-dom and react-router-native)

## what is package.json
- The package. json file is the heart of any Node project. 
-It records important metadata about a project which is required before publishing to NPM,
and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

## how do u pass data from one component to another
- For passing the data from the child component to the parent component, we have to create a callback function in the parent component and then pass the callback function to the child component as a prop. This callback function will retrieve the data from the child component.

## how do u pass data from parent to child.
- In the parent component, create a callback function. ...
Pass the callback function to the child as a props from the parent component.
The child component calls the parent callback function using props and passes the data to the parent component.

## what is lazy loading in react.
- In essence, lazy loading means that a component or a part of code must get loaded when it is required. 
- It is also referred to as code splitting and data fetching .
- Talking about React specifically, it bundles the complete code and deploys all of it at the same time.

## what is an event in react.
- An event is an action that could be triggered as a result of the user action or system generated event. 
- For example:
    a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.

# -------------------------------------------------------------------------------#

## Difference b/w Statefull and stateless Component
- 
## How do you switch one component to another
## Difference between Axios and fetch
- To send data, fetch() uses the body property for a post request to send data to the endpoint, while Axios uses the data property
- The data in fetch() is transformed to a string using the JSON.stringify method
Axios automatically transforms the data returned from the server,
- but with fetch() you have to call the response.json method to parse the data to a JavaScript object.
With Axios, the data response provided by the server can be accessed with in the data object, while for the fetch() method, the final data can be named any variable
## What are React Life cycles Explain each one with Example
## What is UseState Hook ?(Implementation)
## What is useEffect Hook ?(Implementation)
## What is UseReducer Hook ?(Implementation)
- used for complex state variable or non-primitive data it schould be used when the state is getting unmanagable within the component.
- it will take two parameter (initial state and reducer function)
-and it return two value as state and distpatc.
- this state variable can be use to access all the value and to update any state value 
u will have to distpatch an action which take one argument which will be the object having key value pair(type and payload)
reducer function:

## -----------------------------------------------------------------------------------------------------------------#
## What is UseMemo Hook ?(Implementation)
-   Over here if you will see that when we are updating the parent state variable value then also child component is getting rendered that is because if you are just sending variables like props then that issue can be fixed by using memo or by making child component as pure component

- Now we are having anothr function findMax, everytime when you will do any state updation in parent component this function will be called even when its input value is not changed. 
- so to fix this we have useMemo hook , it will memoize the calculation result of the function which we are passing as a callback to useMemo , until unless the the result or the dependency variable value is not changed. It will not be executed again.
## What is UseRef Hook ?(Implementation)

whenever we modify any state variable value then the dom gets rendered but we dont wont it 
SOLUTION:you take a ref variable which will have the access of all the dom property.
when this variable value will be updated then we will not render the DOM.
const divRef=useRef(0);
<div ref={divref}>hello</div>
divref.current.value
the ref variable return you an object,this object will have a property named as current

- a component using useRef hook also known as uncontrolled component because in this case the changes happening on the dom is not controlled by the state variable


## What is Context api 
- is a way to manage state globaly.
- In this file we are creating a context for users.
- Very first step is that you need to create the context using createContext function.
- we will be creating a functional component which will return Context.Provider.  props.children is a component.

- useContext :
- this hook is used to use the context api. 
- props drilling : If you have four components , and you need to pass the data from one comp to second then to third then to fourth comp. But this data will be used only in first and fourth comp. So over here second and third comp is having or receiving props data which they are not even using . this is known as props drilling. 
// Soultion of props drilling : Context API.
// Context API : Lets you store the data at a single place and then in whatsoever component you want to receive the data you need to make sure that the component is wrapped with the context api. 
// Now to use the context api data in the component you need useContext hook.

## Difference between callback and useCallback Hook ?

# useCallback

(create two files, parent and child components)

- Parent => contains two states like `a`, `b` (`a` state variable will be present in parent component only, b state variable will be passed to the child component)

- child => props.b

Problem: Even if `a` state variable is getting updates which is not even passed to the child componrnt, even then when the parent component will be rendered (because a state variable got updated) and also the child component will also be re-rendered.
Solution: create child component as pure component (export default memo(child component name))
equality`


-  Over here if you will see that when we are updating the parent state variable value then also child component is getting rendered that is because if you are just sending variables like props then that issue can be fixed by using memo or by making child component as pure component
- but when you are sending function as a props then it falls under referential equality which means functions value will always be treated as new so the child component will always be rerendered .
- so to fix this we have to use useCallback hook . This hook memoize callback function.
- After this the child component will not be rerendered if only the parent component state is changing. and we can pass child component props value in dependency array that if the state value is changing in parent which we are passing as props to child then we will render the child component.

## What is Props Drilling Concept ?What is State Uplifting ?
- 
## Difference between useEffect and useContext ?
- useEffect : 
 alternative of lifecycle methods like (which is present and can be used only and only in class based components)
 when you want to make server calls : 
 componentDidMount, componentDidUpdate, componentWillUnmount
 hook which accepts first parameter as a callback function, and second parameter is dependency array
 if you do not want that useEffect should run like a componentDidUpate then : pass an empty dependency array.
 How the useEffect can be executed like componentDidUpdate only for one state variable: pass the state variable for which you want to execute useEffect in the dependency array.
 clean up function : this function gets executed when the component is unmounted from the screen . This is mostly used for memory leaks 

- useContext :
 this hook is used to use the context api. 
 props drilling : If you have four components , and you need to pass the data from one comp to second then to third then to fourth comp. But this data will be used only in first and fourth comp. So over here second and third comp is having or receiving props data which they are not even using . this is known as props drilling. 
 Soultion of props drilling : Context API.
 Context API : Lets you store the data at a single place and then in whatsoever component you want to receive the data you need to make sure that the component is wrapped with the context api. 
 Now to use the context api data in the component you need useContext hook. 

What is UseMemo Hook ?(Implementation)
What is UseRef Hook ?(Implementation)
What is Context api
Difference between callback and useCallback Hook ?
What is Props Drilling Concept ?What is State Uplifting ?
Difference between useEffect and useContext ?


DAY 5
High Order Component in react js ?
Do you know about SEO ? Is it true that react js supports SEO support
clean up in useEffect
What is the use of useCallback and useMemo
Why do we need keys in react less
Do you know about redux


DAY 6
What is an event in react?
What is memory leak and how to overcome?
Do you prefer function-based or class component and why ?
Explain reducer as pure function in redux
Why do we use redux thunk?
What do you know about NPM?
