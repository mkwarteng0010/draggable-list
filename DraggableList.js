"use client";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialItems = [
  {
    id: "1",
    content: "Scotland Island",
    img: "/images/ScotlandIsland.png",
    location: "Sydney, Australia",
  },
  {
    id: "2",
    content: "The Charleston Cafe & Bar",
    img: "/images/TheCharlestonCafeBar.png",
    location: "Lorem ipsum, Dolor",
  },
  {
    id: "3",
    content: "Bridge Climb",
    img: "/images/BridgeClimb.png",
    location: "Dolor, Sit amet",
  },
  {
    id: "4",
    content: "Clam Bar",
    img: "/images/ClamBar.png",
    location: "Etcetera veni, Vidi vici",
  },
  {
    id: "5",
    content: "Vivid Festival",
    img: "/images/VividFestival.png",
    location: "Sydney, Australia",
  },
];

const DraggableList = () => {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(reorderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="list-none p-0"
          >
            {items.map(({ id, content, img, location }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable-item flex items-center"
                  >
                    <img
                      src={img}
                      alt={content}
                      className="w-16 h-16 mr-4 rounded"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{content}</h3>
                      <div className="flex items-center text-gray-500">
                        <img
                          src="/images/Frame.png"
                          alt="location icon"
                          className="w-4 h-4 mr-2"
                          style={{
                            width: "16px",
                            height: "22px",
                            margin: "-2px 0 0 0",
                          }}
                        />
                        <p>{location}</p>
                      </div>
                    </div>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
