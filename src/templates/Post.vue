<template>
    <Layout>
        <main>
          <div class="container pt-10 pb-16">
            <div class="w-full mx-auto px-5 md:px-0 pb-16">
              <g-link to="/" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 md:h-8 w-5 md:w-8" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>
                <span class="font-castoro font-semibold text-color-black-3 text-md md:text-xl tracking-wide ml-3 pt-1">{{ $page.meta.siteName.toUpperCase() }}</span>
              </g-link>
            </div>
            <section class="w-full md:w-9/12 lg:w-8/12 mx-auto px-5 md:px-10">
              <h1 class="font-semibold text-2xl md:text-4xl text-color-black-1 tracking-wider mb-5">{{ $page.post.title }}</h1>
              <h4 class="font-medium text-lg md:text-xl text-color-black-1">{{ $page.post.description }}</h4>
              <div class="flex items-center mt-4">
                <div class="bg-color-blue-1 font-castoro text-white text-sm rounded px-4 py-2 mr-4">
                  {{ $page.post.tags }}
                </div>
                <div class="font-castoro font-semibold text-base text-color-black-1">
                  {{ $page.post.date }}
                </div>
              </div>
            </section>
            <div class="w-full mt-10 mt:12 lg:mt-16 md:mb-8">
              <g-image class="mx-auto max-w-full" :src="$page.post.cover_image" />
            </div>
            <article class="w-full md:w-9/12 lg:w-8/12 mx-auto bg-white rounded px-5 py-10 md:p-10" v-html="$page.post.content">
            </article>
          </div>
        </main>
        <Profile></Profile>
    </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    tags
    cover_image
    author
    content
    description
  }
  meta: metadata {
    siteName
  }
}
</page-query>

<script>
import Profile from '~/components/Profile.vue';
export default {
  components: {
    Profile
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<style scoped>
article {
  font-size: 22px;
  margin-bottom: 60px;
}
@media (max-width: 576px) {
  article {
    font-size: 18px;
    margin-bottom: 30px;
  }
}
</style>