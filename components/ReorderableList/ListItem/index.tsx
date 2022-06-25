import React from "react";
import styles from './ListItem.module.css'

export function ListItem(props: { content: string; }) {
    return <div className={styles.ListItem}>{props.content}</div>;
}
