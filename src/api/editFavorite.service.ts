import axios from 'axios'

const editFavorite = async (taskId: string): Promise<void> => {
  try {
    await axios.patch(`http://localhost:3333/tasks/favorite/${taskId}`)
  } catch (error) {
    console.error(`Error removing tasks: ${error}`)
    throw error
  }
}

export default editFavorite
