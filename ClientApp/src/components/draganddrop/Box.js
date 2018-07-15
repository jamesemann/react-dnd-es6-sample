import React, { Component } from 'react';
import { DropTarget } from 'react-dnd'
import Toy from './Toy'
import { remove, sumBy } from 'lodash';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        canDrop: monitor.canDrop()
    }
}

const target = {
    hover(props, monitor, component) {
        var targetItem = monitor.getItem();
        var exists = sumBy(component.state.items, function (item) { return item.id === targetItem.id; });
        targetItem.canDrop = !exists;
    },

    canDrop(props, monitor) {
        const item = monitor.getItem();
        return item.canDrop;
    },

    drop(props, monitor, component) {
        const item = monitor.getItem();
        item.dropped = true;
        component.addItem(item);
        return { moved: true };
    }
}

class Box extends Component {
    constructor() {
        super();

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            items: []
        };
    }

    removeItem(item) {
        remove(this.state.items, item);
        this.setState( {
            items: this.state.items
        });
    }

    addItem(item) {
        var items = this.state.items;
        items.push(item);
        this.setState({ items: items });
    }

    render() {
        const { connectDropTarget } = this.props;

        const items = this.state.items.map((item) => {
            const removeItem = this.removeItem.bind(this,item);
            return (
                <Toy key={item.id} {...item} removeItem={removeItem} />
            );
        });

        return connectDropTarget(
            <div className="box">
                <h3>Drag items to here</h3>
                {items}
                <pre>{JSON.stringify(this.state.items, null, 4)}</pre>
            </div>
        );
    }
}
export default DropTarget('MyDraggableObject', target, collect)(Box)