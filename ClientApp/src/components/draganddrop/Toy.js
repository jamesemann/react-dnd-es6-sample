import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend'

const itemSource = {
    canDrag(props, monitor) {
        return !props.dropped;
    },
    beginDrag(props) {
        return { id: props.id, name: props.name };
    },
    endDrag(props) {
    },
    isDragging(props, monitor) {
        return monitor.getItem().id === props.id;
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        connectDragPreview: connect.dragPreview()
    }
}

class Toy extends Component {
    componentDidMount() {
        this.props.connectDragPreview(getEmptyImage(), {
            captureDraggingState: true,
        })
      }

    render() {
        const { connectDragSource } = this.props
        return connectDragSource(
            <span>
                <span className="card" key={this.props.id}>
                    item  {this.props.id}
                    {this.props.removeItem && <a href="#delete" onClick={this.props.removeItem}>
                        &nbsp;X
                    </a>}
                </span>
            </span>
        )
    }
}
export default DragSource('MyDraggableObject', itemSource, collect)(Toy)