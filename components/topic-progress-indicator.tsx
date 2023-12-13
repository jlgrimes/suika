import { Progress } from "./ui/progress"

export const TopicProgressIndicator = () => {
  return (
    <Progress value={50} className="h-2 w-[30%] rounded-lg [&>div]:bg-red-300" />
  )
}