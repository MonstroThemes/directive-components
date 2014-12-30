# It #
Combines all directive components.  
Don't forget to require it:
```
#!js  
var It = require('directive-components/it').Component;
```

## [Show](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/show/) ##
```
#!jsx  
<It isShownWhen="user is logged in">
	<span>Logout</span>
</It>

<It isShownUnless="user is logged in">
	<a href="/login">Please login</a>
</It>
```

## [Hide](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/hide/) ##
```
#!jsx  
<It isHiddenUnless="user is logged in">
	<span>Logout</span>
</It>

<It isHiddenWhen="user is logged in">
	<a href="/login">Please login</a>
</It>
```

## [DisplayAll](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/display-all/) ##
```
#!jsx  
<It displaysMany="posts in this category">
	<div className="posts-container">
		<h1 isShownWhenThereAreNo="posts in this category">No posts</h1>
		<Post isTheTemplateForThe="post"/>
	</div>
</It>
```