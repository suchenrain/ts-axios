const cookie = {
  read(name: string): string | null {
    const match = document.cookie.match('(^|;)\\s*' + name + '\\s*([^;]+)')
    return match ? match.pop()! : null
  }
}

export default cookie
