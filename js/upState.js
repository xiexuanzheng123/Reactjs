var Content = React.createClass({
    render: function() {
        return <div>
            <button onClick = {this.props.updateStateProp}>点我</button>
            <h4>{this.props.myDateProp}</h4>
        </div>
    }
});
var HelloMessage = React.createClass({
    getInitialState: function() {
        return {value: 'Hello Runoob'};
    },
    handleChange: function(event) {
        this.setState({value:'菜鸟教程'})
    },
    render: function() {
        var value = this.state.value;
        return <div>
            <Content myDateProp = {value} updateStateProp = {this.handleChange}></Content>
        </div>
    }
});
ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);