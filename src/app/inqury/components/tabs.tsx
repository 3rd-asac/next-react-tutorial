import styles from "./module/tabs.module.css";

interface Item {
    name: string;
    text: string;
}
interface Items extends Array<Item> {}

interface TabsProps {
    items: Array<Item>;
    selectedIdx: number;
    itemClick: (index: number) => void;
}
function Tabs(props: TabsProps) {
    const { items, selectedIdx, itemClick } = props;

    const handleItemClick = (index: number) => {
        itemClick(index);
    };

    return (
        <div className={styles.tabs}>
            {items.map((item, index) => (
                <span
                    key={item.name}
                    className={` ${
                        selectedIdx === index
                            ? `${styles.tab_btnRed}`
                            : `${styles.tab_btn}`
                    }`}
                    onClick={() => handleItemClick(index)}>
                    {item.text}
                </span>
            ))}
        </div>
    );
}

export default Tabs;
