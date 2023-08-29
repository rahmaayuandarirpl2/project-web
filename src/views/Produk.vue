<!-- <template> -->
    <!--Product-->

        <!-- <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar5.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Pop It</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 35.000</p>
              </a>
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar6.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Aestetik</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 25.000 - Rp. 30.000</p>
              </a>
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar7.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Polos</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 15.000 - Rp. 25.000</p>
              </a>
              <a href="/singleproduk" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src="../assets/gambar8.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>
                <h3 class="mt-4 text-sm text-gray-700">Casing Doraemon</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">Rp. 45.000 - Rp. 50.000</p>
              </a> -->

              <!-- More products... -->
            <!-- </div>
          </div>
        </div>

        <div class="bg-white">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="sr-only">Products</h2>
        

          <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar12.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Sapi Lucu</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 35.000</p>
            </a>
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar13.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Lucu</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 25.000 - Rp. 30.000</p>
            </a>
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar14.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Iphone</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 25.000 - Rp. 50.000</p>
            </a>
            <a href="/singleproduk" class="group">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="../assets/gambar15.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-4 text-sm text-gray-700">Casing Cantik dan Lucu</h3>
              <p class="mt-1 text-lg font-medium text-gray-900">Rp. 35.000 - Rp. 40.000</p>
            </a> -->

            <!-- More products... -->
          <!-- </div>
        </div>
      </div>
</template> -->

<template>
  <div v-if="getProduk == undefined">Loading....</div>
  <div v-else>
    <div class="grid md:grid-cols-4 gap-8  mt-10 pl-5">
      <div v-for="product in getProduk.slice(0, 12)" :key="product.slug">

        <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-gray shadow-md">
          <a href="#">
            <img class="h-50 rounded-t-lg object-cover w-full" src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/06/ezgif.com-gif-maker-6.webp" alt="product image" />
          </a>
          <span
            class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
          <div class="mt-4 px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-slate-900">{{ product.name }}</h5>
            </a>
            <div class="mt-2.5 mb-5 flex items-center">
              <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
              <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                </path>
              </svg>
            </div>
            <div class="flex items-center justify-between">
              <p>
                <span class="text-3xl font-bold text-slate-900">Rp.{{ product.base_price }}</span>

              </p>
            </div>
            <div>
              <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug } }"
                class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Details
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters('product', ['getProduk']),
  },
  methods: {
    ...mapActions('product', ['fetchProduk']),
  },
  created() {
    this.fetchProduk();
  }
}
</script>