var React = require('react');
var Translator = require('directive-components/translator');
var Show = require('directive-components/show').Component;
var Hide = require('directive-components/hide').Component;
var DisplayAll = require('directive-components/display-all').Component;
var It = {
    mixins: [Translator],
    displayName: "It",
    renderIt:function(target) {
        if('undefined' != typeof this.props.isShownWhen){
            return (
                React.createElement(Show, React.__spread({when: this.props.isShownWhen},  this.props), 
                    target
                )
            )
        }
        if('undefined' != typeof this.props.isShownUnless){
            return (
                React.createElement(Show, React.__spread({unless: this.props.isShownUnless},  this.props), 
                    target
                )
            )
        }
        if('undefined' != typeof this.props.isHiddenWhen){
            return (
                React.createElement(Hide, React.__spread({when: this.props.isHiddenWhen},  this.props), 
                    target
                )
            )
        }
        if('undefined' != typeof this.props.isHiddenUnless){
            return (
                React.createElement(Hide, React.__spread({unless: this.props.isHiddenUnless},  this.props), 
                    target
                )
            )
        }
        if('undefined' != typeof this.props.displaysMany){
            return (
                React.createElement(DisplayAll, {the: this.props.displaysMany}, 
                    target
                )
            )
        }

        return target;
    }
}

module.exports = {
    Class: It,
    Mixin: It,
    Component: React.createClass({displayName: "Component",
        mixins: [It],
        render:function (){
            return this.renderIt(this.props.children);
        }
    })
}