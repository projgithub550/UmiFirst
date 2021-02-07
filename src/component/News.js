import React,{Component,Fragment} from 'react'
import PubSub from 'pubsub-js'
export default class News extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            num : 123,
            NText : "我是子组件的数据"
        };
        this.fun = this.fun.bind(this);
    }
    fun()
    {
        this.setState({num : this.state.num * 2});
    }
    pubsub()
    {
        PubSub.publish('evt',this.state.num);
    }
    render()
    {
        return (
            <Fragment>
                我是News组件<br/>
                News---{this.props.text}---{this.state.num}
                <button onClick = {this.fun}>点我</button>
                <button onClick = {this.props.PaFun.bind(this,this.state.NText)}>点我进入父组件</button>
                <button onClick = {this.pubsub.bind(this)}>点我进行同级传递</button>
            </Fragment>
        );
    }
}