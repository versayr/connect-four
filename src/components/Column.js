import { Cell } from './Cell';

export const Column = ({ values, index, makeMove }) => {
  return (
    <div className="column" onClick={() => makeMove(index)} >
      {values.map((val, i) => {
        return <Cell key={`cell${index}${i}`} value={val}></Cell>
      })}
    </div>
  )
}
