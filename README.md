#  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Answer: The difference is getElementById and getElementsByClassName give HTMLCollection and it update automatically when dom changed, can't run forEach() loop directly, querySelector and querySelectorAll give Nodelist and it don't update automatically, we can run forEach() loop directly, getElementById give single element, getElementsByClassName give all elements that match class name and looks like array but it's not, querySelector give first matching element using css classes, querySelectorAll give all elements using css classes.


# How do you create and insert a new element into the DOM?
### Answer: We can create new element using **document.createElement()** For example: `document.createElement("div")` , And for inserting a element using **appendChild(childElement)** For example: `document.body.appendChild(document.createElement("div"));`


# What is Event Bubbling? And how does it work?
### Answer: When trigger a event in child element, it cross over it's parent element -> then grand-parent element -> end when it's Document. For example: `a button inside a div, div inside body tag` first buttton event triggered, second div triggered, third body triggered.
