# Forms

HTML form work differently than others in React

IF ANYTHING EVER CHANGES IN REACT, IT CHANGES ONLY IN THE STATE

## React: One Source of Truth

as soon as a user types anything in the form, state is updated  
and this change is then rendered in the form.

## React Controls:

- What is _shown_ 
- What happens when user _types_

**Input elements controlled this way are called _controlled components_**

### htmlFor

in labels, we can't use 'for' in the label with a form  
as in js, 'for' is a keyword in looping  
SO, we use **htmlFor**

### event.target

- whenever a change is seen, event.target is very useful in acccessing what has been changed in the state
- **event.target.name** stores the name of the _changed_ attribute
- **event.target.value** stores its _value_

### Passing Data up to the Parent Component

gen, React has a _downward_ flow:
- **Smart** parent comp with **simpler** child components

### But  

- it's common for form to keep their own state
- _but_ smarter parent component usually has a *onSubmitAction* method to   
update its state after the form submission
- **So**, *parent* passes this method down to the child as a **prop**

In the *ShoppingList* example, this line acted as the _prop_
```js
<ShoppingListItem addItem={addItem}>
```
Here, state is updated in the parent throught _addItem_ function.

## Form Validation
Two ways to implement form validation are:  
- Checking validity when the form is submitted 
- Checking when any change is made

**react-hook-form** is a package which helps a lot in form validation.