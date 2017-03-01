/***React支持特殊的属性ref，可以绑定到render输出的任何组件上 */
//这个特殊的属性允许你引用render返回的相应的实例支撑实例(backing instance)

var MyComponent = React.createClass({
    handleClick: function() {
        //使用原生的DOM API获取焦点
        this.refs.myInput.focus();
    },
    render: function() {
        // 当组件插入到DOM后，ref属性添加一个组件的引用于到this.refs
        return (
            <div>
                <input type='text' ref='myInput' />
                <input type='password' ref='myPass' />
                <input type='button' value='点我输入框获取焦点' onClick={this.handleClick} />
            </div>
        );
    }
});
ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);