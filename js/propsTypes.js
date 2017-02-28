//var title = function(){return 123;};
var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {
            
        };
    },
    render: function(){
        return (<h1>{this.props.title}</h1>)
    }
});
ReactDOM.render(
    <MyTitle />,
    document.getElementById('example')
)