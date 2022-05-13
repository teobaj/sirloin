import { Button, Card, CardContent, CardHeader, Chip } from "@mui/material"
import { Exercise as ExerciseProps } from "../features/exercises/exercises.model"

const getButtonName = (completed: boolean) => completed ? 'Restart' : 'Complete'

export const Exercise = ({exercise, onToggle, onDelete}:{exercise:ExerciseProps, onToggle?:any, onDelete?: any}) => {
  const styles = {
    card: {
      width: 'clamp(280px, 100%, 380px)'
    },
    list: {
      display: 'flex',
      gap: '0.5rem',
      margin: 0,
      padding: '0.5rem',
      width: 'calc(100% - 0.5rem)',
      justifyContent: 'center',
      boxSizing: 'border-box'
    },
    content: {
      dispaly: 'flex',
      gap: '0.5rem'
    }
  }

  return(
    <Card style={styles.card} >
      <CardContent style={{...styles.content, flexDirection: 'column'}} className={ `${exercise.completed ? 'completed' : ''} `}>
        <header style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'top'}} >
          <h3> {exercise.name}</h3>
          <svg onClick={onDelete} xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          </header>
        <ul style={styles.list as any}>
          {exercise.sets.map((set, index) => <Chip label={set} key={index}></Chip>) }
        </ul>
        <Button variant="contained" onClick={onToggle}>{getButtonName(exercise.completed)}</Button>
      </CardContent>
    </Card>
  )
  
 
}
