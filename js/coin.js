class Coin {
    constructor() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
      }
    
}

// module.exports = Coin; //sposób ES5

export default Coin;