var HelloMessage = React.createClass({
    getDefaultProps: function() { //通过 getDefaultProps() 方法为 props 设置默认值
        return {
            name: 'Runoob'
        };
    },
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('example')
);