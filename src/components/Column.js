import { Cell } from './Cell';

export const Column = ({ values }) => {
  
  return (
    <div className="column">
      {values.map((val, i) => {
        return <Cell key={`piece${i}`} value={val}></Cell>
      })}
    </div>
  )
}
