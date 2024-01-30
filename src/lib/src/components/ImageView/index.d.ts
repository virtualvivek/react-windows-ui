import React, { ReactNode } from "react";

export interface ImageViewProps {
  alt ?: string;
  src ?: ReactNode;
  tooltip ?: string;
  onLoad ?: Function;
  objectFit ?: string;
  isLoading ?: boolean;
  width?: number | string;
  height ?: number | string;
  padding ?: number | string;
  margin ?: number | string;
  borderRadius ?: number | string;
}
declare const ImageView: React.FC<ImageViewProps>;

export default ImageView;