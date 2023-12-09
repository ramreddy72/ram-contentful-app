import { createClient } from 'contentful'
import { useState } from 'react'
import { useEffect } from 'react'

const client = createClient({
  space: 'jhu6x3i24xlp',
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
})

export const useFetchProject = () => {
  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(true)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}
