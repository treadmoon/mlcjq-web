import React, { useEffect, useState } from "react";
import { Anchor, Row, Col } from "@kdcloudjs/kdesign";

function AnchorPage() {
  const warpRef = React.useRef(null);

  const [linkId, setLinkId] = useState("");

  const list = [
    { id: "1", name: "Part 1" },
    { id: "2", name: "Part 2" },
    { id: "3", name: "Part 3" },
    { id: "4", name: "Part 4" },
    { id: "5", name: "Part 5" },
    { id: "6", name: "Part 6" },
    { id: "7", name: "Part 7" },
  ];

  useEffect(() => {
    const targetElemnt =
      document.getElementById(linkId)?.parentElement?.parentElement;
    setTimeout(() => {
      targetElemnt &&
        targetElemnt.scrollIntoView();
    }, 0);
  }, [linkId]);

  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        position: "relative",
        margin: "20px",
      }}
    >
      <Row>
        <Col span={18}>
          <div
            ref={warpRef}
            style={{
              height: "300px",
              overflow: "scroll",
            }}
          >
            {list.map(({ id, name }) => (
              <div
                key={id}
                id={`part-${id}`}
                style={{
                  height: "200px",
                  background: `rgba(255,${id * 50},0,0.02)`,
                  marginTop: "30px",
                }}
                className="anchor-info"
              >
                {name}
              </div>
            ))}
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            affix={false}
            bounds={3}
            getContainer={() => warpRef.current}
            style={{ height: 120 }}
            onChange={(currentActiveLink) => {
              setLinkId(`link${currentActiveLink.split("-")[1]}`);
            }}
          >
            {list.map(({ id, name }) => (
              <Anchor.Link
                key={`lk${id}`}
                href={`#part-${id}`}
                title={<span id={`link${id}`}>{name}</span>}
              />
            ))}
          </Anchor>
        </Col>
      </Row>
    </div>
  );
}

export default AnchorPage;
