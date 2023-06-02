import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import Detail from "../components/Detail"
import SimilarExercises from "../components/SimilarExercises"

import { exerciseOptions, fetchData } from '../utils/fetchData'

const Exercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
      
    }
    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises 
      targetMuscleExercises={targetMuscleExercises} 
      equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default Exercise