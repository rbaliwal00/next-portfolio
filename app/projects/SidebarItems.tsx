"use client";
import React, { useState } from "react";
import { SIDEBAR_ITEMS } from "./sidebar-constants";
import CustomCheckbox from "../_components/molecules/CustomCheckbox";

const SidebarItems = () => {
  const [tags, setTags] = useState<string[]>([]);

  return (
    <div className="projects__sidebar">
      {SIDEBAR_ITEMS.map((item) => (
        <CustomCheckbox
          data={item}
          tags={tags}
          setTags={setTags}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default SidebarItems;
