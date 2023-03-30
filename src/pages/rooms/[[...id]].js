import { useReservations } from "@/application/hooks/useReservations";
import { Rooms } from "@/ui/pages/Rooms";
import { useRouter } from "next/router";
import React, { useEffect} from "react";

const RoomsPage = () => {
  const {rooms, reservations, isLoading} = useReservations()
  const router = useRouter()
  const hasSelectedRoom = router.query.id !== undefined;
  
  useEffect(() => {
    if(isLoading || hasSelectedRoom){
      return;
    }
      getFirstRoom()
  }, [isLoading, reservations,hasSelectedRoom])
  
  const getFirstRoom = () => {
    const [firstRoom] = rooms;

    router.push(`${firstRoom.id}`)
  }

  if (isLoading || !hasSelectedRoom) {
    return <>Loading...</>;
  }

  return <Rooms id={Number(router.query.id)} rooms={rooms} reservations={reservations} />;
};

export default RoomsPage;
