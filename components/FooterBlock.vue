<template>
  <div class="totalBalance bg-totalBalance/[.06] h-60 mx-5 mb-4 flex flex-col justify-center items-center">
    <div class="sum-container flex justify-center items-center space-x-1.5 text-lg font-Roboto font-normal text-textWallet tracking-[.04em] leading-[21px]">
      <img src="../assets/images/money.svg" alt="money">

      <p> {{ walletStore.round(walletStore.getTotalBalance(), walletStore.selectCurrency) }} </p>

      <div class="flex relative">
      <select 
        @change="walletStore.totalBalance = {}" 
        v-model=walletStore.selectCurrency 
        name="selector"
        class="cursor-pointer appearance-none border-none bg-transparent outline-none pr-3.5">
        <option value="EUR" class="bg-mainColor" selected>EUR</option>
        <option value="USD" class="bg-mainColor">USD</option>
        <option value="BTC" class="bg-mainColor">BTC</option>
        <option value="UAH" class="bg-mainColor">UAH</option>
      </select>

      <img src="../assets/images/triangle-down.svg" alt="triangle" class="absolute top-[35%] right-0 pointer-events-none">
      </div>
    </div>

    <div class="text-sm mt-0.5 font-Raleway font-medium text-white leading-[16px]">Total Balance</div>
  </div>
</template>

<script setup>
import { useWalletStore } from '@/stores/WalletStore';
const walletStore = useWalletStore();
</script>
