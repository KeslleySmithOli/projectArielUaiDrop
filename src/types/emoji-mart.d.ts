declare module 'emoji-mart' {
  import { Component } from 'react';

  interface Emoji {
      id: string;
      name: string;
      native: string;
  }

  interface PickerProps {
      onSelect: (emoji: Emoji) => void;
      style?: React.CSSProperties;
  }

  export class Picker extends Component<PickerProps> {}
}
