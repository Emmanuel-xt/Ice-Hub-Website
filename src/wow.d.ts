declare module 'wow.js' {
    class WOW {
      constructor(options?: WOWOptions);
      init(): void;
    }
  
    interface WOWOptions {
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      live?: boolean;
      callback?: (box: Element) => void;
    }
  
    export default WOW;
  }
  