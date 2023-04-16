import React from 'react'

class Todo extends React.Component{
    state = {
        elements : [
            {id: '232322', title: "XD"},
            {id: '223232', title: "Jeastem tu"}
        ]
    }
    render() {
        const elements = this.state.elements.map(e=>{
            return <div key={e.id}>{e.title}</div>
        })

        return(
            <div>TODO APP
            {elements}
            </div>
        )
    }
}

export default Todo
