# 1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Answer: The difference is getElementById and getElementsByClassName give HTMLCollection and it update automatically when dom changed, can't run forEach() loop directly, querySelector and querySelectorAll give Nodelist and it don't update automatically, we can run forEach() loop directly, getElementById give single element, getElementsByClassName give all elements that match class name and looks like array but it's not, querySelector give first matching element using css classes, querySelectorAll give all elements using css classes. And getElementById & querySelector don't give HTMLCollection or NodeList because they give single element.

<br>
<br>

# 2: How do you create and insert a new element into the DOM?
### Answer: We can create new element using **document.createElement()** For example: `document.createElement("div")` , And for inserting a element using **appendChild(childElement)** For example: `document.body.appendChild(document.createElement("div"));`

<br>
<br>

# 3: What is Event Bubbling? And how does it work?
### Answer: When trigger a event in child element, it cross over it's parent element -> then grand-parent element -> end when it's Document, this is called event bubbling. For example: `a button inside a div, div inside body tag` first buttton event triggered, second div triggered, third body triggered.

<br>
<br>

# 4: What is Event Delegation in JavaScript? Why is it useful?
### Answer: I have many child element in a parent element and i just add single event listener in parent element, this is called event delegation. It's very useful, for example: if i add new child element i don't need to add separate event listener it requires less code.


<br>
<br>

# 5: What is the difference between preventDefault() and stopPropagation() methods?
### Answer: The difference is `preventDefault()` method stops the browser default action when triggered event. And `stopPropagation()` method stops Event Bubbling.
