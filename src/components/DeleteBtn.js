var React = require('react');
var PropTypes = React.PropTypes;

/*var handleDeleteItem = event => {
  console.log(event.index);
}
*/
var DeleteButton = React.createClass({
  PropTypes: {
    index: PropTypes.number,
    removeRecipe: PropTypes.func
  },
  render: function (props) {
      var pushDelete = this.props.removeRecipe.bind(null, this.props.index);
      return (
        <button onClick={pushDelete} className="btn btn-expand btn-stroke btn-danger mr-5" type="primary"><span className="glyphicon glyphicon-trash"></span></button>
      );  
  }
});

module.exports = DeleteButton;
