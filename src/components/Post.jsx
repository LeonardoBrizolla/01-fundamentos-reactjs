import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://github.com/leonardobrizolla.png" 
            className={styles.avatar} 
          />

          <div className={styles.authorInfo}>
            <strong>Leonardo Brizolla</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time 
          title="08 de junho às 11:31" 
          dateTime="2022-06-08 11:31:00"
        >
            Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
    </article>
  )
}
