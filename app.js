new Vue({
  el: "#app",

  data() {
    return {
      name: "Bitcoin",
      img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      changePercent: 1,
      price: 8400,
      value: 0,
      symbol: 'BTC',
      color: 'f4f4f4',
      pricesWithDays: [
        { day: "Lunes", value: "8400" },
        { day: "Martes", value: "7900" },
        { day: "Miercoles", value: "8200" },
        { day: "Jueves", value: "9000" },
        { day: "Viernes", value: "9400" },
        { day: "Sabado", value: "10000" },
        { day: "Domingo", value: "10200" },
      ],

      showPrices: false,
    };
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse().join('')
    },
  },

  computed:{
      title(){
          return `${this.name} - ${this.symbol}`
      },
      convertedValue(){
        if(this.value == 0 ){
              return 0
        }
        return this.value / this.price
      }
  },


  watch:{
      showPrices(newVal, oldVal){
          console.log(newVal, oldVal)
      }
  }
});
