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

import "./uoload.less";
import "@kdcloudjs/kdesign/dist/kdesign.css";

const formatDate = (date, format = "YYYY-MM-DD HH:mm:ss") => {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0"); 
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return format
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", day)
    .replace("HH", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);
};

function uoload() {
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
    {
      uid: "-3",
      name: "image3.png",
      status: "done",
      size: 345,
      url: "https://kui.kingdee.com/assets/image/img03.jpg",
      linkSrc: "www.kd.com333",
      publicTime: 2,
      publicTimeRange: [new Date("2024/12/03"), new Date("2025/01/10")],
    },
    {
      uid: "-xxx",
      percent: 70,
      name: "image5.png",
      status: "uploading",
      url: "https://kui.kingdee.com/assets/image/img04.jpg",
      linkSrc: "www.kd.com444",
      publicTime: 2,
      publicTimeRange: [new Date("2024/12/03"), new Date("2025/01/10")],
    },
    {
      uid: "-4",
      name: "image6.png",
      status: "error",
      url: "https://kui.kingdee.com/assets/image/img03.jpg",
      linkSrc: "www.kd.com555",
      publicTime: 2,
      publicTimeRange: [new Date("2024/12/03"), new Date("2025/01/10")],
    },
  ];
  const [fileList, setFileList] = useState(initFiles);

  const [currPublicTime, setCurrPublicTime] = useState(2);

  const handleChange = ({ fileList }) => setFileList(fileList);

  const [form] = Form.useForm();

  const editImgConfig = (file, currPublicTime) => {
    const { linkSrc = "", publicTime = "", publicTimeRange = [] } = file ?? {};

    form.setFieldsValue({ linkSrc, publicTime, publicTimeRange });

    const onValuesChangeHandle = e => {
      console.log(form.getFieldValue("publicTime"));
      setCurrPublicTime(form.getFieldValue("publicTime"));
    };

    const inpStyle = { width: 230 };

    console.log("currPublicTime==>", currPublicTime);

    const body = (
      <Form
        form={form}
        className="setting-body"
        layout="horizontal"
        labelWidth={80}
        onValuesChange={onValuesChangeHandle}
      >
        <Form.Item
          label="PC端跳转页面"
          name="linkSrc"
          required
          validateTrigger="onBlur"
        >
          <Input borderType="border" style={inpStyle} />
        </Form.Item>
        <Form.Item label="发布时间" name="publicTime" required>
          <Radio.Group>
            <Radio value={1}>立即发布</Radio>
            <Radio value={2}>定时发布</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="发布时段"
          name="publicTimeRange"
          required
          hidden={currPublicTime == 1}
        >
          <RangePicker
            borderType="border"
            format={"YYYY/MM/DD"}
            style={inpStyle}
          />
        </Form.Item>
      </Form>
    );

    const onCancel = () => {
      const fieldsValue = form.getFieldsValue();

      setFileList(pre => {
        return pre.map(fileItem => {
          if (fileItem.uid == file.uid) {
            fileItem.linkSrc = fieldsValue.linkSrc;
            fileItem.publicTime = fieldsValue.publicTime;
            fileItem.publicTimeRange = [
              formatDate(fieldsValue?.publicTimeRange?.[0]),
              formatDate(fieldsValue?.publicTimeRange?.[1]),
            ];

            fileItem.status = "done";
            console.log("after val", fileItem);
          }
          return fileItem;
        });
      });
    };

    Modal.confirm({
      title: "设置",
      body,
      footer: null,
      onCancel,
      height: 230,
    });
  };

  const uploadButton = (
    <div>
      <Icon
        type="add"
        style={{
          fontSize: 16,
          color: "#666",
          fontWeight: "bolder",
        }}
      />
      <div>上传文件</div>
    </div>
  );

  const itemRender = (originNode, file, fileList) => {
    // console.log(originNode, file, fileList);

    const isError = file.status == "error";

    return (
      <div className="img-box" style={{ position: "relative" }}>
        {!isError && originNode}
        {isError && <div className="error-box">上传失败</div>}
        <div className="img-overlay">
          {!isError && (
            <Icon
              type="edit-border"
              className="img-icon"
              onClick={() => editImgConfig(file, currPublicTime)}
            />
          )}
          <Icon type="delete" className="img-icon" />
        </div>
      </div>
    );
  };
  return (
    <>
      {currPublicTime}
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
    </>
  );
}

export default uoload;
