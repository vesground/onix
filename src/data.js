export const profile = {
  firstName: 'Jean',
  lastName: 'Gonzales',
  position: 'Product Owner',
  photoUrl: 'public/images/disruptive-employee.jpg',
  tasksCount: {
    completed: 372,
    open: 11
  }
};

export const events = [
  {
    type: 'mark',
    title: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users',
    createdAt: Date.now(),
  },
  {
    type: 'comment',
    title: 'Emilee Simchenko commented on Account for teams and personal in bottom style',
    meta: {
      target: {
        title: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes'
      }
    },
    createdAt: Date.now(),
  },
  {
    type: 'upload',
    title: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects',
    meta: {
      files: []
    },
    createdAt: Date.now(),
  },
]
