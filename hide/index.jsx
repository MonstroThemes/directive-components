var React = require('react/addons');
var Translator = require('directive-components/translator');
var Hide = {
    displayName: "Show",
    mixins: [Translator],
    render (){
        if(('undefined' != typeof this.props.unless && !this.translateProp('unless')) || ('undefined' != typeof this.props.when && this.translateProp('when'))){
            return null;
        }
        var target = React.Children.only(this.props.children);
        var props = this.props;
        delete props.unless;
        delete props.when;
        delete props.children;
        return React.addons.cloneWithProps(target, props);
    }
}

module.exports = {
    Class: Hide,
    Component: React.createClass(Hide)
}