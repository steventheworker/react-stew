A quick start to your project in react using: router & redux

just: npm install & npx start
entry point: src/index.js

- "snippets" commented to help with basic use of redux/router

- set up for use w/ Redux Dev Tools chrome extension



redux requires of components: 1 reducer & 1 action
redux is initialized in src/store.js


Actions: send data ({type, payload}) to reducers via the "dispatch" function


Reducers: handle any changes to the store & define initial state
	 - switch(action) {
		 default: (action) => null,
		 fetchPosts: fn,
		 deletePost: fn
	   }

components - import actions & call them
	"connect" fn imported from redux    +   "mapStateToProps"     =     component connected to store
	   ^ component gets state                   ^ state is then passed as props
	usually ppl bind actions that have been imported to props (use "connect" fn's 2nd parameter)
  proptypes: import PropTypes from 'prop-types';
	require component props to be of certain types (string, int, etc.)
	


Tips: 
- src/js/actions/types.js - defined action strings (ex: USER_DESTROY, USER_JOIN, USER_LEAVE, etc.)
- src/js/reducers/index.js - returns a composition of * reducer files


Based on Traversy Media's video: https://www.youtube.com/watch?v=93p3LxR9xfM