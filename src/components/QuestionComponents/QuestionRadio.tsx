import { FC } from 'react'
import styles from './styles/QuestionRadio.module.scss'

type PropsType = {
  fe_id: string
  props: {
    title: string
    options: Array<{
      value: string,
      text: string
    }>
    value: string
    isVertical: boolean
  }
}

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const { title, options, value, isVertical } = props

  let liClassName = isVertical ? styles.verticalItem : styles.horizontalItem


  return <>
    <p>{title}</p>
    <ul className={styles.list}>
      {
        options.map(c => {
          const { value: val, text } = c
          return (<li key={val} className={liClassName}>
            <label>
              <input type="radio" name={fe_id} value={val} defaultChecked={val === value} />
              {text}
            </label>
          </li>)
        })
      }
    </ul>
  </>
}

export default QuestionRadio
