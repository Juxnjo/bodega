import { useForm } from 'react-hook-form'
import { useProducts } from '../context/ProductsContext'

function ProductFormPage () {
  const { register, handleSubmit } = useForm()
  const {createProduct} = useProducts()
  

  const onSubmit = handleSubmit(data => {
    createProduct(data)
  })

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <form onSubmit={onSubmit}>
        <input
          type='number'
          placeholder='Code'
          {...register('code')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          autoFocus
        />
        <textarea
          rows='3'
          placeholder='Name'
          {...register('name')}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  )
}

export default ProductFormPage
