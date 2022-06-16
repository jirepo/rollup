class Rect {
    width : number;
    height: number;
    static count: number;
  
    constructor(width, height) {
      this.width = width;
      this.height = height;
      Rect.count++;
    }
  }

  export { Rect };