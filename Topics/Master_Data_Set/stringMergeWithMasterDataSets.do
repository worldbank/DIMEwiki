
	** The globals in this file are made up globals for this example. See the 
	*  DIME Wiki article on file paths for explination.

	* Load monitor raw data
	
	import delimited using "$monitorRaw/farmer_monitoring_data.csv"

	*Common different spelling
	replace first_name = "Christopher" 	if frist_name == "Christoffer" 	& last_name == "Smith" 		 & village == "River Creek"

	*Translitteration decreptancies from languages with different script
	replace first_name = "Mahmood" 		if frist_name == "Mahmod" 		& last_name == "Al-Meghribi" & village == "Mountain Bend"

	*Applying the case convention used in the maste data set
	replace first_name = "Rose" 		if frist_name == "ROSE" 		& last_name == "Jones" 		 & village == "Meadow Spring"

	/*Merge the monitoring data set with the master data set. This step will 
		require a lot of preperation and it is common that one have to go back 
		and make numerous additions above before the merge works without errors,
		but after this work is done here, it is done once and for all and your 
		data sets will merge and append effortlessly throughout your project. 
		Here some important detail on the command below:
		-Only use 1:1 matching in this case. Stata will then give you an 
		 error if there is any ambiguity in which farmer is which. You have 
		 to add more identifying varaibles or solve ambiguis cases manually 
		 before you can proceede
		-assert(using match). This options test that all observation after the 
		 merge is either in both data sets (match) or only in the master data 
		 set (using). We should not proceede if an observation is only found in 
		 the monitor data set. For all those cases we want to follow up manually.
		 We want to see if there is a typo that causing that the observation is
		 not matched. If we are 100% convinced that this is an observation we 
		 have not encountered before, then we should go back and add that 
		 obvservation to the data set before proceeding with this script. In 
		 order to know what observations casue an error ins assert(match using) 
		 you can remove that option, run the code and inspect the variable _merge. 
		 However, your task is not complete before you can run the command below 
		 when you include assert(match using).
		-keep(match). In the end we do not want to add any observation from the 
		 master data set to the monitoring data set, so we only keep the 
		 observations that are in both.
		-keepusing(farmer_ID). We do not need to copy all variables from the 
		 master data set. This option allows us to list the varaibles we want to
		 include. The examples given here is the ID variable and a dummy for being
		 in the baseline sample. We always want to include the ID variable, but 
		 what other variibles you include varies between every project.
		
	*/
	merge 1:1 first_name last_name village using "$masterFinal/farmer_master_data_set.dta",  assert(match using) keep(match) keepusing(farmer_ID baseline_sample)
	
	**Save data with an ID that we can use when merging this data set to any 
	* other data set in our project.
	save "$monitorInt/farmer_monitoring_data.dta"
