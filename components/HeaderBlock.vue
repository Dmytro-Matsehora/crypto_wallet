<template>
  <header class="
    w-640 h-50 px-5 flex justify-between items-center
    bg-gradient-to-r from-gradientStart via-gradientMiddle to-gradientEnd
  ">
    <h1 class="text-lg text-textWallet drop-shadow-shadowWallet font-Raleway font-semibold">Wallet</h1>
    
    <div>
      <button
        @click="walletStore.setSettingsMenu(!walletStore.visability)" 
        v-bind:class="{'rounded-t-md': walletStore.visability, 'rounded-md': !walletStore.visability}"
        class="flex justify-center items-center h-8 w-186 bg-settingsButton/20">
        <img
          src="../assets/images/settings.svg"
          alt="settings"
        >

        <p class="text-xs text-settingsButton uppercase font-Roboto font-medium ml-[5px] mr-[13px]">
          settings
        </p>

        <img
          :src="`/_nuxt/assets/images/triangle-light-${walletStore.settingsArrow}.svg`"
          alt="triangle"
        >
      </button>
      
      <div v-if="walletStore.visability === true" class="h-20 w-186 bg-gradientEnd z-10 absolute rounded-b-md">
        <button
          class="flex items-center mt-2.5 ml-3 space-x-1.5"
          @click="walletStore.showFiat"
        >
          <img
            class="w-3 h-[6.5px]" 
            src="../assets/images/eye.svg" 
            alt="eye"
          >

          <p class="font-Roboto font-normal text-white text-xs">
            Show only Fiat
          </p>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useWalletStore } from '@/stores/WalletStore';

const walletStore = useWalletStore();
</script>
