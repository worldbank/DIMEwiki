# Documentation for editing checklist on the DimeWiki.

The DimeWiki is a resource for best practices in data management, field work and other topics related to data work in development research. See the [main page](https://dimewiki.worldbank.org/wiki/Main_Page) of the wiki. On this wiki there are multiple checklists that can be used to help remembering best practices in important steps of the data collection. See those checklists [here](https://dimewiki.worldbank.org/wiki/Check_Lists).

This README file includes documentation on how to [edit an already existing checklist](#edit-a-checklist), how to [create a new checklist](#create-a-checklist) and a [brief technical documentation](#brief-technical-documentation) on how the checklist data is pulled from GitHub and generated to checklist on the wiki. You do not need to understand the technical documentation to edit or create checklists.

If you need help to edit or create a checklist, feel free to contact us at dimewiki@worldbank.org.

## Edit a checklist
To edit a checklist you must have a GitHub account. If you do not have one, create one for free [here](https://github.com/join).

To edit the checklist go to [the checklist folder](https://github.com/worldbank/DIMEwiki/tree/master/Topics/Checklists/checklists) and click the checklist that you want to edit. On the wiki you can find the name of the checklist at the bottom of the checklist.

If you are familiar with GitHub you can clone this repository and edit this file on your computer, but an easier way would be to update it in the browser. To do that, click the pen icon above the file next to the buttons _raw_, _blame_ and _history_.

Here you can edit the checklist. Each checklist item is one array on this format `[number,"text"]`. The **text** must be enclosed in double quotes `"`. If you want to use a double quotes in a text then you need to write `\"` as in `"This is an \"example\"."`. The **number** indicates the title level, where 1 is the section title, and 2 is a sub-item, 3 is a sub-sub item, and so forth. There is no limit how many layers of sub-sub-sub items you use. The numbering of items is generated in the wiki, so if you have two sub-items after each other, both of them should have the number 2. See example below:

```javascript
  [1,"Main title 1 text"],
   [2,"Sub item 1.1 text"],
   [2,"Sub item 1.2 text"],
  [1,"Main title 2 text"],
   [2,"Sub item 2.1 text"],
    [3,"Sub-sub item 2.1.1 text"],
   [2,"Sub item 2.2 text"]
```

The indentation is not necessary but makes the list easier to read. Note that each array **must** be separated with a comma. So if you add a new item, make sure it is followed by a comma unless it is the last item.

When you are done with your edits you need to "commit" your changes, which means saving to GitHub. If you are a collaborator of this repository you have the option to **commit directly** otherwise you will be asked to **propose file change**. When you propose a change the edit will be sent to a collaborator for approval. It is very helpful if enter a description of your edit in the optional description field.

If you make multiple commit by *proposing a file change* you won't see the edits of your previous commits before someone as approved the edits. If you are familiar with *forks* on GitHub you can use them to get around this. Otherwise you have to wait until updates are approved (which usually do not take a long time).

## Create a checklist
To create a checklist you must have a GitHub account. If you do not have one, create one for free [here](https://github.com/join).

To create a new checklist go to [the checklist folder](https://github.com/worldbank/DIMEwiki/tree/master/Topics/Checklists/checklists). In this folder create a file "*chk_checklistName*.js" where you replace *checklistName* with the unique checklist name you pick. Please keep the prefix *chk_* After you created the file you can add content in exactly the same way as already described in section on how to [edit an already existing checklist](#edit-a-checklist). If you are familiar with GitHub you can do these two steps in a code editor by *cloning* the repository, but it is perfectly fine to do these two steps in the browser as described here.

Once you have some checklist items in your new checklist, you can create the checklist page on the wiki. Type the URL you want using this format: https://dimewiki.worldbank.org/wiki/Checklist:_Your_Checklist_Name. The checklist name here does not need to match the file name *checklist_name*.js but it is good if they are similar.

To create the wiki page for the checklist, use this template below. You do not have to copy and paste the code in teh box below, you can simply type `{{subst:checklist}}` to import the code below. After you created the artikle, you need to update the *checklist_URL* to the URL of the checklist on the wiki you just created and "*chk_checklistName*.js" to the file name you chose above (but do not include .js).

```text.html.mediawiki
Get printable version by clicking on ''printable version'' in the menu to the left. Find instructions for editing the checklist [https://github.com/worldbank/DIMEwiki/tree/master/Topics/Checklists here]. The latest version of this checklist can be found at https://dimewiki.worldbank.org/wiki/checklist_URL.

<div id="checklist_name"></div>

==Back to Parent ==
This article is part of the topic [[Check Lists]]

[[Category: Check Lists]]

```

The final thing you need to do is to go to [MediaWiki:Common.js](https://dimewiki.worldbank.org/wiki/MediaWiki:Common.js) and add your *checklistName* to the checklist array that looks like this:

```javascript
checklists = [
  'chk_surveyprep', 'chk_questcont', 'chk_questdata',
  'chk_microdata', 'chk_datacleaning', 'checklistName'
];
```

After follwoing these three steps you can now see your checklist on the wiki page, and you can keep editing it using GitHub.

## Brief technical documentation
(KB: I will do this later)

The checklists are edited here on GitHub and pulled into the wiki page using an [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming) call to the [GitHub API](https://developer.github.com/v3/)
