import { IonPage, IonContent } from "@ionic/react";
import { Header } from "../components";

export const Tasks = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <p>Tareas...</p>
      </IonContent>
    </IonPage>
  );
};
