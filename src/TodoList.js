class TodoList {
  constructor() {
    this.id = 0
    this.items = []
  }

  create(str) {
    this.id++
    const item = {
      id: this.id,
      text: str,
      status: 'incomplete',
      date: '15 Dec 2023'
    }
    this.items.push(item)
    return item
  }

  showAll() {
    this.items.map((item) => {
      if (item.text.length > 20) {
        item.text = item.text.slice(0, 20) + '...'
      }
      return item
    })
    return this.items
  }

  setComplete(id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter((item) => item.status === status)
  }

  findBy(id) {
    const item = this.items.find((item) => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }

  getByDate(date) {
    return this.items.filter((item) => item.date === date)
  }
}

module.exports = TodoList
