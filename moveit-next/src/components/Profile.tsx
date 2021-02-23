import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/vieirasamuel.png" alt="Samuel Vieira" />
      <div>
        <strong>
          Samuel Vieira
        </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
          </p>
      </div>
    </div>
  )
    
}