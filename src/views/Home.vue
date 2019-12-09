<template>
  <div>
    <BounceLoader :loading="isLoading" :color="'#68d391'" :size="'100px'" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/utils/api'
import PxAssetsTable from '@/components/PxAssetsTable'
import BounceLoader from 'vue-spinner/src/BounceLoader'

export default {
  name: 'Home',
  components: { PxAssetsTable, BounceLoader },
  data() {
    return {
      assets: [],
      isLoading: false
    }
  },

  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(response => (this.assets = response))
      .finally(() => (this.isLoading = false))
  }
}
</script>
