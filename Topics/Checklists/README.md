# Documentation for checklist on the DimeWiki.

The DimeWiki is a resource with best practices for data management, field work and other topics related to data work in devlopment research. See the [main page](https://dimewiki.worldbank.org/wiki/Main_Page) of the wiki. On this wiki there are multiple checklists that can be used to help rembering bestpractices in important steps of the data collection. See those checklists [here](https://dimewiki.worldbank.org/wiki/Check_Lists). This README file shows documentation on how to [edit an already existing checklist](#edit-a-checklist), how to [create a new checklist](#create-a-checklist) and a [brief technical documentation](#brief-technical-documentation) on how the checklist data is pulled from GitHub and generated to checklist on the wiki. You do not need to understand the technical documentation to edit or create checklists.

## Edit a checklist
To edit a checklist you need to have a GitHub account. If you do not have one, create one for free [here](https://github.com/join).

To edit the checklist go to [the checklist folder](https://github.com/worldbank/DIMEwiki//Topics/Checklists/checklists) (KB: This link won't work until this branch is merged) and click the checklist that you want to edit. On the wiki you can find the name of the checklist at the bottom of the checklist (KB: I will add this if we decide for this).

If you are familiar with GitHub you can clone this repository and edit this file on your computer, but an easier way would be to update it in the browser. To do that, click the pen icon above the file next to the buttons _raw_, _blame_ and _history_.

Here you can edit the checklist. Each checklist item is one array on this format `[number,'text']`. The **text** must be enclosed in double qoutes (`"`). If you want to use a double qoutes in a text then you need to wirite `\"` as in `"This is an \"example\"."`. The **number** indicates the titel level, where 1 is the section title, and 2 is a sub-item, 3 is a sub-sub item, and so forth. There is no limit how many layers of sub-sub-sub items you use. The numbering of items is generated in the wiki, so if you have two sub-items after each other, both of them should have the number 2. See example below:

```
  [1,"Main Title 1"],
   [2,"Sub item 1.1"],
   [2,"Sub item 1.2"],
  [1,"Main Title 2"],
   [2,"Sub item 2.1"],
    [3,"Sub-sub item 2.1.1"],
   [2,"Sub item 2.2"]
```

The indentation is not necessary but makes the list easier to read. Note that each array **must** be separated with a comma. So if you add a new item, make sure it is followed by a comma unless it is the last item.

When you are done with your edits you need to "commit" your changes, which means saving to GitHub. If you are a collaborator of this repository you have the option to **commit directly** otherwise you will be asked to **propose file change**. When you propose a change the edit will be sent to a collaborator for approval. It is very helpful if enter a description of your edit in the optional description field.

## Create a checklist

## Brief technical documentation
The checklists are edited here on GitHub and pulled into the wiki page using an [https://en.wikipedia.org/wiki/Ajax_(programming) AJAX] call to the [https://developer.github.com/v3/ GitHub API]
