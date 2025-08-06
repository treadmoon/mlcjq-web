import React, { useState } from "react";
import {
  Upload,
  Input,
  Icon,
  Form,
  Modal,
  Radio,
  RangePicker,
} from "@kdcloudjs/kdesign";

import "./index/less";

const initFiles = [
  {
    uid: "-1",
    name: "image1.png",
    status: "done",
    size: 1234,
    url: "https://kui.kingdee.com/assets/image/img01.jpg",
    linkSrc: "www.kd.com111",
    publicTime: 2,
    publicTimeRange: [new Date("2024/12/03"), new Date("2025/01/10")],
  },
  {
    uid: "-2",
    name: "image2.png",
    status: "done",
    size: 5678,
    url: "https://kui.kingdee.com/assets/image/img02.jpg",
    linkSrc: "www.kd.com222",
    publicTime: 2,
    publicTimeRange: [new Date("2024/12/03"), new Date("2025/01/10")],
  },
];

const formatDate = (date, format = "YYYY/MM/DD") => {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
};

function upLoadImg(props) {
  const [fileList, setFileList] = useState(initFiles);

  return (
    <Upload
      listType="picture"
      fileList={fileList}
      onChange={handleChange}
      itemRender={itemRender}
      className="upload-box"
      style={{
        width: "100%",
      }}
    >
      {fileList.length >= 8 ? null : uploadButton}
    </Upload>
  );
}

export default upLoadImg;
