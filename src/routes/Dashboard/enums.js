import Events from 'routes/Dashboard/Events';

export const DefaultComponent = () => 'No component defined!';

export const TABS = {
  tasks: {
    title: 'Tasks',
  },
  kanban: {
    title: 'Kanban',
  },
  activity: {
    title: 'Activity',
    default: true,
    component: Events,
  },
  calendar: {
    title: 'Calendar',
  },
  files: {
    title: 'Files',
  },
};
export const TABS_LIST = Object.entries(TABS);
