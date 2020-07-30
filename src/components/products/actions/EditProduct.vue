<template>
    <div class="edit-product">
       <modal :header="'Edit Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>

<script>
import Modal from '../../shared/Modal'
import ProductForm from './ProductForm'
import axios from 'axios'

export default {
  name: 'editProduct',
  components: { Modal, ProductForm },
  data () {
    return {
      product: {},
      showModal: false
    }
  },
  methods: {
    setProduct (product) {
      this.showModal = true
      this.product = product
    },

    productAction: function (product) {
      console.log('Updated Product Details', product)
      // Update the product to server
        axios.put(`${process.env.VUE_APP_BASE_URL}/products/${product._id}`, product)
        .then(
          response => console.log(response),
          this.showModal = false
        )
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
</style>
