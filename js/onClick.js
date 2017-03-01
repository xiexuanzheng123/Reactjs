var HelloMessage = React.createClass({
    getInitialState: function() {
        return {value: 'Hello Runoob'};
    },
    handleChange: function() {
        this.setState({value:'鸟教程'})
    },
    render: function() {
        var value = this.state.value;
        return <div>
            <button onClick = {this.handleChange}>点我</button>
            <h4>{value}</h4>
        </div>
    }
});
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);