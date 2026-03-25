Quickstart : Project
====================

This guide shows you how to set up a new project and how to use it in SOILE.
Let's begin

Initialize a new Project
~~~~~~~~~~~~~~~~~~~~~~~~

To create a Project you go to Project Editing -> Project -> New, which will lead you to the following view

The overall setup is the same as for experiments, and you can do pretty much the same things in a project that you can do in an experiment.
The main difference is that Experiments are conceptually more about grouping tasks together, while projects are the blueprints for studies. 
We will now create our first project AND look at a few features that we have passed by in the experiment setup. 

Create your first project
~~~~~~~~~~~~~~~~~~~~~~~~~

What we want to do in the project is to:
1. Have an initial questionnaire.
2. Then, depending on whether we have a smoker or non smoker, we either want to run an experiment or just one of two tasks.
   - in the experiment we want to randomize the order of the tasks contained, as to not bias the results by the order
3. Finally we want both pathes to run a final Task, which is the same for smokers and non smokers.


Lets start by adding a Task Node to our project, setting it to "QuetionnaireExample" and the version to "Initial Version".
Next, add a filter node. 
Click on Edit and select "Smoker" as Filter name.




To create A Task Node in he experiment click on the TaskNode Button on the left. 
You can also drag and drop a Task node onto the experiment area. 
You can rename the Element by clicking on the Thre Bar Manu, and selecting Rename.

.. image:: /_static/images/quickstart/experiment/Rename.png
  :alt: Rename the Task


Modify your Experiment
----------------------

Let's rename it to questionnaire (as was done before). 
Currently, this task is just a place holder. We will now assign the actual task we want to perform to it.
This can be done by clicking 'edit' in the Task Node. 

.. image:: /_static/images/quickstart/experiment/TaskEdit.png
  :alt: Edit the Task

We will create this task as a questionnaire, with the actual task being the "QuestionnaireExample" and the Version being the 
"Initial Version" of this task.

For this tutorial, we wil ignore the other settings (output data and persistent data).
Those will be detailed in the Project Tutorial.

Now that we have added our questionnaire, let's also add a second task, call it "Experiment"
and assign it the "ElangExp" task. 

Now we have to connect our two tasks to indicate the "normal" order of the tasks within the experiment.
The green border around our Questionnaire task indicates that this is the normal starting task of the experiment.
draw a line from the next field of the Questionnaire to the previous field of the Experiment node.


Saving your Experiment
----------------------

Let's give our Experiment a name (click on the cog wheel in the upper left) and select a name. 
You can opt to have the experiment be a private experiment, which would hide it from other researchers. 
By default all experiments are public, meaning all users of the platform can benefit from new experiments created by other researchers.

Finally click on the floppy disk icon to save the experiment.
As with all other elements on the platform, each saving creates a new Version of the element, allowing you to always go back to 
what you had before.


