import React from "react";
import { zhCN } from "date-fns/locale";
import { parseISO, formatDistanceToNow } from "date-fns";

function TimeAgo({ timestamp }) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date, { locale: zhCN });
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      <i>{timeAgo}</i>
    </span>
  );
}

export default TimeAgo;
