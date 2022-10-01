import React from 'react'

export interface InputSearchSuggestionProps {
  placeholder ?: string;
  disabled ?: boolean;
  tooltip ?: string;
  data ?: string[];
  width ?: any;
  onClick ?: Function;
  onChange ?: Function;
}
declare const InputSearchSuggestion: React.FC<InputSearchSuggestionProps>

export default InputSearchSuggestion