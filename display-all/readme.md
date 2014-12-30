# Display all #

Displays many elements, like posts on an archive or images in a gallery, using a template. Also allows defining a "No items"
message.

## Usage ##
Require it:
```js  
var DisplayAll = require('directive-components/display-all').Component;
```
use it:
```jsx  
<DisplayAll the="posts in this category">
	<div className="posts-container">
		<h1 isShownWhenThereAreNo="posts in this category">No posts</h1>
		<Post isTheTemplateForThe="post"/>
	</div>
</DisplayAll>
```

## Markup ##
<DisplayMany/> expects to have exactly _one_ child, which is the container, otherwise it will give an error.
```jsx
<DisplayAll the="posts in this category">
	<div className="posts-container"/>
<DisplayAll>
```

The container can have any number of children, including 2 special ones: a notification when there are no items, and a
template to use for each item. The notification is optional, and is defined by setting the _isShownWhenThereAreNo_ attribute
on an element, like this:
```jsx
<DisplayAll the="posts in this category">
	<div className="posts-container">
		<h1 isShownWhenThereAreNo="posts">We're sorry, we couldn't find any posts</h1>
	</div>
<DisplayAll>
```
The template is also optional(but the, if omitted, you won't be able to display the items), and is defined by setting the
_isTheTemplateForThe_ attribute. The value of this prop is the name of the prop that will be sent to the template, containing
 the current item.
```jsx
<DisplayAll the="posts in this category">
	<div className="posts-container">
		<Post isTheTemplateForThe="post"/>
	</div>
<DisplayAll>
```
then, in <Post/> component:
```js
render: function(){
	var index = this.props.index;//the item's index in array
	var thePost = this.props.post;
	//do something with the post
}
```
You can also add any number of elements inside <DisplayAll/>, and they will be always displayed, irregardless of whether
there are or not items.
```jsx
<DisplayAll the="posts in this category">
	<div className="posts-container">
		<div className="top-delimiter"/>
		<h1 isShownWhenThereAreNo="posts in this category">No posts</h1>
		<Post isTheTemplateForThe="post"/>
		<div className="bottom-delimiter"/>
	</div>
</DisplayAll>
```

_There's also an [It](https://github.com/MonstroThemes/directive-components/tree/master/it) alternative_