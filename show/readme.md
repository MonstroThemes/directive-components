# Show #

Displays or hides components

## Usage ##
Don't forget to require it:
```js  
var Show = require('directive-components/show').Component;
```
once that's done, go crazy:

```jsx  
<Show when="user is logged in">
	<span>Logout</span>
</Show>

<Show unless="user is logged in">
	<a href="/login">Please login</a>
</Show>
```

_There's also an [It](https://github.com/MonstroThemes/directive-components/tree/master/it) alternative_