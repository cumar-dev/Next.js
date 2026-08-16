import React from "react";
type CourseDetailsProps = {
  params: Promise<{
    id: string;
    name: string;
    price: number;
  }>;
};

const CourseDetails = async ({ params }: CourseDetailsProps) => {
  const { id, name, price } = await params;

  return (
   <>
   <div>
    <h1>Course Details: {id}</h1>
    <p>Course Name: {name}</p>
    <strong>Course Price: ${price}</strong>
   </div>
   </>
  );
};

export default CourseDetails;
