import React,{Component,Fragment} from 'react'
import PubSub from 'pubsub-js'

export default class Phone extends Component
{
    constructor(props)
    {
        super(props);
        PubSub.subscribe('evt',(msg,data)=>{
            console.log('Phone'+ data);
        })
    }
    componentDidMount()
    {
        console.log(this.props.match.params.id);
    }
    render()
    {
        return (<div> Phone</div>)
    }
}