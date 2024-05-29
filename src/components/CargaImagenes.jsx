import { useState } from 'react'
import { uploadFile} from '../firebase/config'


const CargaImagenes = () => {

    const [file, setFile]=useState(null)
    const  handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            const result = await uploadFile(file)
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }
        
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="" id="" onChange={e=>setFile(e.target.files[0])} />
      <button className='btn btn-success'>cargar foto</button>
    </form>
  )
}

export default CargaImagenes
