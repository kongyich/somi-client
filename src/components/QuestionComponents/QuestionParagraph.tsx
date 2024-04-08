import { FC, CSSProperties } from 'react'

type PropsType = {
  text: string
  isCenter?: boolean
}

const QuestionParagraph: FC<PropsType> = ({ title, isCenter }) => {

  const style: CSSProperties = {}
  if (isCenter) style.textAlign = 'center'

  const textlist = title.split('\n')

  return <>
    {
      textlist.map((t, index) => (
        <span>
          { index > 0 && <br /> }
          {t}
        </span>
      ))
    }
  </>
}

export default QuestionParagraph
