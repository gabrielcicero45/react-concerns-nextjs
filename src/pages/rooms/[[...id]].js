import { fetchReservations } from "@/infrastructure/inner/fetchReservations";
import { Rooms } from "@/ui/pages/Rooms";
import { uniqBy } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const RoomsPage = ({ roomId, rooms, reservations, isLoading }) => {
  const router = useRouter();
  const hasSelectedRoom = router.query.id !== undefined;

  useEffect(() => {
    if (isLoading || hasSelectedRoom) {
      return;
    }
    getFirstRoom();
  }, [isLoading, reservations, hasSelectedRoom]);

  const getFirstRoom = () => {
    const [firstRoom] = rooms;
    router.push(`${firstRoom.id}`);
  };

  if (isLoading || !hasSelectedRoom) {
    return <>Loading... </>;
  }

  return (
    <Rooms
      id={Number(router.query.id)}
      rooms={rooms}
      reservations={reservations}
    />
  );
};

export async function getServerSideProps() {
  const reservations = await fetchReservations();

  const rooms = reservations
    ? uniqBy(
        reservations.map((reservation) => reservation.room),
        "id"
      )
    : undefined;
  const isLoading = reservations === undefined;

  return {
    props: {
      reservations: JSON.parse(JSON.stringify(reservations)),
      rooms,
      isLoading,
    },
  };
}

export default RoomsPage;
