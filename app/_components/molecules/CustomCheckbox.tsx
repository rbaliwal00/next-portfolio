import { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import { blueGrey } from "@mui/material/colors";
import Image from "next/image";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CustomCheckbox = ({ data, tags, setTags }: any) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (tag: string) => {
    setIsChecked(!isChecked);
    if (isChecked == false) {
      setTags([...tags, tag]);
    } else {
      setTags(tags.filter((item: any) => item !== tag));
    }
  };

  return (
    <div className="checkbox__container">
      <div>
        <Checkbox
          {...label}
          sx={{
            color: blueGrey[300],
            "&.Mui-checked": {
              color: blueGrey[300],
            },
          }}
          checked={isChecked}
          onChange={() => handleCheckboxChange(data.tag)}
        />
      </div>
      <div>
        <label htmlFor="projects-1" className="projects__label">
          <Image src={data.icon} alt="react" width={24} height={24} />
          {data.name}
        </label>
      </div>
    </div>
  );
};

export default CustomCheckbox;
