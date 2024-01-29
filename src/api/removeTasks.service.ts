import axios from 'axios'

const removeTasks = async (taskId: string): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3333/remove/${taskId}`)
  } catch (error) {
    console.error(`Error removing tasks: ${error}`)
    throw error
  }
}

export default removeTasks
