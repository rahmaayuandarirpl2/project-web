<template>

    <section class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8"> 
    <!-- Heading -->
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">All Brands</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"></p>
    </div>
    <!-- /Heading -->
    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
      <!-- Article -->
      <div v-for="merk in getMerk.data" :key="merk.id">
      <article class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <a href="#" class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img :src="merk.logo" />
        </a>

        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">{{ merk.slug }}</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-rose-500 active:text-rose-600">{{ merk.name }}</a>
          </h2>

          <p class="text-gray-500"></p>

          <div>
            <a href="#" class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700">Read more</a>
          </div>
        </div>
      </article>
    </div>
      <!-- /Article -->
    </div>
  </div>
</section>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('merk', ['getMerk']),
    },
    methods: {
        ...mapActions('merk', ['fetchMerk']),
    },
    created() {
        this.fetchMerk();
    },
}
</script>