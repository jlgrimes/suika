import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { TaskItem } from "./task-item"
import { TopicProgressIndicator } from "./topic-progress-indicator"

export const TopicCard = () => {
  const tasks = [{
    id: 'task-1',
    description: 'Resolve the ticket'
  }, {
    id: 'task-2',
    description: 'Approve the PR'
  }]

  return (
    <div>
      <CardHeader>
        <CardTitle>Work</CardTitle>
        <TopicProgressIndicator />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {tasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </CardContent>
    </div>
  )
}