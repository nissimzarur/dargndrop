import React from "react";
import Task from "./Task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";


export default function Column({column, columnId}){
	return (
		<div style={{ margin: 8 }}>
		<Droppable droppableId={columnId} key={columnId}>
		  {(provided, snapshot) => {
			return (
			  <div
				{...provided.droppableProps}
				ref={provided.innerRef}
				style={{
				  background: snapshot.isDraggingOver
					? "lightblue"
					: "lightgrey",
				  padding: 4,
				  width: 250,
				  minHeight: 500
				}}
			  >
				{column.items.map((item, index) => {
				  return (
					<Task item={item} index={index}/>
				  );
				})}
				{provided.placeholder}
			  </div>
			);
		  }}
		</Droppable>
	  </div>
	);
}