[1,"Before data cleaning: Importing the data"],
 [2,"Check for importing issues such as broken lines when importing .csv files"],
 [2,"Make sure you have unique IDs"],
 [2,"De-identify all data and save in a new .dta file"],
 [2,"Never make any changes to the raw data"],
[1,"Important steps for data cleaning"],
 [2,"Label variables, don’t use special characters"],
 [2,"Recode and label missing values: your data set should not have observations with -777, -88 or -9 values, for example"],
 [2,"Encode variables: all categorical variables should be saved as labeled numeric variables, no strings"],
 [2,"Don’t change variable names from questionnaire, except for nested repeat groups and reshaped roster data"],
 [2,"Test variables consistency"],
 [2,"Identify and document outliers"],
 [2,"Compress dataset so it is saved in the most efficient format"],
 [2,"Save cleaned data set with an informative name. Avoid saving in a very recent Stata version"],
[1,"Optional steps in data cleaning"],
 [2,"Order variables – unique ID always first, then same order as questionnaire"],
[2,"Drop variables that only make sense for questionnaire review (duration, notes, calculates)"],
 [2,"Rename roster variables"],
 [2,"Categorize variables listed as “others”"],
 [2,"Add metadata as notes: original survey question, relevance, constraints, etc"]