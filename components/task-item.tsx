import { Checkbox } from "@/components/ui/checkbox"

export interface TaskInterface {
  id: string;
  name: string;
  complete: boolean;
}

interface TaskItemProps {
  task: TaskInterface;
  handleTaskChecked: (taskId: string) => void;
}

export const TaskItem = (props: TaskItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={props.task.id} defaultChecked={props.task.complete} onClick={() => props.handleTaskChecked(props.task.id)} />
      <label
        htmlFor={props.task.id}
        className="text-md peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {props.task.name}
      </label>
    </div>
  )
}