import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from '../pagination/Pagination'

import Card from '../Card/Card'

const CardList = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>Recent Posts</h1>
     <div className={styles.posts}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
     </div>
      <Pagination/>
    </div>
  )
}

export default CardList
