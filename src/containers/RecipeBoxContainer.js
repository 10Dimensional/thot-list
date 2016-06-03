var React = require('react');
var ReactDOM = require('react-dom');
var Recipe = require("../components/Recipe.js");
var RecipeEditor = require("../components/RecipeEditor.js");
var Modal = require("react-bootstrap").Modal;
var myStorage = localStorage.length==0 ? [] : JSON.parse(localStorage.getItem('recipesBook'));
var RecipeBox = React.createClass({
    getInitialState: function() {
        return {
            recipes: myStorage,
            editing: {
                isEditing: false,
                currentIndex: 0
            },
            dialog: {
                header: "",
                text: "",
            }
        };
    },
    show: function() {
        this.setState({ 
            dialog: { header: "Default", text: "Default"}, 
            showModal: true, isEditing: false 
        });
    },
    close: function() {
        this.setState({ 
            showModal: false, 
            editing: {isEditing: false } 
        });
    },
    update: function() {
        localStorage.setItem( 'recipesBook', JSON.stringify(this.state.recipes));
    },
    removeRecipe: function(index) {
        var newData = this.state.recipes.slice(); //copy array
        newData.splice(index, 1); //remove element
        this.setState({recipes: newData}); //update state
        this.update();
    },
    editRecipe: function(index) {
        var recipe = this.state.recipes[index]; //copy array
        this.setState({ 
            editing: {isEditing: true, currentIndex: index}, 
            dialog: { header: recipe.header, text: recipe.text }, 
            showModal: true 
        });
    },
    handleEdit: function(header, text) {
        var updatedRecipes = this.state.recipes;
        updatedRecipes[this.state.editing.currentIndex].header = header;
        updatedRecipes[this.state.editing.currentIndex].text = text;
        this.setState({
            recipes: updatedRecipes, 
            editing: {isEditing: false}, 
            showModal: false
        });
        this.update();
    },
    handleSubmit: function (header, text) {
        var arr = this.state.recipes;
        arr.push({
            header: header,
            text: text
        });
        
        this.setState({ recipes: arr, showModal: false });
        
        this.update();
    },
    eachRecipe: function(recipe, i) {
        return (    
                <Recipe index={i} header={recipe.header} text={recipe.text} removeRecipe={this.removeRecipe} editRecipe={this.editRecipe} />
            );
    },
    render: function(props) {
        return (
            <div className="recipeBox">
                <h1>Store Your thoughts the React Way!</h1>
                <div className="container">
                     {this.state.recipes.map(this.eachRecipe)}
                </div>
                <div className="add-btn" onClick={this.show}>+</div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <RecipeEditor editRecipe={this.handleEdit} submitRecipe={this.handleSubmit} isEditing={this.state.editing.isEditing} header={this.state.dialog.header} text={this.state.dialog.text} className="test"/>
                    <button className="btn btn-primary" onClick={this.close}>Close</button>
                </Modal>
            </div>
        );
    }
});


module.exports = RecipeBox;