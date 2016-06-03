var React = require('react');
var PropTypes = React.PropTypes;
var DeleteButton = require("../components/DeleteBtn");
var EditButton = require("../components/EditBtn");

var Recipe = React.createClass({
    PropTypes:{
        header: PropTypes.string,
        text: PropTypes.string,
        index: PropTypes.number,
        removeRecipe: PropTypes.func,
        editRecipe: PropTypes.func
    },
    render: function(props) {
        return (
        <div className="recipe" id={this.props.index}>
                <h3>{this.props.header}</h3>
                <p>{this.props.text}</p>
                <div className="buttons">
                    <EditButton index={this.props.index} editRecipe={this.props.editRecipe} />
                    <DeleteButton index={this.props.index} removeRecipe={this.props.removeRecipe}/>
                </div>
            </div>
        );
    }
});

module.exports = Recipe;

PropTypes.re