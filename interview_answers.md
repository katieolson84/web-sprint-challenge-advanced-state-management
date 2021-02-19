# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
 Context API allows you to pass state without prop drilling. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 Teh redux store allows you store state globally. When you create an action you are telling the app what you would like to do. Then you can dispatch the action in the reducers. The reducer then puts the action to work and creates the logic and updates state. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Thunk allows you to use functions, rather than objects, in actions. So you can do axios calls. 
4. What is your favorite state management system you've learned and this sprint? Please explain why!
I like the simplicty of Context API. It is cleaner and easier to use. But I am starting to like Redux when it works properly but it can get a bit complicated. 