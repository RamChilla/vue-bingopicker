<template>
  <div class="about">
    <CurrentBingoNumber msg="About Page" />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import CurrentBingoNumber from '@/components/CurrentBingoNumber'
export default {
  name: 'About',
  components: { CurrentBingoNumber }
}
</script>