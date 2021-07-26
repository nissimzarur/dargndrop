import React from "react";
import styled from 'styled-components';
import Task from "./Task";
import { DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width:300px;
  min-width:300px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default function Board(){
	return(
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
					<Draggable
					  key={item.id}
					  draggableId={item.id}
					  index={index}
					>
					  {(provided, snapshot) => {
						return (
						  <div
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							style={{
							  userSelect: "none",
							  padding: 16,
							  margin: "0 0 8px 0",
							  minHeight: "50px",
							  backgroundColor: snapshot.isDragging
								? "#263B4A"
								: "#456C86",
							  color: "white",
							  ...provided.draggableProps.style
							}}
						  >
							{item.content}
						  </div>
						);
					  }}
					</Draggable>
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