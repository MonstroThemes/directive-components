# Directive components #

Allow writing highly-readable verbose markup. Transform this  
```
maybeGetSomething: function (){
    if(someCondition){
        return (
            <SomeComponent/>
        )
    }
}

render: function (){
    return (
        <div>
            <h1>Some stuff</h1>
            {this.maybeGetSomething()}
        </div>
    )
}
```
into this
```
<div>
    <h1>Some stuff</h1>
    <Show when="user is logged in and has unread messages">
        <SomeComponent/>
    </Show>
</div>
```
or this
```
<div>
    <h1>Some stuff</h1>
    <It isShownWhen="user is logged in and has unread messages">
        <SomeComponent/>
    </It>
</div>
```
a more complex example:
```
<It isShownWhen="user is logged in">
    <It hasClass="monstro-unread" when="user has unread messages">
        <It hasClass="monstro-important" when="user has important unread messages">
            <div>Oh hi!</div>
        </It>
    </It>
</It>
```
## Warning ##
These tools are intended for simple tasks. If you find yourself doing weird shinanigans with directive components for some task, you probably should just abondon the idea and solve the problem old school.

##Usage##

### As a designer ###
Take a look at the list of directives. Include the directives you'll be using at the top of your code, and then just use them according to the instructions. Try to write natural language-like sentences, this will make the code more readable.
After you're done, give your code to a developer, he'll make the magic work.

### As a developer ###
A component that uses directive components must provide a _monstroLanguage_ object to the [child context](https://gist.github.com/simenbrekken/11253438).
The keys of the object must be the strings used in the directive components, the values can be scalars or functions.
```
{
    childContextTypes: {
        monstroLanguage: React.PropTypes.object
    }

    getChildContext: function() {
        return {
            monstroLanguage: {
                "user is logged in": true,
                "user has unread messages" : function (){ //do some magic }
            }
        };
    }
}
```


## List of directives ##

* [Show](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/show/) shows or hides components
* [Hide](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/hide/) hides or shows components
* [DisplayAll](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/display-all/) displays and array of items, such as posts on an archive
* [It](https://bitbucket.org/vasile_rusnac/nucleus-react/src/master/utils/directive-components/it/) combines all directives, so you don't have to import them indidually. Arguably improves/decreases readability.