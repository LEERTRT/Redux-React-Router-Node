import React from 'react';
import Logo from '../../component/logo/logo';
import {List, Radio, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile';
import {connect} from 'react-redux';
import {register} from "../../redux/user.redux";

/*把指定的state & 指定的action和 React组件 连接起来 ==> 容器组件

mapStateToProps: 一个function，返回一个object；
(state, [ownProps]) => ({ }) // 通常省略第二个参数
作用: 把指定的state作为props注入到 UI组件中

mapDispatchToProps: 可以是一个function，还可以是object，
作用: 把指定的action作为props注入到UI组件中
*/
@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        };
        this.handleRegister=this.handleRegister.bind(this);
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })

    }
    handleRegister(){
        this.props.register(this.state);
    }
    render(){
        const RedioItem = Radio.RadioItem;
        return (
            <div>
                <Logo/>
                <List>
                    {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                    <InputItem
                        onChange={v=>this.handleChange('user',v)}>
                        用户</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        onChange={v=>this.handleChange('pwd',v)}
                        type='password'
                    >密码</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        onChange={v=>this.handleChange('repeatpwd',v)}
                        type='password'
                    >确认密码</InputItem>
                    <WhiteSpace/>
                    <RedioItem
                        checked={this.state.type==='genius'}
                        onChange={()=>this.handleChange('type','genius')}
                    >牛人</RedioItem>
                    <WhiteSpace/>
                    <RedioItem
                        checked={this.state.type==='boss'}
                        onChange={()=>this.handleChange('type','boss')}
                    >boss</RedioItem>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleRegister}>注册</Button>
                </List>
            </div>

        )
    }
}
export default Register;