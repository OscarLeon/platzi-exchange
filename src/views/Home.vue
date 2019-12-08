<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import api from '@/utils/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',
  components: { PxAssetsTable },
  data() {
    return {
      assets: []
    }
  },

  created() {
    api.getAssets().then(response => (this.assets = response))
  }
}
</script>
