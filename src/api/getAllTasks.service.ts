import axios from 'axios'

interface Tasks {
  id: string
  title: string
  message: string
  favorite?: boolean
  onRemoveTask: (taskId: string) => void
}

const getAllTasks = async (): Promise<{
  favoriteTasks: Tasks[]
  nonFavoriteTasks: Tasks[]
}> => {
  try {
    const response = await axios.get('http://localhost:3333/tasks')

    const tasks: Tasks[] = response.data.data

    const favoriteTasks = tasks.filter((task) => task.favorite === true) || []
    const nonFavoriteTasks = tasks.filter((task) => !task.favorite) || []

    return { favoriteTasks, nonFavoriteTasks }
  } catch (error) {
    console.error(`Error getting tasks: ${error}`)
    throw error
  }
}

export default getAllTasks
