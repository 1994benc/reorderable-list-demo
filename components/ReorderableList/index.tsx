import React from "react";
import styles from "./ReorderableList.module.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ListItem } from "./ListItem/index";

const ITEMS = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
  { id: 6, content: "Item 6" },
  { id: 7, content: "Item 7" },
  { id: 8, content: "Item 8" },
  { id: 9, content: "Item 9" },
  { id: 10, content: "Item 10" },
];

export default function ReorderableList() {
  const [items, setItems] = React.useState(ITEMS);

  return (
    <div className={styles.ReorderableList}>
      <h1>Reorderable List</h1>
      <div className={styles.itemsContainer}>
        {items.map((item, index) => (
          <ListItem key={index} content={item.content}></ListItem>
        ))}
      </div>
    </div>
  );
}
