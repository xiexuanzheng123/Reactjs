var LinkButton = React.createClass({
    getInitialState: function() { //getInitialState 方法用于定义初始状态，
        return {liked: false}; //也就是一个对象，这个对象可以通过 this.state 属性读取
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});///this.setState 方法就修改状态值
                            //每次修改以后，自动调用 this.render 方法，再次渲染组件。 
    },
    render: function() {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return(
            <p onClick = {this.handleClick}>
               你<b>{text}</b>我。点我切换状态
               </p>    
        );
    }
});
ReactDOM.render(
    <LinkButton />,
    document.getElementById('example')
);
