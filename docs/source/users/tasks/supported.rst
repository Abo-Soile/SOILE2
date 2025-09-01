Supported Formats
=================

SOILE currently supports the following types of tasks:

1. Questionnaires in the [SOILE questionnaire language](https://abo-soile.github.io/SOILE-QuestionaireMarkup/qml.html)
2. Tasks in the [SOILE experiment language](https://abo-soile.github.io/SOILE-elang/elang.html)
3. Experiments from [PsychoJS](https://github.com/psychopy/psychojs) created with the [PsychoPy Builder](https://www.psychopy.org/builder/)
4. Pure Javascript tasks.

PsychoJS support depends on an adaption of the psychoJS library for integration into the SOILE framework. 
Not all PsychoJS versions are supported, but if a specific version needs support this can commonly be achieved.
Please contact the developers by raising an issue in the repository.

.. toctree::
   :maxdepth: 2
   :caption: Contents:      
   
   qlang
   elang
   javascript
