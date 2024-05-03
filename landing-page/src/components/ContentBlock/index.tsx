import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import DownContent from "./DownContent";
import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "down") return <DownContent {...props} />;

  return null;
};

export default ContentBlock;
