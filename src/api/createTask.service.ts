import axios from 'axios'

interface CreateTaskRequest {
  title: string
  message: string
  favorite?: boolean
}

const createTask = async (taskData: CreateTaskRequest): Promise<void> => {
  try {
    const response = await axios.post('http://localhost:3333/create', taskData)

    console.log('Task created successfully:', response.data)
  } catch (error) {
    console.error(`Error creating task: ${error}`)
    throw error
  }
}

export default createTask
