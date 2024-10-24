# rjc
RESTful Job Control

_A recipe for supporting general workflow management for independent service interfaces_

This profile provides a basic set of actions and metadata for orchestrating independent services on the open web.

Each **job** contains one or more **tasks**. The set of tasks in each job MUST be able to run in parallel. Each task SHOULD be repeatable and reversible. Each job SHOULD be restartable and reentrant.

To run a job, the job document should be submitted to a workflow engine. Upon recieving the document the workflow engine will return a `202 Accepted` while the tasks are processed and will eventually return a `200 OK` or a `4xx/5xx` HTTP status with the completed response. Upon completion of a job, that job document MAY be archived for future reference (or re-execution) and the appropriate link (jobSuccessURL or jobFailedURL) SHOULD be activated.

Compliant Workflow engines MUST be prepared to handle the `taskURL`, `taskRollbackURL`, and `taskRerunURL` properties as well as monitor/update progress via `taskStatus` and `jobStatus`. The engines SHOULD also monitor the `jobMaxTTL` and `taskMaxTTL` values and cancel jobs where the maximum run time has been exceeded.

Tasks that need to be run in a fixed sequence MUST be separated into individual job documents and those job documents can be run in fixed order as each job successfully completes.

NOTE: Workflow authoring services MAY be separate from workflow execution services. The editor and the engine don't need to be hosted within the same service interface. 
