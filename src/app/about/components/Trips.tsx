import { prisma } from "@/lib/prisma";
import React, { useState } from "react";

const getTrips = async () => {
    const Trips = await prisma.trip.findMany({});

    return Trips;
}

const Trips = async () => {
    const data = await getTrips();

    console.log({ data })

    return <div>Trips</div>;
};

export default Trips;

// server component