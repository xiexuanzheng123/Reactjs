var Button = React.createClass({
    getInitialState: function() {
        return {
            data: 0
        };
    },
    setNewNumber: function() {
        this.setState({data:this.state.data + 1})
    },
    render: function() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
})
var Content = React.createClass({
    compontentWillMount: function() {
        console.log('will mount');
    },
    componentDidMount: function() {
        console.log('did mount');
    },
    componentWillReceiveProps: function(newProps) {
        console.log('will receive props');
    },
    shouldComponentUpdate: function(newProps, newState) {
        return true;
    },
    componentWillUpdate: function() {
        console.log('will update');
    },
    componentDidUpdate: function() {
        console.log('did update');
    },
    componentWillUnmount: function() {
        console.log('will unmount');
    },
    render: function() {
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('example')
);