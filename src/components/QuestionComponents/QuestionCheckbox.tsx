import { FC, useState, useEffect } from react
import styles from './styles/QuestionCheckbox.module.scss'

type PropsType = {
  fe_id: string,
  props: {
    title: string
    isVertical?: boolean
    list: Array<{
      value: string,
      text: string,
      checked: boolean
    }>
  }
}

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {

  const { title, list, isVertical } = props

  const [selectedValues, setSelectedValues] = useState<string[]>([])

  // 初始化默认选中
  useEffect(() => {
    list.forEach(item => {
      const { value, checked } = item

      if (checked) {
        setSelectedValues(selectVal => selectVal.concat(value))
      }
    })
  }, [list])
  let className = isVertical ? styles.verticalItem : styles.horizontalItem

  function toggleChecked(value) {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectVal => selectVal.filter(v => v !== value))
    } else {
      // 未被选中，则增加选择
      setSelectedValues(selectedValues.concat(value))
    }
  }

  return <>
    <p>{title}</p>
    <input type="hidden" name={fe_id} value={selectedValues.toString()} />

    <ul className={styles.list}>
      {
        list.map(c => {
          const { value, text, checked } = c
          return (
            <li key={value} className={className}>
              <input type="checkbox" checked={selectedValues.includes(value)}
                onChange={() => toggleChecked(value)} />
              {text}
            </li>
          )
        })
      }
    </ul>
  </>
}

export default QuestionCheckbox
