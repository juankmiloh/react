import { IonPage, IonContent } from "@ionic/react";
import { Avatar, TaskInfo, MenuOptions } from "../components/Profile";

export const Settings = () => {
  return (
    <IonPage>
      <IonContent>
        <Avatar />
        <TaskInfo />
        <MenuOptions />
      </IonContent>
    </IonPage>
  );
};
