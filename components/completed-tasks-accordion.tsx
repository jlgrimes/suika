import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TaskInterface, TaskItem } from "./task-item"

interface CompletedTasksAccordionProps {
  completedTasks: TaskInterface[];
  handleTaskChecked: (taskId: string) => void;
}

export const CompletedTasksAccordion = (props: CompletedTasksAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="[&>*]:border-0" disabled={props.completedTasks.length === 0}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="pt-0">Finished</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          {props.completedTasks.map((task) => <TaskItem key={task.id} task={task} handleTaskChecked={props.handleTaskChecked} />)}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}