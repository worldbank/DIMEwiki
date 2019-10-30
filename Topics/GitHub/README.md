# DIME Analytics GitHub Templates

In this folder there are templates for files with Git/GitHub specific purpose. See the corresponding section below for instructions for each file.

* [.gitignore template](#dime-analytics-.gitignore-template) - a .gitignore files controls which types of files will be shared in the GitHub repository
* [placholder template](#dime-analytics-placeholder-template) - a file that can be used to share an empty folder in the GitHub repository

## DIME Analytics .gitignore template

#### Purpose

All repositories should always have a .gitignore file that controls which file are uploaded to the repository. Examples of files that should not be uploaded to GitHub are:

* _Binary file formats_ like .doc/.docx, .dta, .xls/.xlsx, .pdf etc.
  * The opposite to _binary file formats_ are _raw text file formats_. Examples are .do, .R, .txt, .tex, .csv etc. GitHub is intended to be used with raw text files
  * It is technically possible to upload _binary files_ to the repository, but they will slow down working with the repo if they are edited frequently.
* Password files and tokens. The code we share on GitHub might need access to a password, for example to access an API, and they should be ignored, and instead being shared in the most secure way, and be copied to the clone manually.
* There are system generated files - like `.DS_store` on Macs - that will make the repository messy if they are shared.

#### Why use a template?

Project teams usually have to customize their .gitignore to fit the needs of their project, but they should always start from a template. The templates offered by GitHub tend to be specific to a programming language like Java, C++ or web-design. DIME Analytics have designed a template that is a great starting point for research teams coding in Stata, R, Python, Matlab etc.

GitHub has a template for Python, but we still recommend using our template as it is designed for research teams that share data and have outputs. The Python template on GitHub is designed for use cases more common in computer science and software development.

#### How to use this template

This template is shared under the MIT LICENSE and is therefore free for anyone to use and to modify for their own purposes. If you are familiar with .gitignore files, then you can set up your own file however you want, but below are instructions for one way how to do so correctly that we have found are easy to follow even for people with little GitHub Experience.

1. Go to the main page of your repository at GitHub.com. The main page is the page in your repository is the page that looks like this: https://github.com/worldbank/DIMEwiki
1. In this top folder on the main page, click `Create new file`
1. In the _Name your file..._ field, type `.gitignore`. The `.` before `gitignore` must be included.
1. Once you have types `.gitignore`, a button will show up that says `Choose .gitignore: None`. Click that button and select any template. It does not matter which template you select as we will replace the content with the DIME Analytics template in the next step. We are only doing this to make sure the file is set up correctly.
1. Either commit the file now, or do the next step and then commit. If you commit now, you can pull the edits and do the next step in your clone, otherwise you must continue in the browser.
1. Replace the content in you .gitignore file with the content in [DIME Analytics template](https://github.com/worldbank/DIMEwiki/blob/master/Topics/GitHub/gitignore_template.txt) and then commit this file to the repository.

If necessary, you can now make additions to the .gitignore file that are specific to your project. But you can also do that at any point in the future.

## DIME Analytics placeholder template
