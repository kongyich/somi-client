import { FC } from 'react'
import styles from './styles/QuestionArea.module.scss'

type PropsType = {
  fe_id: string
  props: {
    title: string
    placeholder?: string
  }
}

const QuestionArea: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder } = props

  return <>
    <p>{title}</p>
    <div className={styles.textAreaWrapper}>
      <textarea name={fe_id} placeholder={placeholder} rows={5} />
    </div>
  </>
}

export default QuestionArea
