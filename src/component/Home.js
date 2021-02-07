import React,{Component,Fragment} from 'react'
import News from './News.js'
import Phone from './Phone.js'
import axios from 'axios'
export default class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            texts:"I am the default",
            arr:[]
        }
    }
   /* componentDidMount()
    {
        this.ajaxfun();
    }
    ajaxfun = ()=>
    {
        axios.get("http://localhost:4000/arr").then((ok)=>{
            console.log(ok);
            this.setState({arr : ok.data})
        });
    }*/
    pafun = (texts)=>
    {
        console.log(texts);
        this.setState({
            texts
        });
    }
    render()
    {
        return (
            <Fragment>
                我是Home组件----{this.state.texts}<br/>
               {/* <img src = {require("../assets/校园风光 (1).jpeg")} />*/} 
                <News PaFun = {this.pafun}/>
                <Phone /><br />
                {/*{this.state.arr.map((item)=>{
                    return <p >{item.name}</p>
                })}*/}
            </Fragment>
        );
    }
}