import MenuList from "./menu-list";
import menus from "./data";
import "./styles.css";
import { FaMinus } from "react-icons/fa";

export default function TreeView({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
