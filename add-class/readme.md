# AddClass #

Adds classes to components

## Usage ##
Don't forget to require it:
```js  
var AddClass = require('directive-components/add-class').Component;
```
once that's done, go crazy:

```jsx  
<AddClass name="some-class" when="user is logged in">
	<span>Logout</span>
</AddClass>

<AddClass name="some-class" unless="user is logged in">
	<a href="/login">Please login</a>
</AddClass>
```

_There's also an [It](https://github.com/MonstroThemes/directive-components/tree/master/it) alternative_