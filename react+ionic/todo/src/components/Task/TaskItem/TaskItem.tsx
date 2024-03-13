import { IonCheckbox } from "@ionic/react";
import { DateTime } from "luxon";
import { useTasks } from "../../../hooks";
import { TaskItemTypes } from "./TaskItem.types";
import "./TaskItem.scss";

export const TaskItem = (props: TaskItemTypes.Props) => {
  const { task } = props;
  const { checkUncheckCompleted } = useTasks();

  const formatDate = (date: Date): string => {
    const time = new Date(date);
    return time.toISOString();
  };

  const onClickCheckbox = (event: any) => {
    // console.log("event", event.detail.checked);
    const isChecked = event.detail.checked;
    checkUncheckCompleted(task.id, isChecked);
  };

  return (
    <div className="task-item">
      <div className="task-item__info">
        <span>{task.description}</span>
        <span>
          {DateTime.fromISO(formatDate(task.created_at)).toRelative()}
        </span>
      </div>

      <IonCheckbox checked={task.completed} onIonChange={onClickCheckbox} />
    </div>
  );
};
