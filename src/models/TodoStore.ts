import { Instance, types } from 'mobx-state-tree'

const searchByType = types.string
let initialId = -1

const TodoItemModel = types.model({
  id: types.number,
  value: types.string,
  isDone: types.boolean,
})
type TodoItem = Instance<typeof TodoItemModel>

export const TodoStore = types
  .model({
    todos: types.array(TodoItemModel),
    searchBy: types.optional(searchByType, ''),
  })
  .views(self => ({
    get filteredTodos() {
      const filterByValue = (value: TodoItem) =>
        value.value.toLowerCase().includes(self.searchBy.toLowerCase())

      return self.searchBy ? self.todos.filter(filterByValue) : self.todos
    },
  }))
  .actions(self => ({
    add(value: string) {
      self.todos.push({ id: ++initialId, value, isDone: false })
    },
    remove(id: number) {
      const find = self.todos.findIndex((item) => item.id === id)
      self.todos.splice(find, 1)
    },
    toggleComplete(id: number) {
      self.todos.forEach((item: TodoItem) => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
      })
    },
    setSearchBy(value: string) {
      self.searchBy = value
    },
  }))

export type TodoStoreType = Instance<typeof TodoStore>
