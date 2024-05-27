import instance from "@/utilites/Instance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NextRequest, NextResponse } from "next/server";

const initialState = {
  patientData: [],
  isLoading: false,
};
export const fetchPatient = createAsyncThunk(
  "patients/getPatients",
  async () => {
    try {
      const res = await instance.get(`/api/addPatients`);
    //   console.log('res', res)
      const result = await res.data;
      return result.response;
    } catch (error) {
        console.log('error', error)
    }
  }
);

export const deletePatient = createAsyncThunk(
  "patients/deletePatients",
  async (id:string) => {
  try {
    await instance.delete("/api/addPatients", { data: { id: id } });
    // NextResponse({status:200,message:"okay"})
    return id;

  } catch (error) {
    console.error("Error deleting patient:", error);
  }
  }
);

const patientSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patientData = action.payload;
      })
      .addCase(fetchPatient.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deletePatient.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.patientData = state.patientData.filter(
          (patient) => patient.id !== action.payload
        );
      })
      .addCase(deletePatient.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const patientReducer = patientSlice.reducer
