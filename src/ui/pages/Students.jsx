import { Calendar } from "../components/Calendar";
import cx from "./Students.module.scss";
import { filterReservationsByStudent } from "../../domain/filterReservationsByStudent";
import { useRouter } from "next/router";

export const Students = ({ id, students, reservations }) => {
  const router = useRouter();
  const selectedStudent = students.find((courseTaker) => courseTaker.id === id);
  const selectedStudentReservations = filterReservationsByStudent(
    reservations,
    selectedStudent
  );

  const entries = selectedStudentReservations.map((reservation) => ({
    id: reservation.id,
    title: `${reservation.room.number} - ${reservation.room.name}`,
    dateStart: reservation.startDate,
    dateEnd: reservation.endDate,
    group: reservation.id,
  }));

  return (
    <>
      <div className={cx.placeSelectContainer}>
        <select
          value={id}
          onChange={(event) => router.push(event.target.value)}
        >
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>

      <div className={cx.calendarContainer}>
        <Calendar entries={entries} />
      </div>
    </>
  );
};
