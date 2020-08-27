export default {
  methods: {
    delay (millsecond) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(millsecond)
        }, millsecond)
      })
    }
  }
}
