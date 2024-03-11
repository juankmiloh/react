import { IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import "./TaskInfo.scss";

export const TaskInfo = () => {
  const totalTask = 100;
  const totalTasksCompleted = 37;

  return (
    <div className="tasks-info-container">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText color={"dark"}>{totalTask}</IonText>
            <IonText color={"dark"}>Tareas</IonText>
          </IonCol>
          <IonCol>
            <IonText color={"dark"}>{totalTasksCompleted}</IonText>
            <IonText color={"dark"}>Completadas</IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
