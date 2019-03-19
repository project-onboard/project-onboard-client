import React from "react";
import { push as Menu } from "react-burger-menu";
import "./sidebar.css";
import { ReactComponent as DownChevron } from "../../rss/icon/chevron-down.svg";

const SideBar = ({ pageWrapId, outerContainerId, sections }) => {
  const sectionsJSX = sections.map(section => {
    const sectionHeader = (
      <a className="menu-item" href="/">
        {section.title}
      </a> 
    )

    const contentItems = section.contents.map(content => {
      return (
        <a className="menu-item-item" href="/">
         { "  ..." + content.title}
        </a> 
      );
    });

    return [sectionHeader, ...contentItems]
  });

  return (
    <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
      {sectionsJSX}
    </Menu>
  );
};

export default SideBar;
