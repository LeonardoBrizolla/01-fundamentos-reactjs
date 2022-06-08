import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        className={styles.cover}
      />
    
      <div className={styles.profile}>
        <img 
          src="https:/github.com/leonardobrizolla.png" 
          className={styles.avatar} 
        />

        <strong>Leonardo Brizolla</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine  size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}