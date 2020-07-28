<template>
  <div>
    {{ title }}:
    <span>{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: ['title', 'value'],
}
</script>
