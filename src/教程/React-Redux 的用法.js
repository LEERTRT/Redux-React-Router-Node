//阮一峰 Redux 入门教程（三）：React-Redux 的用法 
// http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

//component
class Counter extends React.Component{
    render(){
        const {value,onIncreaseClick} = this.props;
        return(
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.PropTypes = {
    value:PropTypes.number.isRequired,
    onIncreaseClick:PropTypes.func.isRequired
}

//action
const increaseAction = {type:'increase'};

//reducer
function counter(state={count:0}, action){
    const count = state.count;
    switch(action.type){
        case 'increase':
            return{count:count+1}
        default:
            return state;
    }
}
//store
//store.dispatch方法会触发 Reducer 的自动执行。
//为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，
//将 Reducer 传入createStore方法。
const store = createStore(counter);

//Map Redux state to component props
function mapStateToProps(state){
    return {
        value:state.count
    }
}

//Map Redux actions to component props
function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick:()=>dispatch(increaseAction)
    }
}