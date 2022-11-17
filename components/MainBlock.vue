<template>
  <main>
    <ul>
      <li>
        <div 
          v-for="item of walletStore.fiatData"
          :key="item"
          class="
            currencyBlock h-20 w-600 mx-5 flex justify-between mt-2.5 pb-3.5 mt-4
            border-b-2 border-dashed border-textWallet/20 last:border-none
        ">
          <div class="currency">
            <div class="currencyName flex mb-2.5 space-x-1.5">
              <div class="w-26 h-26 bg-textWallet/[.06] rounded-sm p-1">
                <div class="rounded-full bg-textWallet h-full flex items-center justify-center shadow-shadowCurrency">
                  <img
                    class="block"
                    :src="'/_nuxt/assets/images/' + item.currency + '.svg'"
                    alt="label">
                </div>
              </div>

              <p class="text-white"> 
                {{ walletStore.currencyNames[item.currency] }} 
              </p>

              <p class="text-grey">
                ({{ item.currency }})
              </p>
            </div>

            <div class="buttons flex space-x-2.5">
              <button class="
                withdraw uppercase h-30 w-130 rounded-[1.65px] bg-textWallet/20 
                text-xs font-Raleway font-bold text-textWallet
              ">
                Withdraw
              </button>

              <button class="
                deposit uppercase h-30 w-130 rounded-[1.6px] bg-textWallet text-xs 
                font-Raleway font-bold shadow-shadowDeposit text-dark
              ">
                Deposit
              </button>
            </div>
          </div>

          <div class="sum flex flex-col place-items-end text-sm font-Roboto font-normal space-y-1">
            <div class="totalSum text-white"> 
              Всего: {{ walletStore.round(item[item.currency].total, item.currency) }} {{item.currency}} 
            </div>

            <div class="inRequest text-white"> 
              В заявках: {{ walletStore.round(item[item.currency].reserved, item.currency) }} {{item.currency}}
            </div>

            <div class="currentSum text-textWallet"> 
              {{ walletStore.round(walletStore.convert(item[item.currency].total, item.currency), walletStore.selectCurrency) }} 
              {{ walletStore.selectCurrency }} 
            </div>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
import { useWalletStore } from '@/stores/WalletStore';

const walletStore = useWalletStore();
</script>

