<template>
  <div class="home">
    <back-to-top></back-to-top>
    <top></top>
  </div>
</template>

<script>
import backToTop from '@/components/BackToTop'
import Top from '@/components/Top'

export default {
  name: 'home',
  components: {
    backToTop,
    Top
  },
  methods: {}
}
</script>
