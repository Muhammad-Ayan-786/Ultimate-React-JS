import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Header</h1>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header