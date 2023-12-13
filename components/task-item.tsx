import { Checkbox } from "@/components/ui/checkbox"

export interface TaskInterface {
  id: string;
  description: string;
}

interface TaskItemProps {
  task: TaskInterface;
}

export const TaskItem = (props: TaskItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={props.task.id} />
      <label
        htmlFor={props.task.id}
        className="text-md peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {props.task.description}
      </label>
    </div>
  )
}