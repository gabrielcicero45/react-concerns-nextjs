import { Students } from "@/ui/pages/Students";
import { useReservations } from "@/application/hooks/useReservations";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const StudentsPage = () => {
  const router = useRouter()
  const hasSelectedStudent = router.query.id !== undefined;
  const { reservations, students, isLoading } = useReservations();

  useEffect(() => {
    if(isLoading || hasSelectedStudent){
      return;
    }
      getFirstStudent()
  }, [isLoading,reservations,hasSelectedStudent ])
  
  const getFirstStudent = () => {
    const [firstStudent] = students;

    router.push(`${firstStudent.id}`)
  }

  if (isLoading || !hasSelectedStudent) {
    return <>Loading...</>;
  }

  return <Students id={Number(router.query.id)} students={students} reservations={reservations}/>;
};

export default StudentsPage;
