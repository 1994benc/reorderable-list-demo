import React from "react";
import styles from "./ReorderableList.module.css";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

const ITEMS = [
  { id: "i1", content: "Item 1" },
  { id: "i2", content: "Item 2" },
  { id: "i3", content: "Item 3" },
  { id: "i4", content: "Item 4" },
  { id: "i5", content: "Item 5" },
  { id: "i6", content: "Item 6" },
  { id: "i7", content: "Item 7" },
  { id: "i8", content: "Item 8" },
  { id: "i9", content: "Item 9" },
  { id: "i10", content: "Item 10" },
];

export default function ReorderableList() {
  const [items, setItems] = React.useState(ITEMS);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className={styles.ReorderableList}>
      <h1>Reorderable List</h1>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item, index) => (
            <SortableItem key={item.id} id={item.id} content={item.content} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}


