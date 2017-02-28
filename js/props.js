var HelloMessage = React.createClass({
    render: function() {
        return <h1 className = 'test'>Hello {this.props.name}</h1>;/***传递参数 */
    }
});

ReactDOM.render(
    <HelloMessage name='Runoob'/>,
    document.getElementById('example')
);