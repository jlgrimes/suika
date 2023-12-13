'use client'

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
import { BriefcaseIcon } from "lucide-react"
import { useState } from "react"

export const TopicCard = () => {
  const [tasks, setTasks] = useState([{
    id: 'task-1',
    description: 'Resolve the ticket',
    complete: false
  }, {
    id: 'task-2',
    description: 'Approve the PR',
    complete: false
  }, {
    id: 'task-3',
    description: 'Complete PowerPoint',
    complete: false
  }]);

  const handleTaskChecked = (taskId: string) => {
    // TODO: This is going to be the logic to feed to backend
    const targetTaskIdx = tasks.findIndex(({ id }) => id === taskId);
    if (targetTaskIdx < 0) return console.error('Task not found in task list.');

    let newTasks = [...tasks];
    newTasks[targetTaskIdx] = {
      ...tasks[targetTaskIdx],
      complete: !tasks[targetTaskIdx].complete
    }

    setTasks(newTasks);
  }

  return (
    <div>
      <CardHeader>
        <div className="flex gap-2 mb-1 items-center">
          <BriefcaseIcon />
          <CardTitle className="select-none">Work</CardTitle>
        </div>
        <TopicProgressIndicator tasks={tasks} />
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {tasks.map((task) => <TaskItem key={task.id} task={task} handleTaskChecked={handleTaskChecked} />)}
      </CardContent>
    </div>
  )
}