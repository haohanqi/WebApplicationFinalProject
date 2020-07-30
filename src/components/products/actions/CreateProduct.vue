<template>
    <div class="createProduct">
        <modal :header="'Create Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>
<script>
import Modal from '../../shared/Modal.vue'
import axios from 'axios'
import ProductForm from './ProductForm'
export default {
  name: 'createProduct',
  components: { Modal, ProductForm },
  data () {
    return {
      product: {},
      showModal: false
    }
  },
  methods: {
    showModalForm: function () {
      this.showModal = true
    },

    productAction: function (product) {
      console.log('Creating new Product', product)
      //Create new product
        axios.post(`${process.env.VUE_APP_BASE_URL}/products`, product).then(Response => {
        console.log(Response)
        this.showModal = false
        window.location.reload()
      }).catch(error => { console.log(error) })
    }
  }
}
</script>
<style lang="scss">
</style>
