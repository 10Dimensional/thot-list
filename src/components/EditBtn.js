var React = require('react');
var PropTypes = React.PropTypes;

/*var handleDeleteItem = event => {
  console.log(event.index);
}
*/

var EditButton = React.createClass({
  PropTypes: {
    index: PropTypes.number,
    editRecipe: PropTypes.func
  },
  render: function (props) {
      var pushEdit = this.props.editRecipe.bind(null, this.props.index);
      return (
        <button onClick={pushEdit} className="btn btn-expand btn-stroke btn-primary mr-5" type="primary"><span className="glyphicon glyphicon-pencil"></span></button>
      );  
  }
});

module.exports = EditButton;
