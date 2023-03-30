import { Students } from "@/ui/pages/Students";
import { useRouter } from "next/router";
import { uniqBy } from "lodash";
import React, { useEffect } from "react";
import { fetchReservations } from "@/infrastructure/inner/fetchReservations";

const StudentsPage = ({ studentId, reservations, students, isLoading }) => {
  const router = useRouter();
  const hasSelectedStudent = router.query.id !== undefined;

  useEffect(() => {
    if (isLoading || hasSelectedStudent) {
      return;
    }
    getFirstStudent();
  }, [isLoading, reservations, hasSelectedStudent]);

  const getFirstStudent = () => {
    const [firstStudent] = students;
    router.push(`${firstStudent.id}`);
  };

  if (isLoading || !hasSelectedStudent) {
    return <>Loading...</>;
  }

  return (
    <Students
      id={Number(router.query.id)}
      students={students}
      reservations={reservations}
    />
  );
};

export async function getServerSideProps() {
  const reservations = await fetchReservations();

  const students = reservations
    ? uniqBy(
        reservations.map((reservation) => reservation.student),
        "id"
      )
    : undefined;

  const isLoading = reservations === undefined;

  return {
    props: {
      reservations: JSON.parse(JSON.stringify(reservations)),
      students,
      isLoading,
    },
  };
}

export default StudentsPage;
