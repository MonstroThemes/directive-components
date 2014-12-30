# Hide #

Hides or displays components

## Usage ##
Don't forget to require it:
```js  
var Hide = require('directive-components/hide').Component;
```
once that's done, go crazy:
```jsx  
<Hide unless="user is logged in">
	<span>Logout</span>
</Hide>

<Hide when="user is logged in">
	<a href="/login">Please login</a>
</Hide>
```

_There's also an [It](https://github.com/MonstroThemes/directive-components/tree/master/it) alternative_