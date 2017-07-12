import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListItem from './Item'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className = "list-container">
                {this.props.data.map((item,index)=>{
                    return <ListItem key={index} data={item}/>
                })
                }
            </div>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
module.exports = List