import { useEffect } from 'react'

import { restart } from './redux/slices/game/slice'
import { useAppDispatch } from './hook'
import BoardComponent from './components/BoardComponent'

import styles from './App.module.css'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(restart())
  }, [])

  return (
    <div className={styles.app}>
      <BoardComponent />
    </div>
  )
}

export default App
