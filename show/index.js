var React = require('react');
var Translator = require('directive-components/translator');
var Show = {
    displayName: "Show",
    mixins: [Translator],
    render:function (){
        if(('undefined' != typeof this.props.unless && !this.translateProp('unless')) || ('undefined' != typeof this.props.when && this.translateProp('when'))){
            var target = React.Children.only(this.props.children);
            var props = this.props;
            delete props.unless;
            delete props.when;
            delete props.children;
            return React.addons.cloneWithProps(target, props);
        }
        return null;
    }
}

module.exports = {
    Class: Show,
    Component: React.createClass(Show)
}