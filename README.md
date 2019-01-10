# _Basket_  - Grocery list React App
## npm install npm run dev


* Switch between users using the dropdown on the top right of the navigation bar
* Clicking "Add New Item" button, will prompt a modal, where user can fill out the details of   a new item to add to the shopping list. Recipe is optional, and if recipe is specified,       List item will have the user's name and recipe name.
* Each List Item under "Shopping List" can be moved to Basket by clicking "Add to Basket"
* Each List Item under "In The Basket" can be moved back to the Shopping List by clicking       "Undo Selection"

# Notes 

* Maintained React's Unidirectional data flow - changes to the state, whether invoked by        an action in the Navbar, ListItem, or ModalContent component, is handled by functions         binded within the parent component(App)
* Used React Portals to render modal
* Used Code Splitting to load first bundle js with main content, and then the ModalContent      component only when clicked. It is common to consider when a React App will scale with new    features