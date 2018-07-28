export default {
  methods: {
    handleMenuSelect(index, indexPath) {
      if (/^cs-menu-empty-\d+$/.test(index)) {
        this.$message('功能正在开发')
      } else {
        this.$router.push({
          path: index
        })
      }
    }
  }
}
