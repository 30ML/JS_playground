timeoutPolling = (func, timeout, maxAttempts = -1) => {
  if (maxAttempts === 0) return

  setTimeout(async () => {
    try {
      await func()
    } catch (err) {
      console.error(err)
    }
    timeoutPolling(func, timeout, maxAttempts - 1)
  }, timeout)
}