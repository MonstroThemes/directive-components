module.exports = {
    contextTypes: {
        monstroLanguage: React.PropTypes.object
    },

    translate: function (word){
        switch(typeof this.context.monstroLanguage[word]){
            case 'function':
                var f = this.context.monstroLanguage[word];
                return f(this);
            case 'undefined':
                console.warn('what do you mean "' + word + '"?');
                break;
            default: return this.context.monstroLanguage[word]
        }
    },

    translateProp: function (prop){
        return this.translate(this.props[prop]);
    }
}