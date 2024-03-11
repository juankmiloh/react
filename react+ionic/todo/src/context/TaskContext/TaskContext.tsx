import { useState, useEffect, useRef, createContext, Children } from "react";
import { IonModal, IonContent } from "@ionic/react";
import { TaskContextTypes } from "./TaskContext.type";

export const TaskContext = createContext<TaskContextTypes.Context>({
  totalTasks: 0,
  totalTasksCompleted: 0,
  tasks: [],
  completedTasks: [],
  openFormTask: () => {},
  createTask: () => {},
  checkUncheckCompleted: () => {},
});

export const TaskProvider = (props: TaskContextTypes.Props) => {
  const { children } = props;
  const modalRef = useRef<HTMLIonModalElement>(null);

  const openFormTask = () => modalRef.current?.present();
  const closeFormTask = () => modalRef.current?.dismiss();

  const valueContext: TaskContextTypes.Context = {
    totalTasks: 10,
    totalTasksCompleted: 2,
    tasks: [],
    completedTasks: [],
    openFormTask,
    createTask: () => {},
    checkUncheckCompleted: () => {},
  };

  return (
    <TaskContext.Provider value={valueContext}>
      {children}

      <IonModal
        ref={modalRef}
        trigger="open-modal"
        initialBreakpoint={0.35}
        breakpoints={[0, 0.35]}
      >
        <IonContent className="ion-padding">
          <h2>Task Form...</h2>
        </IonContent>
      </IonModal>
    </TaskContext.Provider>
  );
};
