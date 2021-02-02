import React,{Component} from 'react';
import Node from './Node';
import  './Pathfindingvisualizer.css'
// import Grid from 'react-grid-path';
// import {DataGrid,RowsProp,ColDef} from '@material-ui/data-grid';

const STARTING_NODE_ROW =10;
const STARTING_NODE_COL = 15;
const ENDING_NODE_ROW = 10;
const ENDING_NODE_COL = 35;

export default class pathfindingvisualizer extends Component{
constructor(){
    super();
    this.state = {
        grid:[],
    };
}
componentDidMount() 
    {
        const grid = createInitialGrid();
        this.setState({grid});
    }

render(){
    const {grid} = this.state;
    
    return(
        <div className ="grid">
            {grid.map((row,rowIdx) => {
                return (
                <div key = {rowIdx}>
                    {row.map((node,nodeIdx) =>{
                        const {row,col,isFinish,isStart} = node;
                    return(
                        <Node 
                        key = {nodeIdx}
                        col = {col}
                        row = {row}
                        isFinish = {isFinish}
                        isStart = {isStart}
                        ></Node>
                    );
                    })}
                </div>
                );
            })}
        </div>
    );
}}

    
    const createInitialGrid = () => {
        const grid = [];
        for (let row =0; row < 20; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++){
                currentRow.push(createNode(col,row));
            }
            grid.push(currentRow);
        }
        return grid;
    };
    const createNode = (col,row) => {
        return {
            col,
            row,
            isStart: row === STARTING_NODE_ROW && col === STARTING_NODE_COL,
            isFinish: row === ENDING_NODE_ROW && col === ENDING_NODE_COL,
            
        };
    };
    
