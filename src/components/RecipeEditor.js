var React = require('react');
var PropTypes = React.PropTypes;

var RecipeEditor = React.createClass({
    PropTypes:{
        header: PropTypes.string,
        text: PropTypes.string,
        submitRecipe: PropTypes.func,
        editRecipe: PropTypes. func,
        isEditing: PropTypes.bool
    },
    getInitialState: function () {
        return {
            header: this.props.header,
            text: this.props.text,
            isEditing: this.props.isEditing
        };
    },
    handleSubmit: function(e){
        e.preventDefault();
        
        var header = document.getElementById('header').value;
        var text = document.getElementById('recipe').value;
        
        this.state.isEditing === true ? this.props.editRecipe(header, text) : this.props.submitRecipe(header, text);
        
        this.setState({ header: header, text: text });
    },
    render: function(props) {
        return (
            <div className="container">
                <form>
                    <input type="text" id="header" defaultValue={this.props.header} />
                    <textarea id="recipe" defaultValue={this.props.text} ></textarea>
                    {this.state.isEditing === true ? <input type="submit" id="submitBtn" className="btn btn-primary" value="Update" onClick={this.handleSubmit} /> : <input type="submit" id="submitBtn" className="btn btn-primary" value="Submit" onClick={this.handleSubmit} />}
                </form>
            </div>
        );
    }
});

module.exports = RecipeEditor;