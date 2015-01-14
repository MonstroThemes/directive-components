var React = require('react');
var Translator = require('directive-components/translator');
var Show = require('directive-components/show').Component;
var Hide = require('directive-components/hide').Component;
var AddClass = require('directive-components/add-class').Component;
var DisplayAll = require('directive-components/display-all').Component;
var It = {
    mixins: [Translator],
    displayName: "It",
    renderIt(target) {
        if('undefined' != typeof this.props.isShownWhen){
            return (
                <Show when={this.props.isShownWhen} {...this.props}>
                    {target}
                </Show>
            )
        }
        if('undefined' != typeof this.props.isShownUnless){
            return (
                <Show unless={this.props.isShownUnless} {...this.props}>
                    {target}
                </Show>
            )
        }
        if('undefined' != typeof this.props.isHiddenWhen){
            return (
                <Hide when={this.props.isHiddenWhen} {...this.props}>
                    {target}
                </Hide>
            )
        }
        if('undefined' != typeof this.props.isHiddenUnless){
            return (
                <Hide unless={this.props.isHiddenUnless} {...this.props}>
                    {target}
                </Hide>
            )
        }
        if('undefined' != typeof this.props.displaysMany){
            return (
                <DisplayAll the={this.props.displaysMany}>
                    {target}
                </DisplayAll>
            )
        }
        if('undefined' != typeof this.props.hasClass){
            return (
                <AddClass name={this.props.hasClass} {...this.props}>
                    {target}
                </AddClass>
            )
        }

        return target;
    }
}

module.exports = {
    Class: It,
    Mixin: It,
    Component: React.createClass({
        mixins: [It],
        render (){
            return this.renderIt(this.props.children);
        }
    })
}