export default {
  getItem: function (key) {
      let __DEV__ = true
      let value
      try {
          value = sessionStorage.getItem(key)
      } catch (ex) {
          // 开发环境下提示error
          if (__DEV__) {
              console.error('sessionStorage.getItem报错, ', ex.message)
          }
      } finally {
          return value
      }
  },
  setItem: function (key, value) {
      let __DEV__ = true
      try {
        sessionStorage.setItem(key, value)
      } catch (ex) {
          // 开发环境下提示 error
          if (__DEV__) {
              console.error('sessionStorage.setItem报错, ', ex.message)
          }
      }
  }
}