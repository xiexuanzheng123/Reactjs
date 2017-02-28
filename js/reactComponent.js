var HelloMessage = React.createClass({ /**createClass用于生成一个组件类 */
    render: function() {
        return <h1>Hello World !</h1>;
    }
});
ReactDOM.render(
    <HelloMessage/>,/**实例组件类并输出信息 */
    document.getElementById('example')
);