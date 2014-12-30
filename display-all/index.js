var React = require('react/addons');
var Translator = require('directive-components/translator');
var DisplayAll = {
    displayName: "DisplayAll",
    mixins: [Translator],
    render:function (){
        var items = this.translateProp('the');
        var container = React.Children.only(this.props.children);
        var containerChildren = Array.isArray(container.props.children) ? container.props.children : [container.props.children];
        var mappedChildren = [];
        for(var index in containerChildren){
            var child = containerChildren[index];
            if(child.props && 'undefined' != typeof child.props.isShownWhenThereAreNo && items && items.length){
                continue;
            } else if(child.props && 'undefined' != typeof child.props.isTheTemplateForThe){
                if(items && items.length){
                    var propName = child.props.isTheTemplateForThe;
                    mappedChildren = mappedChildren.concat(items.map( function(item, index)  {
                        var props = {
                            index: index
                        };
                        if('undefined' != typeof item.key) props.key = item.key;
                        props[propName] = item;
                        return React.addons.cloneWithProps(child, props);
                    }))
                }
                continue;
            }
            mappedChildren.push(child);
        }
        return React.addons.cloneWithProps(container, {
            children: mappedChildren
        });
    }
}

module.exports = {
    Class: DisplayAll,
    Component: React.createClass(DisplayAll)
}