﻿export class DefaultFuntionalities {
  constructor() {
    this.ProjectData = [
      {
        taskID: 1,
        taskName: 'Project Schedule',
        startDate: '02/06/2017',
        endDate: '03/13/2017',
        subtasks: [
          {
            taskID: 2,
            taskName: 'Planning',
            startDate: '02/06/2017',
            endDate: '02/10/2017',
            subtasks: [
                          { taskID: 3, taskName: 'Plan timeline', startDate: '02/06/2017', endDate: '02/10/2017', duration: 5, progress: '100', resourceId: [1] },
                          { taskID: 4, taskName: 'Plan budget', startDate: '02/06/2017', endDate: '02/10/2017', duration: 5, progress: '100', resourceId: [1] },
                          { taskID: 5, taskName: 'Allocate resources', startDate: '02/06/2017', endDate: '02/10/2017', duration: 5, progress: '100', resourceId: [1] },
                          { taskID: 6, taskName: 'Planning complete', startDate: '02/10/2017', endDate: '02/10/2017', duration: 0, predecessor: '3,4,5' }
            ]
          },
          {
            taskID: 7,
            taskName: 'Design',
            startDate: '02/13/2017',
            endDate: '02/17/2017',
            subtasks: [
                          { taskID: 8, taskName: 'Software Specification', startDate: '02/13/2017', endDate: '02/15/2017', duration: 3, progress: '60', predecessor: '6FS', resourceId: [2] },
                          { taskID: 9, taskName: 'Develop prototype', startDate: '02/13/2017', endDate: '02/15/2017', duration: 3, progress: '100', predecessor: '6FS', resourceId: [3] },
                          { taskID: 10, taskName: 'Get approval from customer', startDate: '02/16/2017', endDate: '02/17/2017', duration: 2, progress: '100', predecessor: '9FS', resourceId: [1] },
                          { taskID: 11, taskName: 'Design complete', startDate: '02/17/2017', endDate: '02/17/2017', duration: 0, predecessor: '10FS'}
            ]
          },
          {
            taskID: 12,
            taskName: 'Implementation Phase',
            startDate: '02/20/2017',
            endDate: '03/02/2017',
            subtasks: [
              {
                taskID: 13,
                taskName: 'Phase 1',
                startDate: '02/20/2017',
                endDate: '03/02/2017',
                subtasks: [{
                  taskID: 14,
                  taskName: 'Implementation Module 1',
                  startDate: '02/20/2017',
                  endDate: '03/02/2017',
                  subtasks: [
                                      { taskID: 15, taskName: 'Development Task 1', startDate: '02/20/2017', endDate: '02/22/2017', duration: 3, progress: '50', predecessor: '11FS', resourceId: [3] },
                                      { taskID: 16, taskName: 'Development Task 2', startDate: '02/20/2017', endDate: '02/22/2017', duration: 3, progress: '50', predecessor: '11FS', resourceId: [3] },
                                      { taskID: 17, taskName: 'Testing', startDate: '02/23/2017', endDate: '02/24/2017', duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: [4] },
                                      { taskID: 18, taskName: 'Bug fix', startDate: '02/27/2017', endDate: '02/28/2017', duration: 2, progress: '0', predecessor: '17FS', resourceId: [3] },
                                      { taskID: 19, taskName: 'Customer review meeting', startDate: '03/01/2017', endDate: '03/02/2017', duration: 2, progress: '0', predecessor: '18FS', resourceId: [1] },
                                      { taskID: 20, taskName: 'Phase 1 complete', startDate: '03/02/2017', endDate: '03/02/2017', duration: 0, predecessor: '19FS' }


                  ]
                }]
              },

              {
                taskID: 21,
                taskName: 'Phase 2',
                startDate: '02/20/2017',
                endDate: '03/03/2017',
                subtasks: [{
                  taskID: 22,
                  taskName: 'Implementation Module 2',
                  startDate: '02/20/2017',
                  endDate: '03/03/2017',
                  subtasks: [
                                      { taskID: 23, taskName: 'Development Task 1', startDate: '02/20/2017', endDate: '02/23/2017', duration: 4, progress: '50', resourceId: [3] },
                                      { taskID: 24, taskName: 'Development Task 2', startDate: '02/20/2017', endDate: '02/23/2017', duration: 4, progress: '50', resourceId: [3] },
                                      { taskID: 25, taskName: 'Testing', startDate: '02/24/2017', endDate: '02/27/2017', duration: 2, progress: '0', predecessor: '23FS,24FS', resourceId: [4] },
                                      { taskID: 26, taskName: 'Bug fix', startDate: '02/28/2017', endDate: '03/01/2017', duration: 2, progress: '0', predecessor: '25FS', resourceId: [3] },
                                      { taskID: 27, taskName: 'Customer review meeting', startDate: '03/02/2017', endDate: '03/03/2017', duration: 2, progress: '0', predecessor: '26FS', resourceId: [1] },
                                      { taskID: 28, taskName: 'Phase 2 complete', startDate: '03/03/2017', endDate: '03/03/2017', duration: 0, predecessor: '27FS' }

                  ]
                }]
              },

              {
                taskID: 29,
                taskName: 'Phase 3',
                startDate: '02/20/2017',
                endDate: '03/02/2017',
                subtasks: [{
                  taskID: 30,
                  taskName: 'Implementation Module 3',
                  startDate: '02/20/2017',
                  endDate: '03/02/2017',
                  subtasks: [
                                      { taskID: 31, taskName: 'Development Task 1', startDate: '02/20/2017', endDate: '02/22/2017', duration: 3, progress: '50', resourceId: [3] },
                                      { taskID: 32, taskName: 'Development Task 2', startDate: '02/20/2017', endDate: '02/22/2017', duration: 3, progress: '50', resourceId: [3] },
                                      { taskID: 33, taskName: 'Testing', startDate: '02/23/2017', endDate: '02/24/2017', duration: 2, progress: '0', predecessor: '31FS,32FS', resourceId: [4] },
                                      { taskID: 34, taskName: 'Bug fix', startDate: '02/27/2017', endDate: '02/28/2017', duration: 2, progress: '0', predecessor: '33FS', resourceId: [3] },
                                      { taskID: 35, taskName: 'Customer review meeting', startDate: '03/01/2017', endDate: '03/02/2017', duration: 2, progress: '0', predecessor: '34FS', resourceId: [1] },
                                      { taskID: 36, taskName: 'Phase 3 complete', startDate: '03/02/2017', endDate: '03/02/2017', duration: 0, predecessor: '35FS' }

                  ]
                }]
              }
            ]
          },
                  { taskID: 37, taskName: 'Integration', startDate: '03/06/2017', endDate: '03/08/2017', duration: 3, progress: '0', predecessor: '20FS,28FS,36FS', resourceId: [3] },
                  { taskID: 38, taskName: 'Final Testing', startDate: '03/09/2017', endDate: '03/10/2017', duration: 2, progress: '0', predecessor: '37FS', resourceId: [4] },
                  { taskID: 39, taskName: 'Final Delivery', startDate: '03/10/2017', endDate: '03/10/2017', duration: 0, predecessor: '38FS'}
        ]
      }
    ];
  }
}
