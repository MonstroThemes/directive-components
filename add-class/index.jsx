var React = require('react');
var Translator = require('directive-components/translator');
var AddClass = {
    displayName: "AddClass",
    mixins: [Translator],
    getDefaultProps (){
        return {
            className: ""
        }
    },
    render (){
        var target = React.Children.only(this.props.children);
        var props = this.props;
        if(('undefined' != typeof this.props.unless && !this.translateProp('unless')) || ('undefined' != typeof this.props.when && this.translateProp('when'))){
            props.className = (props.className && props.className.length ? ' ' : '') + this.props.name;
        }
        delete props.unless;
        delete props.when;
        delete props.name;
        delete props.children;
        return React.addons.cloneWithProps(target, props);
    }
}

module.exports = {
    Class: AddClass,
    Component: React.createClass(AddClass)
}