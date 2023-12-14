import {
  CardTitle,
} from "@/components/ui/card"
import { TaskItem } from "./task-item"
import { TopicProgressIndicator } from "./topic-progress-indicator"
import { BriefcaseIcon } from "lucide-react"
import { useState } from "react"
import { CompletedTasksAccordion } from "./completed-tasks-accordion"

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
  const incompleteTasks = tasks.filter((task) => !task.complete);
  const completedTasks = tasks.filter((task) => task.complete);

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
    <div className="w-full md:w-1/2 xl:w-1/3 flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 mb-1 items-center">
          <BriefcaseIcon />
          <CardTitle>Work</CardTitle>
        </div>
        <TopicProgressIndicator tasks={tasks} />
      </div>
      {incompleteTasks.length > 0 && (
        <div className="flex flex-col gap-2">
          {incompleteTasks.map((task) => <TaskItem key={task.id} task={task} handleTaskChecked={handleTaskChecked} />)}
        </div>
      )}
      {completedTasks.length > 0 && <CompletedTasksAccordion completedTasks={completedTasks} handleTaskChecked={handleTaskChecked} />}
    </div>
  )
}