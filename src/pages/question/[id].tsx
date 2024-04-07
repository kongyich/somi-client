import { getComponent } from '@/src/components/QuestionComponents'
import styles from '@/styles/Question.module.scss'

type PropsType = {
  errno: number,
  data?: {
    id: string
    title: string
    js?: string,
    desc?: string
    css?: string
    isPublished: boolean
    isDeleted: boolean
    componentList: Array<any>
  }
  msg?: string
}

const Question = (props: PropsType) => {
  const { errno, data, msg = '' } = props

  if (errno !== 0) {
    return (
      <div>
        <h1>error</h1>
        <div>{msg}</div>
      </div>
    )
  }

  const { id, title, desc = '', isDeleted, isPublished, componentList } = data || {}

  // 已删除提示错误
  if (isDeleted) {
    return (
      <div>
        <h1>error</h1>
        <div>{msg}</div>
      </div>
    )
  }

  // 未发布提示错误
  if (!isPublished) {
    return (
      <div>
        <h1>error</h1>
        <div>{msg}</div>
      </div>
    )
  }

  const ComponentListElem = (
    <>{
      componentList?.map(c => {
        const ComponentElem = getComponent(c)

        return (
          <div key={c.fe_id} className={styles.componentWrapper}>
            {ComponentElem}
          </div>
        )
      })
    }</>
  )

  return (
    <form method='post' action="/api/answer">
      <input type="hidden" name="questionId" value={id} />

      {ComponentListElem}

      <div className={styles.submitBtnContainer}>
        <button type="submit">提交</button>
      </div>
    </form>
  )
}


export default Question
