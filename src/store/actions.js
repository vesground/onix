export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY'

export const SidebarVisibilityStatuses = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
}

export function setSidebarVisibility(status) {
  return { type: SET_SIDEBAR_VISIBILITY, status }
}
