import { defineStore } from 'pinia';
import data from '@/data/data.json';
import currencyNames from '@/data/currencyNames.json';
import converter from '@/data/converter.json';
import Decimal from 'decimal.js';

export const useWalletStore = defineStore('WalletStore', { 
  state: () => {
    return {
      data,
      currencyNames,
      visability: false,
      fiatArray: ['UAH', 'USD', 'EUR', 'RSD'],
      settingsArrow: 'down',
      fiatData: {...data},
      onlyFiat: false,
      converter,
      totalBalance: {},
      selectCurrency: 'EUR',
    };
  },
  actions: {
    setSettingsMenu(status) {
      this.visability = status;

      status 
        ? this.settingsArrow = 'up'
        : this.settingsArrow ='down';
    },
    showFiat() {
      if (!this.onlyFiat) {
        for (const i in this.fiatData) {
          if (!this.fiatArray.includes(i)) {
            delete this.fiatData[i];
          }
        }

        this.onlyFiat = true;
        this.totalBalance = {};
        this.visability = false;

        return this.fiatData;
      } else {
        this.onlyFiat = false;
        this.visability = false;
        this.fiatData = {...data};
      }
    },
    round(num, currency) {
      if (this.fiatArray.includes(currency)) {
        return new Decimal(num).toDecimalPlaces(2).toNumber();
      } 

      return new Decimal(num).toDecimalPlaces(6).toNumber();  
    },
    convert(balance, currency) {
      const convertedBalance = balance * this.converter[this.selectCurrency][currency];

      if (!this.totalBalance[currency]) {
        this.totalBalance[currency] = convertedBalance;
      }

      return convertedBalance;
    },
    getTotalBalance() {
      let total = 0;

      for (let key in this.totalBalance) {
        total += this.totalBalance[key];
      }

      return total;
    }
  },
});