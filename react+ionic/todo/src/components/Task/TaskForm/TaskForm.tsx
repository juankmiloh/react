import { IonInput, IonButton, IonSpinner } from "@ionic/react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./TaskForm.form";
import { TaskFormTypes } from "./TaskForm.types";
import "./TaskForm.scss";

export const TaskForm = (props: TaskFormTypes.Props) => {
  const { onClose } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: (formValue) => {
      console.log(formValue);
      setTimeout(() => {
        onClose();
      }, 3000);
    },
  });

  return (
    <div className="task-form">
      <IonInput
        placeholder="Descripción de la tarea"
        onIonChange={(e) => formik.setFieldValue("task", e.detail.value)}
        color={formik.errors.task}
      />
      <IonButton expand="block" onClick={() => formik.handleSubmit()}>
        {formik.isSubmitting ? <IonSpinner name="crescent" /> : "Crear"}
      </IonButton>
    </div>
  );
};
