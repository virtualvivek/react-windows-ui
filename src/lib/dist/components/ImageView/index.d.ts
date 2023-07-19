import React, { ReactNode } from "react";

export interface ImageViewProps {
  alt ?: string;
  title ?: string;
  src ?: ReactNode;
  tooltip ?: string;
  onLoad ?: Function;
  subtitle ?: string;
  objectFit ?: string;
  isLoading ?: boolean;
  insetShadow ?: boolean;
  width?: number | string;
  height ?: number | string;
  padding ?: number | string;
  margin ?: number | string;
  borderRadius ?: number | string;
}
declare const ImageView: React.FC<ImageViewProps>;

export default ImageView;