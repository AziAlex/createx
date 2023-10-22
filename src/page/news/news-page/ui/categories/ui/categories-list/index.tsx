import React, { Dispatch, FC, SetStateAction } from 'react'
import { newsCategories } from '@/shared/data/newsDb'
import Button from '@/shared/ui/btns/btn'
import { TNews } from '@/shared/types/news'
import styles from './style.module.scss'

interface ICategoriesListProps {
  currentCategory: TNews | 'All News'
  setCurrentCategory: Dispatch<SetStateAction<TNews | 'All News'>>
}

const CategoriesList: FC<ICategoriesListProps> = ({ currentCategory, setCurrentCategory }) => {

  const handleClick = (category: TNews | 'All News') => {
    category !== currentCategory && setCurrentCategory(category)
  }
  return (
    <div className={styles.wrap}>
      <Button
        onClick={() => handleClick('All News')}
        size={'regular'}
        title={'All News'}
        active={currentCategory === 'All News'}
        text={currentCategory !== 'All News'}
      />
      {newsCategories.map((category, idx) => (
        <Button
          key={idx}
          onClick={() => handleClick(category)}
          size={'regular'}
          title={category}
          active={currentCategory === category}
          text={currentCategory !== category}
        />
      ))
      }
    </div>
  )
}

export default CategoriesList
