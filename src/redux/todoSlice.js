import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk  is used for API integration 

//  step 1
//create AsyncThunk is usec for API integration , having two parameters 
// name and cllback function and inside that callback function we have to write 
//api integration code 
// thunk shoudl return data  got from API

// step2 
/// tgunk  will not be executed  unlesss and untill u call it.
//  using dispatch , make a call in coponnet 


//step3 
// go to extrarduces and get ur work done, have a command over promises 
export const getData = createAsyncThunk("getData", async () => {

	const res = await fetch("http://localhost:4000/api/v1/tasks", {
		method: 'GET'
	})
	const output = await res.json();

	console.log(output);
	// getting output as object that is havingkey as data containing real array or required data
	return output.data;



})


// createAsyncThunk("getData", async () => {

// 	const res = await fetch("http://localhost:4000/api/v1/tasks", {
// 		method: 'GET'
// 	})

// 	const output = await res.json();

// 	console.log(output.data);
// 	// getting output as object that is havingkey as data containing real array or required data

// 	// always return the data that u got from API
// 	return output.data;


// })

// fetch("http://localhost:4000/api/v1/tasks", {
// 	method: 'GET'
// }).then(async (response) => {
// 	const res = await response.json()
// 	// console.log(res.data)


// })



// post function 


// first create a form, gather a data there, 
// then call thunk  
// then  u reach here in  thunk 
// first data will be submitted  in backedn in thunk
// then it willl be maintained  in redux  , initialstate

export const postData = createAsyncThunk("postdata", async (data) => {

	// backend data submission 
	const res = await fetch("http://localhost:4000/api/v1/task", {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data) //  converting object into  string format

	})

	const output = await res.json();


	return output.data;

})







export const todoSlice = createSlice(
	{
		name: "todo",
		initialState: {
			data: []
		},
		extraReducers: (builder) => {


			builder.addCase(getData.fulfilled, (state, action) => {
				state.data = action.payload; // Update state with fetched data
				console.log("data of action is ", action.payload); // Optional: Log the fetched data
			});




			// then here , pusing or maintaining data in initialstate 
			builder.addCase(postData.fulfilled, (state, action) => {
				state.data.push(action.payload)
				console.log("Data received from postData:", action.payload); // Optional: Log the posted data
			});

		},

	}
)

export const { addTask } = todoSlice.actions;

export default todoSlice.reducer;


