import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";


export function SortableItem(props: { id: string; content: string; }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: "1rem 2rem",
        backgroundColor: "white",
        border: "1px solid black",
        width: "500px",
        cursor: "grab",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "space-between",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div>{props.id}</div>
            <div>{props.content}</div>
        </div>
    );
}
