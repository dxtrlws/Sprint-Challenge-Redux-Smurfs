1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object? The 3 Array and Object methods that don't produce any side effects are .map, .filter and .concat. We would Object.assign to create a new Object while extending the properties of another object
2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 
    1.  `actions` are things in our code that we want something to happen. The `actions` then get dispatched to the `reducers` which formats or modifies the incoming data from `actions` to get it ready for our `store`. The `store` is what basically holds the  state for all or parts of the application. 
3.  Why is the store known as a 'single source of truth' in a redux application?
    1.  The `store` is read only and holds the true state of our application. Different components from all over your application access the same state data. 
4.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    1.  `Application state` is state that can be used just about eveywhere in your app. `Component state` is local to the component it's built in and can really only be passed down to child compoenents. If you have state that will need to be used in other components that are not children of each other then you will need a global state. If you app or components only need to share state with it's children, then you would use component state. 
5.  What is middleware?
    1.  Middleware JavaScript land is a function that returns a function that returns a function. `redux-thunk`, it'll take an action `redux`, then do something, then hand the results back to `redux`.
6.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    1.  `redux-thunk` is middleware that allows us to run our `action-creators` asynchronously. It changes our `action-creators` because we can dispatch serveral actions by the way of `Promises`. 
7.  Which `react-redux` method links up our `components` with our `redux store`?
    You would use the `connect` method to connect your redux store to your components..