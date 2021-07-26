import React from 'react';
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";


const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

export default function Task ({item, index}){


    return(
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
  
}
