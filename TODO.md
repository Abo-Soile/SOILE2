[X] For the elang code: provide formerly stored persistant data for a participant on an endpoint. The e_language runner will convert the outputs back and forth.

- [x] Back-end implementation to retrieve Output Data of a user
- [x] Front-End implementation in the elanguage runner to convert the data into what is expected by the back-end (and the back-end data into whats expected byt he front-end)
      [X] User Management in the Front-End.
      [X] Java-Script API for the frontend

[X] BackEnd: Make Element Instances have positions.

[X] Check, whether Experiments should also get an explicit START node (which is overridden by randomization)

[ ] ?? LOGIC Change: EXECUTE Permissions don't make any sense. This MUST be a separate permissions Array, acess to which is controlled via the study end points and is independent of other types of permissions, i.e. under the control of a researcher with full access to a Study. Currently execute interfers with setting permissions for project components quite substantially. ??

- [ ] Cleanup Functionality
  - [ ] Cleanup for orphan files, i.e. files that were uploaded during a project but not associated with an actual result.
  - [x] Cleanup for orphan git versions. Need to check how we can clean up the git database makeing sure not to loose any versions that are still required.
  - [ ] Automatic cleanup (including object cleanup);

[ ] Persistant Data for JS.

Usability

- [ ] Help with building Filters (checking, whether it's possible etc)

  - [ ] Some Pseudo Math editor like functionality or logical editor. This could be done via baklava, but probably unnecesarily complex. Something that allows to drag available outputs and puts them in a scheme with operators?
        [X] Tag Management for Elements

- [x] Allow Removing tags from Elements
  - [x] Back-End
  - [x] Front-End
- [x] Allow Adding Tags to Elements (e.g. when loading an untagged version of a task where the tag had been removed)

  - [x] Back-End
  - [x] Front-End

- [x] Import PsychoJS Tasks

  - [x] Helper functionality to covert an existing PsychoJS task?
    - [ ] Import/Export Tasks
  - [x] Back-End Load/Save a Task from/yo a Zip File
  - [x] Front-End Upload a Zip file

Front-End:

- [ ] Handling of unversioned Elements in the Experiment/Project editors
- [x] Link to Open Tasks from the Project/Experiment Editor
- [x] Link to Open Experiments from the Project/Experiment Editor
- [x] Layouting for the Editor Components

- [ ] Keep state of data in the tabs. (partially done, needs testing)
- [ ] Piloting
  - Add option to define some parameters
- [ ] Task Preview
  - [x] Run Tasks independently
  - [ ] Allow setting input (persistent data) for tasks.

Back-End:

- [ ] Back-End Avoid duplicate files in the DataLake (potentially doable via using md5 hashes for the files instead of temporary file names, but is it too expensive?)
- [ ] Make sure the access token gets supplied along with the results for a participant (if available)
- [ ] Fix
      Data Security:

- [x] Fix Registering
- [ ] Indicator for Participants who withdrew their data
- [x] Fix loading of questionnaire markup
- [ ] Check what's going wrong with chrome in piloting
- [ ] how to create "personalized" links / identifyable link (maybe using the token from signup?)
- [x] Add Timestamps to results
- [ ] Allow Continue/Start buttons to be in a specific language. (Probably best to define in the study)

- [ ] Allow setting questions to be required/optional (QMarkup)
- [ ] Indicator for number of attempts
