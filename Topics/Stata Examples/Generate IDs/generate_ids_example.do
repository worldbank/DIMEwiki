
	clear
	
	**Set seed to make this replicable. Note that you cannot replicate this if you 
	* change the number of observations. It is only replicable as long as the number 
	* of observations is the same.
	set seed 32307

	***********************
	*Creating mock data

	set obs 10000

	**We need something stable to sort on within the smallest component. Use multiple
	* variables like, HH head name, HH head's father's name. In this example we use a
	* random number to sort on instead of a list of names etc. But we need some combination 
	* of variables that uniquely identifies the HHs
	gen mock_name = runiform()

	*Randomly genreates 4 districs with 8 villages within them 
	gen distcode = ceil(runiform() * 4)
	gen villcode = distcode * 100 + ceil(runiform() * 8) //The first digit indicates district

	*End of createing mock data


	***********************
	*Create IDs

	**Just as we included the district code in the village code above, it would be 
	* very handy to do the same for household IDs (HHIDs). However, it is very important 
	* that we make sure that there are enough households in each village. If there were only 
	* one HH in a village, then it would not matter if the last part of the ID is random if 
	* the first part of it is the village code.
	
	**In the tab below we see the number of observations per village. There is no hard 
	* rule for how many observations it must be. The more sensitive the data is the higher 
	* the number should be. And if this list is just the sampling frame, then we need to base 
	* our decision on the number of HHs that will actually be included in the data collection. 
	* And we also need to leave room for attrition as if there is only a couple of HHs left in 
	* the data collection in endline then it does not matter how many there were in the baseline.
	* Finally, the more heterogenous a population is the higher the number need to be, as you can 
	* make out individuals in data with high variation.
	tab villcode distcode


	**If you and the PI of the project have decided that you can include district 
	* and village codes (or similar) then this is a way to make unique IDs.
	
	**Make sure that you have a unique sort. See creation of mock_name variable above. (since 
	* village code is based in district code, disitrict code could have been removed here, but 
	* I leave in to show how to do with multiple high level ID vars)
	isid distcode villcode mock_name
	sort distcode villcode mock_name

	*Generate a random variable for each household to generate a random order in the village
	gen hhrand	 = runiform()

	**Generate the rank order on the hhrand var for each HH within the same village. (again, since
	* village code is based in district code, disitrict code could have been removed here, but I 
	* leave in to show how to do with multiple high level ID vars)
	sort distcode villcode hhrand
	by 	 distcode villcode : gen hhcode = _n
	
	
	**Use the village code (that includes the disctric code) and the hh code to generate IDs. Multiply 
	* with 10,000 if there is a chance there will be 1000 or more HH in one village.
	gen HHID = villcode * 1000 + hhcode
	
	*If you prefer a sting ID var, this is how to genrate it.
	tostring HHID, gen(HHID_str)
	replace HHID_str = "HHID" + HHID_str
	
	*test results
	isid HHID
	isid HHID_str

