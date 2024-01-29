import axios from 'axios'

const updateTasks = async (taskId: string, updatedData: any): Promise<void> => {
  try {
    const response = await axios.put(`http://localhost:3333/update/${taskId}`)
    return response.data
  } catch (error) {
    console.error(`Error updating task: ${error}`)
    throw error
  }
}

export default updateTasks
