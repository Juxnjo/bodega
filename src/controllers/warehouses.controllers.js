import { pool } from '../db.js'

export const readWarehouses = async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM warehouses')
  res.json(rows)
}

export const readWarehouse = async (req, res) => {
  try {
    const { code } = req.params
    const { rows } = await pool.query(
      'SELECT * FROM warehouses WHERE LOWER(code) = LOWER($1)',
      [code]
    )

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Warehouse not found' })
    }
    res.json(rows)
  } catch (error) {
    console.error('Error querying the database:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const createWarehouses = async (req, res) => {
  try {
    const data = req.body

    const { rows } = await pool.query(
      'INSERT INTO warehouses (code, name, address) VALUES ($1, $2, $3) RETURNING *',
      [data.code, data.name, data.address]
    )

    console.log(rows)
    return res.json(rows[0])
  } catch (error) {
    if (error?.code === '23505') {
      return res.status(409).json({ message: 'Code already exist' })
    }
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteWarehouse = async (req, res) => {
  try {
    const { code } = req.params
    if (!code) {
      return res.status(400).json({ message: 'Warehouse code is required' })
    }
    const { rows, rowCount } = await pool.query(
      'DELETE FROM warehouses WHERE LOWER(code) = LOWER($1) RETURNING *',
      [code]
    )

    if (rowCount === 0) {
      return res.status(404).json({ message: 'Warehouse not found' })
    }

    return res
      .status(200)
      .json({ message: 'Warehouse deleted', warehouse: rows[0] })
  } catch (error) {
    console.log('Error deleting warehouse', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateWarehouse = async (req, res) => {
  try {
    const { code } = req.params
    const data = req.body

    if (!data.code) {
      return res.status(400).json({ message: 'Warehouse code is required' })
    }

    const { rows, rowCount } = await pool.query(
      'UPDATE warehouses SET code = $1, name = $2, address = $3 WHERE LOWER(code) = LOWER($4) RETURNING * ',
      [data.code, data.name, data.address, code]
    )

    if (rowCount === 0) {
      return res.status(404).json({ message: 'Warehouse not found' })
    }

    return res.status(200).json(rows[0])
  } catch (error) {
    console.log('Error updating warehouse:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
