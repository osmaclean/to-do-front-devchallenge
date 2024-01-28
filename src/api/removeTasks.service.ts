import axios from 'axios'

const removeTasks = async (taskId: string): Promise<void> => {
  try {
    const response = await axios.delete(
      `http://localhost:3333/remove/${taskId}`,
    )
    console.log('teste', response.data)
  } catch (error) {
    console.error(`Error removing tasks: ${error}`)
    throw error
  }
}

export default removeTasks
