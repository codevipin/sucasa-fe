import React, { useEffect } from "react";
import PageLayout from "../../common/components/page-layout/PageLayout";

import { useActionCreators, useAppSelector } from "../../data-access/hooks";
import { selectPresentations } from "../../data-access/presentations/store/selectors";
import Presentations from "../../components/presentations/Presentations";
import AddPresentation from "../../components/presentations/add-presentation/AddPresentation";
import { Presentation as IPresentation } from "../../data-access/presentations/model/presentations.interface";

export default function Presentation() {
  const { fetchAllPresentationsAction, addPresentationAction } =
    useActionCreators();
  const presentations = useAppSelector(selectPresentations);
  const addNewPresentation = (presentation: IPresentation) => {
    addPresentationAction(presentation);
    console.log("emit eveent now", presentation);
  };

  useEffect(() => {
    fetchAllPresentationsAction();
  }, []);
  return (
    <PageLayout
      sidebar={<AddPresentation submitFormHandler={addNewPresentation} />}
      content={<Presentations presentations={presentations} />}
    />
  );
}
