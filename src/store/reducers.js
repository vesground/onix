import { SET_SIDEBAR_VISIBILITY, SidebarVisibilityStatuses } from 'store/actions'

const initialState = {
  sidebarVisibility: SidebarVisibilityStatuses.OPEN,
}

function handleSidebarStatus(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case SET_SIDEBAR_VISIBILITY:
      return Object.assign({}, state, {
        visibilityFilter: action.status
      })
    default:
      return state
  }
}

export default handleSidebarStatus;
