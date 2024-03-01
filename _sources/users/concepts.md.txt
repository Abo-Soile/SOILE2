# SOILE Concepts

There are a couple of expressions we will use within this documentatio that might at times be unclear,
since they could mean different things. So here is a list of things that we would like to clarify before
going on.

- Task:

  - A Task in SOILE is any self-contained exercise/questionnaire presented to the user.
  - For optimal use, we suggest to split any code into the minimal self-contained unit.

- Experiment:

  - An experiment in the SOILE context is a collection of Tasks that is reusable in multiple projects.
  - An experiment also allows grouping tasks for randomization, where random execution otherwise would
    require complex structures (e.g. the researcher wants users to run several tasks in a random order,
    this is easiest achieved by
    combining multiple tasks into one experiment )

- Projects:

  - A Project in SOILE is a collection of Tasks and experiments, that represents the exercises and
    questionnaires used in a study. You can use the samee features as in an experiment, but only projects
    can be run as studies.

- Study:
  - Within the context of SOILE, a study refers to a project that is made available (or can be made
    available if inactive) to participants. A study, once started cannot be altered if there are active
    participants, i.e. if anyone has already signed up.
    This is to ensure data integrity within a set of results.

In addition to these concepts there are also some general ideas that are behind the sdevelopment of SOILE.
In short those are:

- Versioning:
  - All elements of SOILE are under version control. Essentially this means that all tasks, experiments
    and projects created with SOILE are stored such that any change can be tracked and reverted.
    While you can alter the visible Versions of an a SOILE element, the actual data is not deleted.
    This ensures, that if e.g. a certain version of a task is used in one project, even if it is
    deleted, the project still works.  
    This means, that whenever you save a task/experiment/project you will have to provide a version identifier, which can then be used to uniquely identify that version.
