import { TaskInterface } from "./task-item"
import { Progress } from "./ui/progress"

interface TopicProgressIndicatorProps {
  tasks: TaskInterface[];
}

export const TopicProgressIndicator = (props: TopicProgressIndicatorProps) => {
  const topicProgress = props.tasks.filter((task) => task.complete).length / props.tasks.length;
  console.log(topicProgress)

  return (
    <Progress value={topicProgress * 100} className="h-2 w-[30%] rounded-lg [&>div]:bg-red-300" />
  )
}