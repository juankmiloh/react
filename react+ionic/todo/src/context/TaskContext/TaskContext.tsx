import { useState, useEffect, useRef, createContext } from "react";
import { IonModal, IonContent } from "@ionic/react";
import { size } from "lodash";
import { TaskContextTypes } from "./TaskContext.type";
import { TaskForm } from "../../components/Task";
import { TaskModel } from "../../models";
import { Task } from "../../api";

const taskController = new Task();

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
  const [tasks, setTask] = useState<TaskModel[]>([]);
  const [completedTasks, setCompletedTask] = useState<TaskModel[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState(0);

  // Se ejecuta cuando inicia nuestra aplicacion (Obtiene de manera automatica las tareas guardadas)
  useEffect(() => {
    obtainTask();
  }, []);

  const openFormTask = () => modalRef.current?.present();
  const closeFormTask = () => modalRef.current?.dismiss();

  const createTask = (task: TaskModel) => {
    taskController.create(task);
    obtainTask();
  };

  const obtainTask = () => {
    const response = taskController.obtain();

    // Ordenar las tareas ordenadas de la mas nueva a la mas vieja
    response.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    const taskTemp = response.filter((task) => !task.completed);
    const completedTasks = response.filter((task) => task.completed);

    setTask(taskTemp);
    setCompletedTask(completedTasks);

    setTotalTasks(size(response));
    setTotalTasksCompleted(size(completedTasks));
  };

  const checkUncheckCompleted = (id: string, check: boolean) => {
    const newTasks = [...tasks, ...completedTasks];
    console.log("newTasks --> ", newTasks);
    newTasks.filter((task) => {
      if (task.id === id) task.completed = check;
    });

    taskController.changeAllTasks(newTasks);
    obtainTask();
  };

  const valueContext: TaskContextTypes.Context = {
    totalTasks,
    totalTasksCompleted,
    tasks,
    completedTasks,
    openFormTask,
    createTask,
    checkUncheckCompleted,
  };

  return (
    <TaskContext.Provider value={valueContext}>
      {children}

      <IonModal
        ref={modalRef}
        trigger="open-modal"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25]}
      >
        <IonContent className="ion-padding">
          <TaskForm onClose={closeFormTask} />
        </IonContent>
      </IonModal>
    </TaskContext.Provider>
  );
};
