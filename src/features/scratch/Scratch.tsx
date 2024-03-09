import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../app/store/store"
import { decrement, incrememntByAmount, increment } from "./testSlice";
export default function Scratch() {
    const {data} = useAppSelector(state => state.test)
    const dispatch = useAppDispatch();
  return (
    <div>
        <h1>Scratch page</h1>
        <h3>The data is: {data}</h3>
        <Button onClick={()=> dispatch(increment())} color='green' content='Increment' />
        <Button onClick={()=> dispatch(decrement())} color='red' content='decrement' />
        <Button onClick={()=> dispatch(incrememntByAmount(5))} color='teal' content='Increment By 5' />
    </div>
  )
}