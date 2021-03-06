# It #
Combines all directive components.  
Don't forget to require it:
```js  
var It = require('directive-components/it').Component;
```

## [Show](https://github.com/MonstroThemes/directive-components/tree/master/show/) ##
```jsx  
<It isShownWhen="user is logged in">
	<span>Logout</span>
</It>

<It isShownUnless="user is logged in">
	<a href="/login">Please login</a>
</It>
```

## [Hide](https://github.com/MonstroThemes/directive-components/tree/master/hide/) ##
```jsx  
<It isHiddenUnless="user is logged in">
	<span>Logout</span>
</It>

<It isHiddenWhen="user is logged in">
	<a href="/login">Please login</a>
</It>
```

## [AddClass](https://github.com/MonstroThemes/directive-components/tree/master/add-class/) ##
```jsx  
<It hasClass="some-class" when="user is logged in">
	<span>Your profile</span>
</It>

<It hasClass="some-class" unless="user is logged in">
	<span>Your profile</span>
</It>
```

## [DisplayAll](https://github.com/MonstroThemes/directive-components/tree/master/display-all/) ##
```jsx  
<It displaysMany="posts in this category">
	<div className="posts-container">
		<h1 isShownWhenThereAreNo="posts in this category">No posts</h1>
		<Post isTheTemplateForThe="post"/>
	</div>
</It>
```
