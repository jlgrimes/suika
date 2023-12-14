import { TaskInterface } from "./task-item"
import { Progress } from "./ui/progress"

interface TopicProgressIndicatorProps {
  tasks: TaskInterface[];
}

export const TopicProgressIndicator = (props: TopicProgressIndicatorProps) => {
  const topicProgress = props.tasks.filter((task) => task.complete).length / props.tasks.length;

  return (
    <Progress value={topicProgress * 100} className={`h-2 rounded-lg ${topicProgress === 1 ? '[&>div]:bg-success' : ''}`} />
  )
}