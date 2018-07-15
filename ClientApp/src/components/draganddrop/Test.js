import React, { Component } from 'react';
import Toy from './Toy';
import Box from './Box';
import CustomDragLayer from './CustomDragLayer';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'

export default DragDropContext(HTML5Backend)(class Test extends Component {
    render() {
        return (<div>
            <CustomDragLayer />
            <h1>react-dnd example</h1>
            <div className="toolbox">
                <h3>Drag items from here</h3>
                <Toy id={1} name={"hello"} />
                <Toy id={2} name={"hello2"} />
                <Toy id={3} name={"hello2"} />
                <Toy id={4} name={"hello2"} />
                <Toy id={5} name={"hello2"} />
                <Toy id={6} name={"hello2"} />
                <Toy id={7} name={"hello2"} />
                <Toy id={8} name={"hello2"} />
            </div>
            <div>
                <Box />
                <Box />
            </div>
        </div>);
    }
});