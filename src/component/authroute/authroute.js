import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
@withRouter
class AuthRoute extends React.Component{
    componentDidMount(){
        /*如果用户请求路径是登录或者注册，就让他在登录(注册)界面，如果
        * 用户是其它请求操作，则校验用户状态
        * */
        const publicList = ['/login', 'register'];
        const pathname = this.props.location.pathname;
        if(publicList.indexOf(pathname) > -1){
            return null;
        }
        //获取用户信息
        axios.get('/user/info').then(res=>{
            if(res.status === 200){
                if(res.data.code === 0){
                    //有登录信息
                }else {
                    //路由组件才有这个api
                    this.props.history.push('/login')
                }
            }
        })
        //是否登录
        //login不需要跳转

        //用户的type是boss还是牛人
        //用户是否完善信息
    }
    render(){
        return <p>我是authroute,判断跳转的地方</p>
    }
}
export default AuthRoute;